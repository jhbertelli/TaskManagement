using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using TaskManagement.Domain;
using TaskManagement.Domain.Repositories;
using TaskManagement.Infrastructure.Repositories;

namespace TaskManagement.Infrastructure
{
    public static class DependecyInjection
    {
        public static void AddInfrastuctureServices(this IServiceCollection services, ConfigurationManager appSettings)
        {
            services.AddDbContext<TaskManagementDbContext>(options =>
                options.UseNpgsql(
                    appSettings.GetConnectionString("TaskManagementDbConnectionString")
                )
            );

            services.ConfigureRepositories();

            services.ConfigureIdentity(appSettings);
        }

        public static async Task MigrateDatabase(this IServiceProvider appServices)
        {
            using var scope = appServices.CreateScope();
            using var dbContext = scope
                .ServiceProvider
                .GetRequiredService<TaskManagementDbContext>();

            await dbContext.Database.MigrateAsync();
        }

        private static void ConfigureIdentity(this IServiceCollection services, ConfigurationManager appSettings)
        {
            services.AddIdentityCore<User>()
                .AddTokenProvider<DataProtectorTokenProvider<User>>("TaskManagement")
                .AddEntityFrameworkStores<TaskManagementDbContext>()
                .AddDefaultTokenProviders();

            services.Configure<IdentityOptions>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequiredLength = 6;
                options.Password.RequiredUniqueChars = 1;
            });

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = appSettings["Jwt:Issuer"],
                        ValidAudience = appSettings["Jwt:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(
                            Encoding.UTF8.GetBytes(appSettings["Jwt:Key"]!)
                        )
                    });
        }

        private static void ConfigureRepositories(this IServiceCollection services)
        {
            services.AddScoped<ITokenRepository, TokenRepository>();
        }
    }
}
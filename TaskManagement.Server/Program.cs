using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using TaskManagement.Server;
using TaskManagement.Server.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
ConfigureServices(builder.Services, builder.Configuration);

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

await MigrateDatabase(app);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

await app.RunAsync();

static void ConfigureServices(IServiceCollection services, ConfigurationManager appSettings)
{
    services.AddControllers();
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    services.AddEndpointsApiExplorer();
    services.AddSwaggerGen();

    services.AddDbContext<TaskManagementDbContext>(options =>
        options.UseNpgsql(
            appSettings.GetConnectionString("TaskManagementDbConnectionString")
        )
    );

    ConfigureFluentValidation(services);

    ConfigureIdentity(services, appSettings);
}

static void ConfigureIdentity(IServiceCollection services, ConfigurationManager appSettings)
{
    services.AddScoped<ITokenRepository, TokenRepository>();

    services.AddIdentityCore<IdentityUser>()
        .AddTokenProvider<DataProtectorTokenProvider<IdentityUser>>("TaskManagement")
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

static void ConfigureFluentValidation(IServiceCollection services)
{
    services.AddValidatorsFromAssemblyContaining<Program>();
    services.AddFluentValidationAutoValidation();
    services.AddFluentValidationClientsideAdapters();
}

static async Task MigrateDatabase(WebApplication app)
{
    using var scope = app.Services.CreateScope();
    using var dbContext = scope.ServiceProvider.GetRequiredService<TaskManagementDbContext>();

    await dbContext.Database.MigrateAsync();
}

using System.Text.Json.Serialization;
using TaskManagement.Application.Contracts;
using TaskManagement.Application.Middlewares;
using TaskManagement.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers().AddJsonOptions(options =>
    options
        .JsonSerializerOptions
        .Converters
        .Add(new JsonStringEnumConverter())
);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add services to the container.
builder.Services.AddInfrastuctureServices(builder.Configuration);

builder.Services.AddFluentValidationService();

const string corsAllowOriginsString = "_corsAllowOrigins";

builder.Services.AddCors(options =>
    options.AddPolicy(corsAllowOriginsString,
        policy => policy
            .WithOrigins(builder.Configuration["ClientUrl"]!)
            .AllowAnyHeader()
            .AllowAnyMethod()
    )
);

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

await app.Services.MigrateDatabase();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(corsAllowOriginsString);

app.UseAuthorization();

app.MapControllers();

app.UseMiddleware<ExceptionHandlerMiddleware>();

app.MapFallbackToFile("/index.html");

await app.RunAsync();

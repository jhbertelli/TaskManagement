using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.Extensions.DependencyInjection;

namespace TaskManagement.Application.Contracts
{
    public static class DependecyInjection
    {
        public static void AddFluentValidationService(this IServiceCollection services)
            => services
            .AddValidatorsFromAssemblyContaining(typeof(DependecyInjection))
            .AddFluentValidationAutoValidation()
            .AddFluentValidationClientsideAdapters();
    }
}

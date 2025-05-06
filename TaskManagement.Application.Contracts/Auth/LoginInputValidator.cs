using FluentValidation;
using TaskManagement.Domain;

namespace TaskManagement.Application.Contracts.Auth
{
    public class LoginInputValidator : AbstractValidator<LoginInput>
    {
        public LoginInputValidator()
        {
            RuleFor(i => i.Email)
                .NotEmpty()
                .EmailAddress()
                .MaximumLength(UserConsts.EmailMaxLength);

            RuleFor(i => i.Password)
                .NotEmpty();
        }
    }
}

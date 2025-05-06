using FluentValidation;
using TaskManagement.Domain;

namespace TaskManagement.Application.Contracts.Auth
{
    public class RegisterInputValidator : AbstractValidator<RegisterInput>
    {
        public RegisterInputValidator()
        {
            RuleFor(i => i.Email)
                .NotEmpty()
                .EmailAddress()
                .MaximumLength(UserConsts.EmailMaxLength);

            RuleFor(i => i.Name)
                .NotEmpty()
                .MaximumLength(UserConsts.NameMaxLength);

            RuleFor(i => i.Password)
                .NotEmpty()
                .MinimumLength(UserConsts.PasswordMinLength); // todo: password rules
        }
    }
}

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

            RuleFor(i => i.UserName)
                .NotEmpty()
                .MaximumLength(UserConsts.UserNameMaxLength);

            RuleFor(i => i.Password)
                .NotEmpty(); // todo: password rules
        }
    }
}

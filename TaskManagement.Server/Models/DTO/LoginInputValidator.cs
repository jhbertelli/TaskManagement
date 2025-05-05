using FluentValidation;
using TaskManagement.Domain;

namespace TaskManagement.Server.Models.DTO
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
                .NotEmpty(); // todo: password rules
        }
    }
}

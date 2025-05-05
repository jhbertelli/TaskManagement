using FluentValidation;

namespace TaskManagement.Server.Models.DTO
{
    public class RegisterInputValidator : AbstractValidator<RegisterInput>
    {
        public RegisterInputValidator()
        {
            RuleFor(i => i.Email)
                .NotEmpty()
                .EmailAddress();

            RuleFor(i => i.UserName)
                .NotEmpty();

            RuleFor(i => i.Password)
                .NotEmpty(); // todo: password rules
        }
    }
}

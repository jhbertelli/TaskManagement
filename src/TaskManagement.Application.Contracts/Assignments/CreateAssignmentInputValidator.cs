using FluentValidation;
using TaskManagement.Domain.Assignments;

namespace TaskManagement.Application.Contracts.Assignments
{
    public class CreateAssignmentInputValidator : AbstractValidator<CreateAssignmentInput>
    {
        public CreateAssignmentInputValidator()
        {
            RuleFor(i => i.Name)
                .NotEmpty()
                .Length(AssignmentConsts.NameMinLength, AssignmentConsts.NameMaxLength);

            RuleFor(i => i.AssignedUserId)
                .NotEmpty();

            RuleFor(i => i.Deadline)
                .NotEmpty();

            RuleFor(i => i.Priority)
                .NotNull()
                .IsInEnum();

            RuleFor(i => i.Section)
                .NotNull()
                .IsInEnum();

            When(i => i.AlertType.HasValue,
                () => RuleFor(i => i.AlertType)
                .IsInEnum()
            );

            When(i => i.Description != null,
                () => RuleFor(i => i.Description)
                .MaximumLength(AssignmentConsts.DescriptionMaxLength)
            );
        }
    }
}

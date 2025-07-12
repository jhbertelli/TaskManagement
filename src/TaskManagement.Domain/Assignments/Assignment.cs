using Ardalis.GuardClauses;

namespace TaskManagement.Domain.Assignments;

public class Assignment : IEntity<Guid>
{
    public Assignment(
        Guid assignedUserId,
        DateTime deadline,
        string name,
        AssignmentPriority priority,
        AssignmentSection section,
        AssignmentAlertType? alertType = null,
        string? description = null
    )
    {
        AssignedUserId = Guard.Against.Default(assignedUserId);

        Deadline = Guard.Against.Default(deadline);

        Name = Guard.Against.LengthOutOfRange(
            Guard.Against.NullOrEmpty(name),
            AssignmentConsts.NameMinLength,
            AssignmentConsts.NameMaxLength
        );

        Priority = Guard.Against.EnumOutOfRange(priority);
        Section = Guard.Against.EnumOutOfRange(section);

        AlertType = alertType == null
            ? null
            : Guard.Against.EnumOutOfRange((AssignmentAlertType)alertType);
        Description = string.IsNullOrWhiteSpace(description)
            ? null
            : Guard.Against.StringTooLong(description, AssignmentConsts.DescriptionMaxLength);
    }

    public AssignmentAlertType? AlertType { get; set; }

    public User? AssignedUser { get; set; }

    public Guid AssignedUserId { get; set; }

    public string? CancellationReason { get; set; }

    public DateTime? ConclusionDate { get; set; }

    public string? ConclusionNote { get; set; }

    public DateTime Deadline { get; set; }

    public string? Description { get; set; }

    public Guid Id { get; set; }

    public string Name { get; set; }

    public AssignmentPriority Priority { get; set; }

    public AssignmentSection Section { get; set; }

    public AssignmentStatus Status { get; set; }

    public Assignment Complete(DateTime conclusionDate, string? conclusionNote)
    {
        ConclusionDate = Guard.Against.Default(conclusionDate);

        ConclusionNote = string.IsNullOrWhiteSpace(conclusionNote)
            ? null
            : Guard.Against.StringTooLong(conclusionNote, AssignmentConsts.ConclusionNoteMaxLength);

        Status = AssignmentStatus.Completed;

        return this;
    }
}

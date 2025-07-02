using TaskManagement.Domain.Assignments;

namespace TaskManagement.Application.Contracts.Assignments
{
    public class CreateAssignmentInput
    {
        public Guid AssignedUserId { get; set; }

        public DateTime Deadline { get; set; }

        public string Name { get; set; } = string.Empty;

        public AssignmentPriority Priority { get; set; }

        public AssignmentSection Section { get; set; }

        public AssignmentAlertType? AlertType { get; set; }

        public string? Description { get; set; }
    }
}

using TaskManagement.Domain.Assignments;

namespace TaskManagement.Application.Contracts.Assignments
{
    public class GetAssignmentOutput
    {
        public string AssignedUserEmail { get; set; } = string.Empty;

        public string AssignedUserName { get; set; } = string.Empty;

        public DateTime Deadline { get; set; }

        public string? Description { get; set; }

        public Guid Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public AssignmentPriority Priority { get; set; }

        public AssignmentSection Section { get; set; }
    }
}
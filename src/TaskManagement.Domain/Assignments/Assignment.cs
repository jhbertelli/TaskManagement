namespace TaskManagement.Domain.Assignments
{
    public class Assignment
    {
        public string Name { get; set; } = string.Empty;

        public User? AssignedUser { get; set; }

        public Guid AssignedUserId { get; set; }

        public DateTime Deadline { get; set; }

        public AssignmentPriority Priority { get; set; }

        public string Description { get; set; } = string.Empty;

        public AssignmentSection Section { get; set; }

        public AssignmentAlertType? AlertType { get; set; }

        public AssignmentStatus Status { get; set; }

        public DateTime? ConclusionDate { get; set; }

        public string? ConclusionNote { get; set; }

        public string? CancellationReason { get; set; }
    }
}

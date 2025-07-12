namespace TaskManagement.Application.Contracts.Assignments
{
    public class CancelAssignmentInput
    {
        public string CancellationReason { get; set; } = string.Empty;

        public Guid Id { get; set; }
    }
}
namespace TaskManagement.Application.Contracts.Assignments
{
    public class CompleteAssignmentInput
    {
        public DateTime ConclusionDate { get; set; }

        public string? ConclusionNote { get; set; }

        public Guid Id { get; set; }
    }
}
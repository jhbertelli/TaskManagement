namespace TaskManagement.Application.Contracts.Assignments
{
    public class GetAvailableAssigneesOutput
    {
        public Guid UserId { get; set; }

        public string UserEmail { get; set; } = string.Empty;

        public string UserName { get; set; } = string.Empty;
    }
}
namespace TaskManagement.Application.Contracts.Assignments
{
    public class GetAllAssignmentsOutput
    {

        public IEnumerable<GetAllAssignmentOutput> Result { get; set; } = [];
    }
}
namespace TaskManagement.Domain.Exceptions.Assignments;

public class CannotCompleteCanceledAssignmentException : BadUserRequestException
{
    public CannotCompleteCanceledAssignmentException() : base("You cannot mark a canceled assignment as completed.")
    {
    }
}
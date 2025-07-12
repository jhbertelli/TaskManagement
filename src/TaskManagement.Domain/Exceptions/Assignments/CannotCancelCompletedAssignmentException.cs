namespace TaskManagement.Domain.Exceptions.Assignments;

public class CannotCancelCompletedAssignmentException : BadUserRequestException
{
    public CannotCancelCompletedAssignmentException() : base("You cannot cancel a completed assignment.")
    {
    }
}
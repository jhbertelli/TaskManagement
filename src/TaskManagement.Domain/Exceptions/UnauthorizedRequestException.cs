namespace TaskManagement.Domain.Exceptions;

public class UnauthorizedRequestException : ClientException
{
    public UnauthorizedRequestException() : base("You are not authorized!")
    {
    }
    
    public UnauthorizedRequestException(string message) : base(message)
    {
    }
}

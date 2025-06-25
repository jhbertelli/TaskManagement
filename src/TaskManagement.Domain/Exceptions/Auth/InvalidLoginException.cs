namespace TaskManagement.Domain.Exceptions.Auth;

public class InvalidLoginException : BadUserRequestException
{
    public InvalidLoginException() : base("User e-mail or password invalid!")
    {
    }
}
namespace TaskManagement.Domain.Exceptions;

public class BadUserRequestException(string message) : ClientException(message)
{
}

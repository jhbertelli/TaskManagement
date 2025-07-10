namespace TaskManagement.Domain.Exceptions;

public class EntityNotFoundException(string entityName) :
    BadUserRequestException($"Entity {entityName} was not found.")
{
}

using TaskManagement.Domain;
using TaskManagement.Domain.Exceptions;

namespace TaskManagement;

public static class EntityExtensions
{
    public static IEntity<TPrimaryKey> CheckEntityNotFound<TPrimaryKey>(this IEntity<TPrimaryKey>? entity, string entityName)
        => entity ?? throw new EntityNotFoundException(entityName);
}

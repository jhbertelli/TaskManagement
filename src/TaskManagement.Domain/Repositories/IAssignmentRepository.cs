using TaskManagement.Domain.Assignments;

namespace TaskManagement.Domain.Repositories
{
    public interface IAssignmentRepository
    {
        public Task CreateAsync(Assignment assignment);

        public Task SaveChangesAsync();
    }
}

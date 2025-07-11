using TaskManagement.Domain.Assignments;

namespace TaskManagement.Domain.Repositories
{
    public interface IAssignmentRepository
    {
        public Task CreateAsync(Assignment assignment);

        public IQueryable<Assignment> GetAll();

        public Task SaveChangesAsync();
    }
}

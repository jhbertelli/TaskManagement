using TaskManagement.Domain.Assignments;
using TaskManagement.Domain.Repositories;

namespace TaskManagement.Infrastructure.Repositories;

public class AssignmentRepository : IAssignmentRepository
{
    private readonly TaskManagementDbContext _dbContext;

    public AssignmentRepository(TaskManagementDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task CreateAsync(Assignment assignment)
        => await _dbContext.Assignments.AddAsync(assignment);

    public IQueryable<Assignment> GetAll()
        => _dbContext.Assignments.AsQueryable();

    public async Task SaveChangesAsync()
        => await _dbContext.SaveChangesAsync();

    public Task UpdateAsync(Assignment assignment)
    {
        throw new NotImplementedException();
    }
}
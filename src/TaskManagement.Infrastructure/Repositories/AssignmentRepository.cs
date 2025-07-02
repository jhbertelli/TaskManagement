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

    public async Task SaveChangesAsync()
        => await _dbContext.SaveChangesAsync();
}
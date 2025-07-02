using Microsoft.AspNetCore.Mvc;
using TaskManagement.Application.Contracts.Assignments;
using TaskManagement.Domain.Assignments;

namespace TaskManagement.Application.Controllers.Assignments;

[Route("api/[controller]")]
[ApiController]
public class AssignmentsController : ControllerBase
{
    private readonly Assignment _fakeAssignment = new(
        Guid.NewGuid(),
        DateTime.UtcNow,
        "My fake assignment",
        AssignmentPriority.Medium,
        AssignmentSection.Leisure
    );

    public AssignmentsController()
    {
    }

    [HttpGet]
    public async Task<GetAllAssignmentsOutput> GetAllAsync()
    {
        var assignments = new GetAllAssignmentsOutput()
        {
            Result = new List<GetAllAssignmentOutput>()
            {
                new()
                {
                    AssignedUserName = "temp",
                    Deadline = _fakeAssignment.Deadline,
                    Description = _fakeAssignment.Description,
                    Id = Guid.NewGuid(),
                    Name = _fakeAssignment.Name,
                    Priority = _fakeAssignment.Priority
                },
                new()
                {
                    AssignedUserName = "temp",
                    Deadline = _fakeAssignment.Deadline,
                    Description = _fakeAssignment.Description,
                    Id = Guid.NewGuid(),
                    Name = _fakeAssignment.Name,
                    Priority = _fakeAssignment.Priority
                },
            }
        };

        return await Task.FromResult(assignments);
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<Assignment> GetAsync(Guid id)
    {
        return await Task.FromResult(_fakeAssignment);
    }
}
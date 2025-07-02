using Microsoft.AspNetCore.Mvc;
using TaskManagement.Application.Contracts.Assignments;
using TaskManagement.Domain.Assignments;
using TaskManagement.Domain.Repositories;

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

    private readonly IAssignmentRepository _assignmentRepository;

    public AssignmentsController(IAssignmentRepository assignmentRepository)
    {
        _assignmentRepository = assignmentRepository;
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

    [HttpPost]
    public async Task CreateAsync(CreateAssignmentInput input)
    {
        var assignment = new Assignment(
            input.AssignedUserId,
            input.Deadline,
            input.Name,
            input.Priority,
            input.Section,
            input.AlertType,
            input.Description
        );

        await _assignmentRepository.CreateAsync(assignment);

        await _assignmentRepository.SaveChangesAsync();
    }
}
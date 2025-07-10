using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagement.Application.Contracts.Assignments;
using TaskManagement.Domain;
using TaskManagement.Domain.Assignments;
using TaskManagement.Domain.Repositories;

namespace TaskManagement.Application.Controllers.Assignments;

[Route("api/[controller]")]
[ApiController]
public class GetAssignmentController : ControllerBase
{
    private readonly Assignment _fakeAssignment = new(
        Guid.NewGuid(),
        DateTime.UtcNow,
        "My fake assignment",
        AssignmentPriority.Medium,
        AssignmentSection.Leisure
    );

    private readonly IAssignmentRepository _assignmentRepository;
    private readonly UserManager<User> _userManager;

    public GetAssignmentController(IAssignmentRepository assignmentRepository, UserManager<User> userManager)
    {
        _assignmentRepository = assignmentRepository;
        _userManager = userManager;
    }

    [HttpGet]
    [Route("GetAll")]
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

    [HttpGet]
    [Route("GetAvailableAssignees")]
    public async Task<GetAvailableAssigneesOutput[]> GetAvailableAssigneesAsync()
    {
        var assignees = await _userManager
            .Users
            .Select(user => new GetAvailableAssigneesOutput
            {
                UserEmail = user.Email!,
                UserName = user.Name,
                UserId = user.Id
            })
            .ToArrayAsync();

        return assignees;
    }
}
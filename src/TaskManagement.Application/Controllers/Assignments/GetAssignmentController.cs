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
    private readonly IAssignmentRepository _assignmentRepository;
    private readonly UserManager<User> _userManager;

    public GetAssignmentController(IAssignmentRepository assignmentRepository, UserManager<User> userManager)
    {
        _assignmentRepository = assignmentRepository;
        _userManager = userManager;
    }

    [HttpGet]
    [Route("GetAll")]
    public async Task<GetAllAssignmentsOutput[]> GetAllAsync()
    {
        var assignments = await _assignmentRepository
            .GetAll()
            .Include(assignment => assignment.AssignedUser)
            .Select(assignment => new GetAllAssignmentsOutput
            {
                AssignedUserName = assignment.AssignedUser!.Name,
                Deadline = assignment.Deadline,
                Description = assignment.Description,
                Id = assignment.Id,
                Name = assignment.Name,
                Priority = assignment.Priority
            })
            .ToArrayAsync();

        return assignments;
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<Assignment> GetAsync(Guid id)
    {
        var assignment = await _assignmentRepository
            .GetAll()
            .Where(assignment => assignment.Id == id)
            .FirstOrDefaultAsync();

        assignment.CheckEntityNotFound(nameof(Assignment));

        return assignment!;
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
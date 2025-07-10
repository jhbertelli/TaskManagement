using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TaskManagement.Application.Contracts.Assignments;
using TaskManagement.Domain;
using TaskManagement.Domain.Assignments;
using TaskManagement.Domain.Repositories;

namespace TaskManagement.Application.Controllers.Assignments;

[Route("api/[controller]")]
[ApiController]
public class CreateAssignmentController : ControllerBase
{
    private readonly IAssignmentRepository _assignmentRepository;
    private readonly UserManager<User> _userManager;

    public CreateAssignmentController(IAssignmentRepository assignmentRepository, UserManager<User> userManager)
    {
        _assignmentRepository = assignmentRepository;
        _userManager = userManager;
    }

    [HttpPost]
    [Route("Create")]
    public async Task CreateAsync(CreateAssignmentInput input)
    {
        var assignedUser = await _userManager
            .FindByIdAsync(input.AssignedUserId.ToString());

        assignedUser.CheckEntityNotFound(nameof(Domain.User));

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
using Microsoft.AspNetCore.Mvc;
using TaskManagement.Application.Contracts.Assignments;
using TaskManagement.Domain.Assignments;
using TaskManagement.Domain.Repositories;

namespace TaskManagement.Application.Controllers.Assignments;

[Route("api/[controller]")]
[ApiController]
public class CreateAssignmentController : ControllerBase
{
    private readonly IAssignmentRepository _assignmentRepository;

    public CreateAssignmentController(IAssignmentRepository assignmentRepository)
    {
        _assignmentRepository = assignmentRepository;
    }

    [HttpPost]
    [Route("Create")]
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
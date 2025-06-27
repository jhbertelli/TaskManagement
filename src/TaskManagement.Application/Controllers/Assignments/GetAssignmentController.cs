using Microsoft.AspNetCore.Mvc;
using TaskManagement.Domain.Assignments;

namespace TaskManagement.Application.Controllers.Assignments;

[Route("api/Assignments/[controller]")]
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

    public GetAssignmentController()
    {
    }

    [HttpGet]
    [Route("GetAll")]
    public async Task<List<Assignment>> GetAllAsync()
    {
        var assignments = new List<Assignment>()
        {
            _fakeAssignment
        };

        return await Task.FromResult(assignments);
    }

    [HttpGet]
    [Route("Get")]
    public async Task<Assignment> GetAsync()
    {
        return await Task.FromResult(_fakeAssignment);
    }
}
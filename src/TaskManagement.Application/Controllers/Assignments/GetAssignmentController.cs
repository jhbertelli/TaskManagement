using Microsoft.AspNetCore.Mvc;
using TaskManagement.Application.Contracts.Auth;
using TaskManagement.Domain.Assignments;

namespace TaskManagement.Application.Controllers.Assignments;

[Route("api/Assignments/[controller]")]
[ApiController]
public class GetAssignmentController : ControllerBase
{
    public GetAssignmentController()
    {
    }

    [HttpGet]
    [Route("GetAll")]
    public async Task<List<Assignment>> GetAllAsync()
    {
        var assignments = new List<Assignment>()
        {
            new()
        };

        return await Task.FromResult(assignments);
    }

    [HttpGet]
    [Route("Get")]
    public async Task<Assignment> GetAsync(LoginInput input)
    {
        return await Task.FromResult(new Assignment());
    }
}
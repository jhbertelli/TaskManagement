﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagement.Application.Contracts.Assignments;
using TaskManagement.Domain.Assignments;
using TaskManagement.Domain.Repositories;

namespace TaskManagement.Application.Controllers.Assignments;

[Route("api/[controller]")]
[ApiController]
public class UpdateAssignmentController : ControllerBase
{
    private readonly IAssignmentRepository _assignmentRepository;

    public UpdateAssignmentController(IAssignmentRepository assignmentRepository)
    {
        _assignmentRepository = assignmentRepository;
    }

    [HttpPatch]
    [Route("Complete")]
    public async Task CompleteAsync(CompleteAssignmentInput input)
    {
        var assignment = await _assignmentRepository
            .GetAll()
            .Where(assignment => assignment.Id == input.Id)
            .FirstOrDefaultAsync();

        assignment.CheckEntityNotFound(nameof(Assignment));

        assignment!
            .Complete(input.ConclusionDate, input.ConclusionNote);

        await _assignmentRepository.SaveChangesAsync();
    }
}
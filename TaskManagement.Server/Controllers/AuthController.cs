using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TaskManagement.Domain;
using TaskManagement.Server.Models.DTO;
using TaskManagement.Server.Repositories;

namespace TaskManagement.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly UserManager<User> _userManager;
    private readonly ITokenRepository _tokenRepository;

    public AuthController(UserManager<User> userManager, ITokenRepository tokenRepository)
    {
        _userManager = userManager;
        _tokenRepository = tokenRepository;
    }

    [HttpPost]
    [Route("Register")]
    public async Task<IActionResult> RegisterAsync(RegisterInput input)
    {
        var user = new User(input.UserName, input.Email);

        var identityResult = await _userManager.CreateAsync(user, input.Password);

        if (!identityResult.Succeeded)
        {
            return BadRequest("Something went wrong");
        }

        return Ok();
    }
}

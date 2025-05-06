using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TaskManagement.Application.Contracts.Auth;
using TaskManagement.Domain;
using TaskManagement.Domain.Repositories;

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

    // TODO: implement exception handling middleware
    [HttpPost]
    [Route("Register")]
    public async Task<IActionResult> RegisterAsync(RegisterInput input)
    {
        var user = new User(input.Email, input.Name);

        var identityResult = await _userManager.CreateAsync(user, input.Password);
        
        if (!identityResult.Succeeded)
        {
            return BadRequest("Something went wrong");
        }

        return Ok();
    }

    [HttpPost]
    [Route("Login")]
    public async Task<IActionResult> LoginAsync(LoginInput input)
    {
        var user = await _userManager.FindByEmailAsync(input.Email);

        if (user == null || !await _userManager.CheckPasswordAsync(user, input.Password))
        {
            return BadRequest("Username or password incorrect");
        }

        // create token
        var token = _tokenRepository.CreateJWTToken(user);

        var response = new LoginResponseOutput
        {
            JwtToken = token
        };

        return Ok(response);
    }
}
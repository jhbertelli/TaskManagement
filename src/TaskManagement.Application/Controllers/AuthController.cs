using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TaskManagement.Application.Contracts.Auth;
using TaskManagement.Domain;
using TaskManagement.Domain.Exceptions.Auth;
using TaskManagement.Domain.Repositories;

namespace TaskManagement.Application.Controllers;

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
    public async Task RegisterAsync(RegisterInput input)
    {
        var user = new User(input.Email, input.Name);

        var identityResult = await _userManager.CreateAsync(user, input.Password);
        
        if (!identityResult.Succeeded)
        {
            throw new IdentityRegisterErrorException(
                string.Join(
                    "",
                    identityResult
                    .Errors
                    .Select(error => error.Description + Environment.NewLine)
                )
            );
        }
    }

    [HttpPost]
    [Route("Login")]
    public async Task<LoginResponseOutput> LoginAsync(LoginInput input)
    {
        var user = await _userManager.FindByEmailAsync(input.Email);

        if (user == null || !await _userManager.CheckPasswordAsync(user, input.Password))
        {
            throw new InvalidLoginException();
        }

        var token = _tokenRepository.CreateJWTToken(user);

        var response = new LoginResponseOutput
        {
            JwtToken = token
        };

        return response;
    }
}
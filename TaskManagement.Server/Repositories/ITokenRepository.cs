using Microsoft.AspNetCore.Identity;

namespace TaskManagement.Server.Repositories
{
    public interface ITokenRepository
    {
        public string CreateJWTToken(IdentityUser user);
    }
}

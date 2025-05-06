using Microsoft.AspNetCore.Identity;

namespace TaskManagement.Domain.Repositories
{
    public interface ITokenRepository
    {
        public string CreateJWTToken(IdentityUser user);
    }
}

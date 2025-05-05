using Microsoft.AspNetCore.Identity;

namespace TaskManagement.Domain;

public class User : IdentityUser
{
    public User(string name, string email) : base(name)
    {
        Email = email;
    }

    protected User()
    {
    }
}

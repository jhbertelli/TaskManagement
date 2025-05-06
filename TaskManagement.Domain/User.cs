using Ardalis.GuardClauses;
using Microsoft.AspNetCore.Identity;

namespace TaskManagement.Domain;

public class User : IdentityUser
{
    public User(string email, string name) : base(email)
    {
        Email = Guard.Against.NullOrWhiteSpace(email);
        Name = Guard.Against.NullOrWhiteSpace(name);
    }

    protected User()
    {
    }

    public string Name { get; set; } = string.Empty;
}

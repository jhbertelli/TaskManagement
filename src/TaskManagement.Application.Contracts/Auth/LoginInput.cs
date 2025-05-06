namespace TaskManagement.Application.Contracts.Auth
{
    public class LoginInput
    {
        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;
    }
}
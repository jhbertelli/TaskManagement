namespace TaskManagement.Server.Models.DTO
{
    public class RegisterInput
    {
        public string Email { get; set; } = string.Empty;

        public string UserName { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;
    }
}

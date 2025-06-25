namespace TaskManagement.Domain.Exceptions.Auth
{
    public class IdentityRegisterErrorException : BadUserRequestException
    {
        public IdentityRegisterErrorException(string message) : base(message)
        {
        }
    }
}
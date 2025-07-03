namespace TaskManagement.Domain.Repositories
{
    public interface ITokenRepository
    {
        public string CreateJWTToken(User user);
    }
}

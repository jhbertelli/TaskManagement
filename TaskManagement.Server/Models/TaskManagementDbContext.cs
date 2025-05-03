using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace TaskManagement.Server.Models
{
    public class TaskManagementDbContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<IdentityUser> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql(@"Host=localhost;port=5432;Username=postgres;Password=1234;Database=taskmanagement");
    }
}
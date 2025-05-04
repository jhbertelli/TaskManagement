using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace TaskManagement.Server
{
    public class TaskManagementDbContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<IdentityUser> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql(@"Host=taskmanagement.database;Port=5432;Username=postgres;Password=1234;Database=taskmanagement");
    }
}
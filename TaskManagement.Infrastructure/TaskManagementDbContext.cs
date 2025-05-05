using Microsoft.EntityFrameworkCore;
using TaskManagement.Domain;
using TaskManagement.Infrastructure.Configurations;

namespace TaskManagement.Infrastructure;

public class TaskManagementDbContext : DbContext
{
    public TaskManagementDbContext(DbContextOptions<DbContext> options) : base(options)
    {
    }

    public TaskManagementDbContext() : base()
    {
    }

    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseNpgsql(@"Host=taskmanagement.database;Port=5432;Username=postgres;Password=1234;Database=taskmanagement");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        new UserConfiguration().Configure(modelBuilder.Entity<User>());
    }
}
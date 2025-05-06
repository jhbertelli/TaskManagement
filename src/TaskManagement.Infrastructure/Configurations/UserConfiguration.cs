using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TaskManagement.Domain;

namespace TaskManagement.Infrastructure.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder
                .Property(x => x.Email)
                .IsRequired()
                .HasMaxLength(UserConsts.EmailMaxLength);

            builder
                .Property(x => x.UserName)
                .IsRequired()
                .HasMaxLength(UserConsts.EmailMaxLength);

            builder
                .Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(UserConsts.NameMaxLength);
        }
    }
}
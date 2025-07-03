using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TaskManagement.Domain.Assignments;

namespace TaskManagement.Infrastructure.Configurations.Assignments
{
    public class AssignmentConfiguration : IEntityTypeConfiguration<Assignment>
    {
        public void Configure(EntityTypeBuilder<Assignment> builder)
        {
            builder
                .HasKey(x => x.Id);

            builder
                .HasOne(x => x.AssignedUser)
                .WithMany()
                .HasForeignKey(x => x.AssignedUserId);

            builder
                .Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(AssignmentConsts.NameMaxLength);

            builder
                .Property(x => x.CancellationReason)
                .HasMaxLength(AssignmentConsts.CancellationReasonMaxLength);

            builder
                .Property(x => x.ConclusionNote)
                .HasMaxLength(AssignmentConsts.ConclusionNoteMaxLength);

            builder
                .Property(x => x.Description)
                .HasMaxLength(AssignmentConsts.DescriptionMaxLength);
        }
    }
}
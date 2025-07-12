namespace TaskManagement.Domain.Assignments
{
    public static class AssignmentStatusExtensions
    {
        public static bool IsCanceled(this AssignmentStatus status)
            => status == AssignmentStatus.Canceled;

        public static bool IsCompleted(this AssignmentStatus status)
            => status == AssignmentStatus.Completed;
    }
}
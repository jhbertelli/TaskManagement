import { useQuery } from '@tanstack/react-query'
import { GetAssignmentService } from 'services/assignments/get-assignment-service'

export const useGetAvailableAssignees = () =>
    useQuery({
        queryKey: ['get_available_assignees'],
        queryFn: GetAssignmentService.getAvailableAssignees,
        select: (response) => response.data,
    })

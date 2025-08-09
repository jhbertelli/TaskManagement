import { useQuery } from '@tanstack/react-query'
import { GetAssignmentService } from 'services/assignments/get-assignment-service'

export const useAssignments = () =>
    useQuery({
        queryFn: GetAssignmentService.getAll,
        queryKey: ['get_all_assignments'],
        select: (response) => response.data,
    })

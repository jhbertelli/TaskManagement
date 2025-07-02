import { useQuery } from '@tanstack/react-query'
import { AssignmentsService } from 'services/assignments/assignments-service'

export const useAssignments = () =>
    useQuery({
        queryFn: AssignmentsService.getAll,
        queryKey: ['get_all_assignments'],
    })

import { useQuery } from '@tanstack/react-query'
import { GetAssignmentService } from 'services/assignments/get-assignment-service'

export const useGetAvailableAssignees = () =>
    useQuery({
        queryKey: [],
        queryFn: GetAssignmentService.getAvailableAssignees,
    })

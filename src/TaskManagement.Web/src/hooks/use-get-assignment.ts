import { useQuery } from '@tanstack/react-query'
import { GetAssignmentService } from 'services/assignments/get-assignment-service'

export const useGetAssignment = (id: string) =>
    useQuery({
        queryFn: async () => await GetAssignmentService.get(id),
        queryKey: ['get_assignment'],
        select: (response) => response.data,
    })

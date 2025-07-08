import { useMutation } from '@tanstack/react-query'
import { pathTo } from 'constants/paths'
import { useNavigate } from 'react-router-dom'
import { CreateAssignmentService } from 'services/assignments/create-assignment-service'

export const useCreateAssignment = () => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: CreateAssignmentService.create,
        onSuccess: () => navigate(pathTo.assignments),
    })
}

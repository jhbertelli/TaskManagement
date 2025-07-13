import { useMutation } from '@tanstack/react-query'
import { pathTo } from 'constants/paths'
import { useNavigate } from 'react-router-dom'
import { UpdateAssignmentService } from 'services/assignments/update-assignment-service'

export const useCancelAssignment = () => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: UpdateAssignmentService.cancel,
        onSuccess: () => navigate(pathTo.assignments),
    })
}

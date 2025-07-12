import { useMutation } from '@tanstack/react-query'
import { pathTo } from 'constants/paths'
import { useNavigate } from 'react-router-dom'
import { UpdateAssignmentService } from 'services/assignments/update-assignment-service'

export const useCompleteAssignment = () => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: UpdateAssignmentService.complete,
        onSuccess: () => navigate(pathTo.assignments),
    })
}

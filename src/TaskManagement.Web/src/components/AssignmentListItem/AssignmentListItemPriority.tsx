import { Badge, BadgeProps } from '@mantine/core'
import { GetAllAssignmentsOutput } from 'services/assignments/types'

type AssignmentListItemPriorityProps = Pick<GetAllAssignmentsOutput, 'priority'>

const badgeColor: Record<GetAllAssignmentsOutput['priority'], BadgeProps['color']> = {
    Low: 'green',
    Medium: 'yellow',
    High: 'red',
}

export const AssignmentPriorityBadge = ({ priority }: AssignmentListItemPriorityProps) => (
    <Badge color={badgeColor[priority]}>Prioridade {priority}</Badge>
)

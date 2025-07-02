import { Badge, BadgeProps } from '@mantine/core'
import { GetAllAssignmentOutput } from 'services/assignments/types'

type AssignmentListItemPriorityProps = Pick<GetAllAssignmentOutput, 'priority'>

const badgeColor: Record<GetAllAssignmentOutput['priority'], BadgeProps['color']> = {
    Low: 'green',
    Medium: 'yellow',
    High: 'red',
}

export const AssignmentPriorityBadge = ({ priority }: AssignmentListItemPriorityProps) => (
    <Badge color={badgeColor[priority]}>Prioridade {priority}</Badge>
)

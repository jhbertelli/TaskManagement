import { GetAllAssignmentOutput } from 'services/assignments/types'
import { AssignmentPriorityBadge } from './AssignmentListItemPriority'
import { formatAPIDate } from 'utils/dates'

type AssignmentListItemProps = GetAllAssignmentOutput

export const AssignmentListItem = ({
    name,
    assignedUserName,
    priority,
    description,
    deadline,
    id,
}: AssignmentListItemProps) => (
    <a href={id}>
        <div className="border border-gray-400 rounded-md p-3">
            <b>{name}</b>

            <div className="flex justify-between">
                <span>Atribuido à: {assignedUserName}</span>
                <AssignmentPriorityBadge priority={priority} />
            </div>

            <p className="line-clamp-5">{description}</p>

            <span>Data limite para conclusão: {formatAPIDate(deadline)}</span>
        </div>
    </a>
)

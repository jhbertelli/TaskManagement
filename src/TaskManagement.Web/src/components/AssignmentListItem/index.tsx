import { pathTo } from 'constants/paths'
import { Link } from 'react-router-dom'
import { GetAllAssignmentsOutput } from 'services/assignments/types'
import { formatAPIDate } from 'utils/dates'
import { AssignmentPriorityBadge } from './AssignmentListItemPriority'

type AssignmentListItemProps = GetAllAssignmentsOutput

export const AssignmentListItem = ({
    name,
    assignedUserName,
    priority,
    description,
    deadline,
    id,
}: AssignmentListItemProps) => (
    <Link to={pathTo.assignment(id)}>
        <div className="border border-gray-400 rounded-md p-3">
            <b>{name}</b>

            <div className="flex justify-between">
                <span>Atribuido à: {assignedUserName}</span>
                <AssignmentPriorityBadge priority={priority} />
            </div>

            <p className="line-clamp-5">{description}</p>

            <span>Data limite para conclusão: {formatAPIDate(deadline)}</span>
        </div>
    </Link>
)

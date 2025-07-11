interface AssignmentPropertyProps {
    name: string
    value?: string
    inline?: boolean
}

export const AssignmentProperty = ({ name, value, inline = true }: AssignmentPropertyProps) => (
    <p>
        <b>{name}: </b>
        {!inline && <br />}
        {value}
    </p>
)

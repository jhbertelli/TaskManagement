import { Box, Text } from '@mantine/core'
import { Check, X } from 'react-feather'

interface PasswordRequirementProps {
    isSatisfied: boolean
    label: string
}

export const PasswordRequirement = ({ isSatisfied, label }: PasswordRequirementProps) => (
    <Text component="span" c={isSatisfied ? 'teal' : 'red'} className="items-center flex" mt={7} size="sm">
        {isSatisfied ? <Check size={14} /> : <X size={14} />}
        <Box ml={10}>{label}</Box>
    </Text>
)

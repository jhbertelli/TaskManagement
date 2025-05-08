import { requirements } from './constants'

const getLengthStrengthMultiplier = (password: string): number => {
    if (password.length > 12) return 0
    if (password.length > 10) return 1

    return 2
}

export function getStrength(password: string) {
    let multiplier = getLengthStrengthMultiplier(password)
    const sections = requirements.length + 2

    requirements.forEach((requirement) => {
        if (!requirement.regex.test(password)) {
            multiplier += 1
        }
    })

    const result = Math.max(100 - (100 / sections) * multiplier)

    return result
}

export function getProgressColor(strength: number) {
    return strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red'
}

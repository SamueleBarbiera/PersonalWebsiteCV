import type { WithChildren } from '../../../types'

interface ContainerProps extends WithChildren {}

export default function Container({ children }: ContainerProps) {
    return (
        <ul className="flex flex-col space-y-4" role="list">
            {children}
        </ul>
    )
}

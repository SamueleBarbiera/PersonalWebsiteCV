import type { WithChildren } from '../../../types'

interface ContainerProps extends WithChildren {}

export default function Container({ children }: ContainerProps) {
    return (
        <ul className="flex flex-col w-screen mx-4 p-4 space-y-12" role="list">
            {children}
        </ul>
    )
}

import clsx from 'clsx'
import type { WithClassName } from '../../../types'

interface IndicatorProps extends WithClassName {
    pulse?: boolean
}

export default function Indicator({ className, pulse = false }: IndicatorProps) {
    return (
        <span className={clsx('relative inline-flex justify-center items-center w-5 h-5 mr-3', className)}>
            <span className="absolute flex h-3 w-3">
                {pulse && (
                    <span className="bg-gray-400 absolute inline-flex w-full h-full opacity-75 rounded-full motion-safe:animate-ping" />
                )}
                <span className="bg-gray-500 relative inline-flex w-3 h-3 rounded-full" />
            </span>
        </span>
    )
}

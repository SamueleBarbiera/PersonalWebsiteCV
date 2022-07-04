import clsx from 'clsx'
import { Icon as IconifyIcon } from '@iconify/react'
import type { WithProps } from '../../../types'

interface IconProps extends WithProps<typeof IconifyIcon> {}

export default function Icon({ className, ...rest }: IconProps) {
    return <IconifyIcon className={clsx('w-4 h-4 my-1', className)} {...rest} />
}

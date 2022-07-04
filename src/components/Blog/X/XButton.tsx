import  ButtonStandard  from '../../Button/Standard'
import { NavigationItemType } from '../../../../types'
import type { ButtonHTMLAttributes } from 'react'

interface XButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    external?: boolean
    href: string
    icon?: string
    label: string
}

export default function XButton({ external, href, icon, label }: XButtonProps) {
    return (
        <ButtonStandard type={NavigationItemType.LINK} external={external} href={href} icon={icon}>
            {label}
        </ButtonStandard>
    )
}

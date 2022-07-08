import dynamic from 'next/dynamic'
import NavbarStandard from '../Navbar/Standard'
import { usePersistantState } from '../../lib'
import type { WithChildren } from '../../../types'

interface DefaultLayoutProps extends WithChildren {
    background?: boolean
}

export default function DefaultLayout({ background: overrideBackground, children }: DefaultLayoutProps) {
    const { animations: background } = usePersistantState().get()
    const showBackground = overrideBackground ?? background

    return (
        <>
            <NavbarStandard />
            <main className="flex flex-col justify-center mx-auto mb-24">
                {showBackground}
                {children}
            </main>
        </>
    )
}

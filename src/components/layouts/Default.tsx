
import  NavbarStandard from '../../components/Navbar/Standard'
import { usePersistantState } from '../../lib'
import type { WithChildren, WithProps } from '../../../types'

interface DefaultLayoutProps extends WithChildren {
    background?: boolean
}

export default function DefaultLayout({
    background: overrideBackground,
    children,
}: DefaultLayoutProps) {
    const { animations: background } = usePersistantState().get()
    const showBackground = overrideBackground ?? background


    return (
        <>
            <NavbarStandard />
            <main className="flex flex-col justify-center px-8">
                {showBackground}
                {children}
            </main>
        </>
    )
}

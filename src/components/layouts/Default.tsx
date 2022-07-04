import { NextSeo } from 'next-seo'
import  NavbarStandard from '../../components/Navbar/Standard'
import { usePersistantState, useSeoProps } from '../../lib'
import type { WithChildren, WithProps } from '../../../types'

interface DefaultLayoutProps extends WithChildren {
    background?: boolean
    seo?: Partial<WithProps<typeof NextSeo>>
}

export default function DefaultLayout({
    background: overrideBackground,
    children,
    seo: customSeo,
}: DefaultLayoutProps) {
    const { animations: background } = usePersistantState().get()
    const showBackground = overrideBackground ?? background

    const seo = useSeoProps(customSeo)

    return (
        <>
            <NextSeo {...seo} />
            <NavbarStandard />
            <main className="flex flex-col justify-center px-8">
                {showBackground}
                {children}
            </main>
        </>
    )
}

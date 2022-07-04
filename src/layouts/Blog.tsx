import { NextSeo } from 'next-seo'
import  NavbarStandard  from '../components/Navbar/Standard'
import { useSeoProps } from '../lib'
import type { ComponentProps, PropsWithChildren } from 'react'

interface BlogLayoutProps {
    seo?: Partial<ComponentProps<typeof NextSeo>>
}

export default function BlogLayout({ children, seo }: PropsWithChildren<BlogLayoutProps>) {
    const seoProps = useSeoProps({
        title: 'nuro ─ blog',
        ...seo,
    })

    return (
        <>
            <NextSeo {...seoProps} />
            <NavbarStandard />
            <main className="flex flex-col justify-center sm:px-8">{children}</main>
        </>
    )
}

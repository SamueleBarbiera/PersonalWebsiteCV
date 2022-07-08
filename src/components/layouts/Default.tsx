import NavbarStandard from '../Navbar/Standard'
import BackToTop from '../BackToTop'

export default function DefaultLayout({ children }: any) {

    return (
        <>
            <NavbarStandard />
            <main className="flex flex-col justify-center items-center mx-auto px-8">{children}</main>
            <BackToTop />
        </>
    )
}

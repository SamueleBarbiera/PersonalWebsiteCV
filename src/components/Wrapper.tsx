import { FC, ReactNode } from 'react'
import BackToTop from './BackToTop'

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col md:mx-20 lg:mx-72">
            <div className="mt-10">

                <div className="p-0 ">
                    <main id="main">{children}</main>
                </div>

                <BackToTop />
            </div>
        </div>
    )
}

export default Wrapper

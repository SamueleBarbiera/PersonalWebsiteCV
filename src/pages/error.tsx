import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'
import ButtonStandard from '../components/Button/Standard'
import  LayoutError  from '../layouts/Error'
import { NavigationItemType } from '../../types'

export default function Error() {
    const router = useRouter()
    const { status } = router.query

    return (
        <LayoutError>
            <div className="flex flex-grow min-h-full pt-16 pb-12">
                <div className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-shrink-0 justify-center">
                        <Icon className="h-12 text-primary-500 w-auto" icon="feather:alert-triangle" />
                    </div>
                    <div className="py-4 text-center">
                        <h1 className="mt-2 text-4xl font-extrabold text-gray-500 dark:text-white tracking-tight sm:text-5xl">
                            {status}
                        </h1>
                        <p className="mt-8 text-sm font-medium text-gray-300 dark:text-gray-400">
                            Looks like something went wrong on our end.
                            <br />
                            This isn&apos;t your fault, it&apos;s ours. Please try again later.
                        </p>
                        <div className="mt-6 flex justify-center items-center space-x-4">
                            <ButtonStandard
                                type={NavigationItemType.ACTION}
                                onClick={() => history.go(-1)}
                                icon="feather:arrow-left"
                            >
                                Back
                            </ButtonStandard>
                            <ButtonStandard type={NavigationItemType.LINK} href="/" icon="feather:home">
                                Home
                            </ButtonStandard>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutError>
    )
}
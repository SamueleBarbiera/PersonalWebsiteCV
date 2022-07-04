import { Icon } from '@iconify/react'
import  LayoutError  from '../layouts/Error'
import  ButtonStandard  from '../Button/Standard'
import { NavigationItemType } from '../../../types'

interface ErrorProps {
    routeBlog?: boolean
}

export default function Error({ routeBlog = true }: ErrorProps) {
    return (
        <LayoutError>
            <div className="flex flex-grow min-h-full pt-16 pb-12">
                <div className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex-shrink-0 flex justify-center">
                        <Icon className="h-12 text-primary-500 w-auto" icon="feather:alert-circle" />
                    </div>
                    <div className="py-4 text-center">
                        <h1 className="mt-2 text-4xl font-extrabold text-gray-500 dark:text-white tracking-tight sm:text-5xl">
                            No Posts Found
                        </h1>
                        <p className="mt-4 text-sm font-medium text-gray-300 dark:text-gray-400">
                            Sorry, we couldn’t find any blog posts ¯\_(ツ)_/¯
                        </p>
                        <div className="mt-6 flex justify-center items-center space-x-4">
                            <ButtonStandard
                                icon="feather:arrow-left"
                                onClick={() => history.go(-1)}
                                type={NavigationItemType.ACTION}
                            >
                                Back
                            </ButtonStandard>
                            <ButtonStandard href="/" icon="feather:home" type={NavigationItemType.LINK}>
                                Home
                            </ButtonStandard>
                            {routeBlog && (
                                <ButtonStandard href="/blog" icon="feather:book" type={NavigationItemType.LINK}>
                                    Blog
                                </ButtonStandard>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </LayoutError>
    )
}

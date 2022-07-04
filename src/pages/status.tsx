import LayoutDefault from '../layouts/Default'
import StatusWidget from '../components/Status/Widget/Standard'

export default function StatusPage() {
    return (
        <LayoutDefault>
            <div className="flex flex-grow min-h-screen pt-16 pb-12">
                <div className="flex-grow flex flex-col justify-center max-w-sm sm:max-w-lg w-full mx-auto px-0 sm:px-16">
                    <StatusWidget />
                </div>
            </div>
        </LayoutDefault>
    )
}

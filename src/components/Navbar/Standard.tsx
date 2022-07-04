import { Disclosure } from '@headlessui/react'
import NavbarDropdown from '../../components/Navbar/Dropdown'
import ButtonIcon from '../../components/Button/Icon'
import NavbarIcon from '../../components/Navbar/Icon'
import { useNavigation } from '../../lib/navigation'

export default function Standard() {
    const { menu, settings } = useNavigation()

    return (
        <Disclosure as="nav" className="fixed top-0 left-0 w-full z-10">
            <div className="mx-auto px-2">
                <div className="relative flex items-center justify-between h-16">
                    <NavbarDropdown items={menu} position="top-left">
                        <ButtonIcon aria-label="Menu">
                            <NavbarIcon icon="feather:menu" />
                        </ButtonIcon>
                    </NavbarDropdown>
                    <NavbarDropdown items={settings} position="top-right">
                        <ButtonIcon aria-label="Settings">
                            <NavbarIcon icon="feather:settings" />
                        </ButtonIcon>
                    </NavbarDropdown>
                </div>
            </div>
        </Disclosure>
    )
}

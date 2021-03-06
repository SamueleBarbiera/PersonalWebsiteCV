import { useTheme } from 'next-themes'
import { NavigationItemType, Theme } from '../../types'
import type { NavigationItem, NavigationItems } from '../../types'

const staticMenuItems: Array<Array<NavigationItem>> = [
    [
        {
            type: NavigationItemType.LINK,
            icon: 'feather:home',
            text: 'Home',
            href: '/',
        },
        {
            type: NavigationItemType.LINK,
            icon: 'feather:copy',
            text: 'Projects',
            href: '/projects',
        },
        {
            type: NavigationItemType.LINK,
            icon: 'feather:clock',
            text: 'Timeline',
            href: '/timeline',
        },
        {
            type: NavigationItemType.LINK,
            icon: 'feather:file-text',
            text: 'About',
            href: '/about',
        },
        {
            type: NavigationItemType.LINK,
            icon: 'feather:bar-chart',
            text: 'Stats',
            href: '/stats',
        },
    ],
    [
        {
            type: NavigationItemType.LINK,
            icon: 'feather:twitter',
            text: 'Twitter',
            href: 'https://twitter.com/BarbieraSamuele',
            external: true,
        },
        {
            type: NavigationItemType.LINK,
            icon: 'feather:github',
            text: 'GitHub',
            href: 'https://github.com/samuelebarbiera',
            external: true,
        },
    ],
]

export function useNavigation() {
	const { theme, setTheme } = useTheme();

	const menuItems: NavigationItems = [
		...staticMenuItems,
	];


    const settingsItems: NavigationItems = [
        [
            {
                type: NavigationItemType.ACTION,
                icon: 'feather:monitor',
                endIcon: theme === Theme.SYSTEM ? 'feather:check-circle' : undefined,
                text: 'System Theme',
                onClick: () => setTheme(Theme.SYSTEM),
            },
            {
                type: NavigationItemType.ACTION,
                icon: 'feather:sun',
                endIcon: theme === Theme.LIGHT ? 'feather:check-circle' : undefined,
                text: 'Light Theme',
                onClick: () => setTheme(Theme.LIGHT),
            },
            {
                type: NavigationItemType.ACTION,
                icon: 'feather:moon',
                endIcon: theme === Theme.DARK ? 'feather:check-circle' : undefined,
                text: 'Dark Theme',
                onClick: () => setTheme(Theme.DARK),
            },
        ],
    ]

    return {
        menu: menuItems,
        settings: settingsItems,
    }
}

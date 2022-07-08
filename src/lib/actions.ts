import { Action } from 'kbar'

const actions: Action[] = [
    {
        id: 'home',
        name: 'Home',
        shortcut: ['h'],
        keywords: 'index main',
        perform: () => {
            open('/', '_self')
        },
        section: 'Navigation',
    },
    {
        id: 'projects',
        name: 'Projects',
        shortcut: ['p'],
        keywords: 'project github git',
        perform: () => {
            open('/', '_self')
        },
        section: 'Navigation',
    },
    {
        id: 'timeline',
        name: 'Timeline',
        shortcut: ['p'],
        keywords: 'timeline data history',
        perform: () => {
            open('/', '_self')
        },
        section: 'Navigation',
    },
    {
        id: 'about',
        name: 'About',
        shortcut: ['a'],
        keywords: 'bio abt',
        perform: () => {
            open('/about', '_self')
        },
        section: 'Navigation',
    },
    {
        id: 'stats',
        name: 'Stats',
        shortcut: ['s'],
        keywords: 'statistics spotify',
        perform: () => {
            open('/stats', '_self')
        },
        section: 'Navigation',
    },
    {
        id: 'github',
        name: 'GitHub',
        keywords: 'gh code',
        perform: () => {
            open('https://github.com/samuelebarbiera', '_blank')
        },
        section: 'External Links',
        subtitle: 'View my open-source projects',
    },
    {
        id: 'discord',
        name: 'Discord',
        keywords: 'dc message dm',
        perform: () => {
            open('https://discord.com/users/758578599715405824', '_blank')
        },
        section: 'External Links',
        subtitle: 'Chat with me on Discord',
    },
]

export default actions

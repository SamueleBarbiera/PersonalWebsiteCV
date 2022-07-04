import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Intro from '../components/Intro'
import { AnimatePresence, motion } from 'framer-motion'
import ViewMoreBtn from '../components/ViewMoreBtn'
import Wrapper from '../components/Wrapper'
import ListItem from '../components/list-item'
import { PinnedRepo, useGitHubPinnedRepos } from '../lib/github'
import {
    SiAmazonaws,
    SiBabel,
    SiDocker,
    SiGit,
    SiGo,
    SiJava,
    SiMongodb,
    SiNextdotjs as SiNextDotJs,
    SiNodedotjs as SiNodeDotJs,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiStyledcomponents as SiStyledComponents,
    SiTailwindcss,
    SiTypescript,
    SiWebpack,
    SiWebstorm,
    SiYarn,
} from 'react-icons/si'
import { useReducer } from 'react'
import { differenceInYears, isSameDay, isSameMonth } from 'date-fns'
import { Icon } from '@iconify/react'
import Animate from '../components/Animate'
import Event from '../components/Event'
import ButtonOutline from '../components/Button/Outline'
import PillStandard from '../components/Pill/Standard'
import { EventType, NavigationItemType } from '../../types'
import LayoutDefault from '../layouts/Default'
import type { NavigationItem } from '../../types'

const ACTIONS: Array<NavigationItem> = [
    {
        type: NavigationItemType.LINK,
        href: '/projects',
        icon: <Icon className="mr-3" icon="feather:copy" />,
        text: 'Projects',
    },
    {
        type: NavigationItemType.LINK,
        external: true,
        href: 'https://github.com/samuelebarbiera',
        icon: <Icon className="mr-3" icon="feather:github" />,
        text: 'GitHub',
    },
]


const Home: NextPage = () => {
    const today = new Date()
    const birthday = new Date('2001-12-25')
    const age = differenceInYears(today, birthday)
    const isBirthday = isSameDay(today, birthday) && isSameMonth(today, birthday)

    const description = `I am a ${age} year old self-taught software developer`
    
    return (
        <>
            <Head>
                <title>Samuele - Home</title>
                <link rel="icon" href="/favicon.ico" />

                <meta name="title" content="Samuele - Home" />
                <meta name="description" content="Samuele aka samuele's personal website" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Samuele - Home" />
                <meta property="og:description" content="Samuele aka samuele's personal website" />
                <meta property="og:image" content="/photo.jpg" />
            </Head>
            <Wrapper>
                <LayoutDefault>
                    {isBirthday && <Event event={EventType.BIRTHDAY} />}
                    <div className="min-h-screen flex items-center justify-center py-12">
                        <div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
                            <Animate
                                as="h1"
                                animation={{
                                    opacity: [0, 1],
                                    scale: [0.75, 1],
                                }}
                                className="text-gray-900 dark:text-white text-4xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold"
                            >
                                Hey <span className="inline-block origin-70 hover:animate-wave">👋</span> I&apos;m
                                Samuele
                            </Animate>

                            <Animate
                                as="p"
                                animation={{
                                    opacity: [0, 1],
                                    scale: [0.75, 1],
                                }}
                                className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-900 sm:text-lg md:text-xl md:max-w-3xl"
                                transition={{
                                    delay: 0.5,
                                }}
                            >
                                {description}
                            </Animate>

                            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
                                {ACTIONS.map((action, index) => {
                                    if (action.type !== NavigationItemType.LINK) return null

                                    return (
                                        <Animate
                                            animation={{
                                                y: [50, 0],
                                                opacity: [0, 1],
                                            }}
                                            className="w-full sm:w-auto"
                                            key={index}
                                            transition={{
                                                delay: 0.1 * (index + 2) + 0.5,
                                            }}
                                        >
                                            <ButtonOutline  className='text-gray-50' href={action.href}>
                                                {action.icon}
                                                <span className='text-gray-50'>{action.text}</span>
                                            </ButtonOutline>
                                        </Animate>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </LayoutDefault>

                <Intro />
                <div className="flex flex-col gap-2">
                    <div className="space-y-4 mb-12">
                        <h1 className="text-2xl font-bold sm:text-3xl">What do I do? 💭</h1>
                        <p className="opacity-80">
                            Honestly, a few too many things to count on one hand... I'm currently having a fantastic
                            time working with{' '}
                            <a href="https://hop.io" target="_blank" rel="noreferrer">
                                Hop
                            </a>{' '}
                            - we're building an e2e realtime engine for video. Below are some of the more popular open
                            source projects I've worked on. In total, the following repos have earnt me stars! Thank
                            you! 💖
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold sm:text-3xl">Technologies 💻</h1>

                        <p className="opacity-80">
                            I use a wide range of tools to tackle each hurdle in the most efficient manner possible. I
                            really love working with containersation, especially Docker; it's proven to be a reliable
                            bit of kit for both production and development environments.
                        </p>

                        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                            <ListItem icon={SiDocker} text="Docker" />
                            <ListItem icon={SiRedis} text="Redis" />
                            <ListItem icon={SiPostgresql} text="Postgres" />
                            <ListItem icon={SiReact} text="React.js" />
                            <ListItem icon={SiNodeDotJs} text="Node.js" />
                            <ListItem icon={SiTypescript} text="TypeScript" />
                            <ListItem icon={SiGo} text="Golang" />
                            <ListItem icon={SiJava} text="Java" />
                            <ListItem icon={SiAmazonaws} text="AWS" />
                            <ListItem icon={SiWebstorm} text="WebStorm" />
                            <ListItem icon={SiNextDotJs} text="Next.js" />
                            <ListItem icon={SiWebpack} text="Webpack" />
                            <ListItem icon={SiBabel} text="Babel" />
                            <ListItem icon={SiYarn} text="Yarn" />
                            <ListItem icon={SiTailwindcss} text="TailwindCSS" />
                            <ListItem icon={SiGit} text="Git" />
                            <ListItem icon={SiStyledComponents} text="styled-components" />
                            <ListItem icon={SiMongodb} text="Mongo" />
                        </ul>
                    </div>
                    <div className="self-center">
                        <ViewMoreBtn text="View more" href="https://github.com/samuelebarbiera" />
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Home

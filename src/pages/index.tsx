import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Intro from '../components/Intro'
import { AnimatePresence, motion } from 'framer-motion'
import ViewMoreBtn from '../components/ViewMoreBtn'
import Wrapper from '../components/Wrapper'
import ListItem from '../components/list-item'
import { PinnedRepo, useGitHubPinnedRepos } from '../hooks/github'
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

interface Props {
    projectsRes: PinnedRepo[]
}

const Home: NextPage = ({ projectsRes }: any) => {
    const today = new Date()
    const birthday = new Date('1997-08-09')
    const age = differenceInYears(today, birthday)
    const isBirthday = isSameDay(today, birthday) && isSameMonth(today, birthday)

    const description = `I am a ${age} year old software engineer & games developer`
    const { data: projects = projectsRes } = useGitHubPinnedRepos('samuelebarbiera')
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
                <Intro />
                <div className="pt-0 text-center pb-14 mt-96">
                    <Header head="Some of my projects" />
                </div>
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
                                className="text-gray-500 dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold"
                            >
                                Hey <span className="inline-block origin-70 hover:animate-wave">👋</span> I&apos;m Ben,{' '}
                                <br className="hidden sm:block" />a{' '}
                                <PillStandard className="mt-4">developer</PillStandard>
                            </Animate>

                            <Animate
                                as="p"
                                animation={{
                                    opacity: [0, 1],
                                    scale: [0.75, 1],
                                }}
                                className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-300 sm:text-lg md:text-xl md:max-w-3xl"
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
                                            <ButtonOutline href={action.href}>
                                                {action.icon}
                                                <span>{action.text}</span>
                                            </ButtonOutline>
                                        </Animate>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </LayoutDefault>
                <div className="flex flex-col gap-2">
                    <div className="space-y-4">
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

                        <div className="grid grid-cols-1 auto-cols-max gap-1 sm:grid-cols-2 sm:gap-3">
                            {projects.map((project: any) => (
                                <ProjectCard key={project.repo} repo={project} />
                            ))}
                        </div>
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

function ProjectCard({ repo: project }: { repo: PinnedRepo }) {
    const [isOpen, toggle] = useReducer((x: any) => !x, false)

    return (
        <motion.div
            animate={{ height: isOpen ? 'auto' : '54px' }}
            className="flex overflow-hidden relative flex-col text-blue-900/80 dark:text-gray-100 no-underline dark:hover:bg-white/10 bg-gradient-to-tr from-blue-100 dark:from-white/5 to-blue-700/5 dark:to-white/5 rounded-md dark:border border-white/10 md:rounded-lg"
        >
            <button
                type="button"
                className="flex items-center py-4 px-5 space-x-2 text-lg font-bold border-b border-white/10 focus:outline-none cursor-pointer select-none"
                onClick={toggle}
            >
                <div className="flex flex-1 items-center space-x-2 text-left">
                    <span>{project.repo}</span>
                    <span className="flex items-center space-x-3 text-xs">
                        <span className="space-x-1">
                            <span>⭐</span>
                            <span>{project.stars}</span>
                        </span>
                        <span className="space-x-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                />
                            </svg>
                            <span>{project.forks}</span>
                        </span>
                    </span>
                </div>
                <div>
                    <motion.div
                        className="p-1 bg-white/0 hover:bg-white/10 rounded-full"
                        animate={{ rotate: isOpen ? 90 : 0 }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </motion.div>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex h-full"
                    >
                        <div className="flex flex-col py-4 px-5 space-y-4">
                            <p className="flex-1">{project.description}</p>

                            <div>
                                <a
                                    href={`https://github.com/${project.owner}/${project.repo}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center py-2 px-6 space-x-2 text-white no-underline bg-blue-700 dark:bg-white/10 rounded-full transition-transform duration-500 hover:scale-95 select-none"
                                >
                                    <span>View Project</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export async function getStaticProps() {
    const projectsRes = await fetch('https://gh-pinned-repos.egoist.sh/?username=samuelebarbiera').then(async (res) => {
        return await res.json()
    })

    return {
        props: {
            projectsRes,
        },
        revalidate: 60,
    }
}

export default Home

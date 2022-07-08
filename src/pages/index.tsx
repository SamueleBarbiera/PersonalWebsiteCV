import type { NextPage } from 'next'
import Head from 'next/head'
import Intro from '../components/Intro'
import ViewMoreBtn from '../components/ViewMoreBtn'
import Wrapper from '../components/Wrapper'
import ListItem from '../components/list-item'
import {
    SiAmazonaws,
    SiStrapi,
    SiPrisma,
    SiVercel,
    SiEslint,
    SiPrettier,
    SiNotion,
    SiPostman,
    SiStripe,
    SiExpress,
    SiFirebase,
    SiMysql,
    SiMicrosoftazure,
    SiMicrosoftsqlserver,
    SiSequelize,
    SiGithub,
    SiGitlab,
    SiAmazons3,
    SiHeroku,
    SiNetlify,
    SiBootstrap,
    SiNpm,
    SiYarn,
    SiDocker,
    SiGit,
    SiPostgresql,
    SiMongodb,
    SiNextdotjs as SiNextDotJs,
    SiNodedotjs as SiNodeDotJs,
    SiRedis,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si'
import { useReducer } from 'react'
import { differenceInYears, isSameDay, isSameMonth } from 'date-fns'
import { Icon } from '@iconify/react'
import Animate from '../components/Animate'
import Event from '../components/Event'
import ButtonOutline from '../components/Button/Outline'
import PillStandard from '../components/Pill/Standard'
import { EventType, NavigationItemType } from '../../types'
import LayoutDefault from '../components/layouts/Default'
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
                    <div
                        className="h-min flex items-center justify-center mx-auto rounded-lg shadow-xl m-8 p-8 w-min bg-gradient-to-r
    from-pink-500
    via-red-500
    to-yellow-500
    background-animate"
                    >
                        <div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
                            <div className="absolute top-0 -left-4 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animate-blob"></div>
                            <div className="absolute top-0 -right-4 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-pulse animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-pulse animation-delay-4000"></div>
                            <div className="absolute -top-8 left-6 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animate-blob"></div>
                            <div className="absolute -top-4 right-2 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-pulse animation-delay-2000"></div>
                            <div className="absolute bottom-12 left-72 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-pulse animation-delay-4000"></div>
                            <div className="absolute top-8 left-32 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animate-blob"></div>
                            <div className="absolute top-4 right-72 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-pulse animation-delay-2000"></div>
                            <div className="absolute bottom-12 left-72 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-pulse animation-delay-4000"></div>

                            <Animate
                                as="h1"
                                animation={{
                                    opacity: [0, 1],
                                    scale: [0.75, 1],
                                }}
                                className="text-gray-900 dark:text-white text-4xl p-0 sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold"
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
                                            <ButtonOutline className="text-gray-50" href={action.href}>
                                                {action.icon}
                                                <span className="text-gray-50">{action.text}</span>
                                            </ButtonOutline>
                                        </Animate>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <Intro />
                    <div className="flex flex-col gap-2 m-12">
                        <div className="space-y-4 mb-12">
                            <h1 className="text-2xl font-bold sm:text-3xl">What do I do? 💭</h1>
                            <p className="opacity-80">
                                Currenty i'm working at on-code s.r.l building web app with next.js 💖
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold sm:text-3xl">Technologies 💻</h1>

                            <p className="opacity-80">
                                I use a wide range of tools to tackle each hurdle in the most efficient manner possible.
                                I really love working with next.js, with TS and trpc it's proven to be a reliable
                                framework for both production and development environments.
                            </p>

                            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                <ListItem icon={SiDocker} text="Docker" />
                                <ListItem icon={SiRedis} text="Redis" />
                                <ListItem icon={SiPostgresql} text="Postgres" />
                                <ListItem icon={SiFirebase} text="Firebase" />
                                <ListItem icon={SiMysql} text="Mysql" />
                                <ListItem icon={SiMicrosoftazure} text="Azure" />
                                <ListItem icon={SiMicrosoftsqlserver} text="Msqls" />
                                <ListItem icon={SiMongodb} text="Mongo" />
                                <ListItem icon={SiSequelize} text="Sequelize" />
                                <ListItem icon={SiPrisma} text="Prisma" />

                                <ListItem icon={SiStrapi} text="Strapi" />
                                <ListItem icon={SiVercel} text="Vercel" />
                                <ListItem icon={SiGithub} text="Github" />
                                <ListItem icon={SiGitlab} text="Gitlab" />
                                <ListItem icon={SiHeroku} text="Heroku" />
                                <ListItem icon={SiNetlify} text="Netlify" />
                                <ListItem icon={SiAmazonaws} text="AWS" />
                                <ListItem icon={SiEslint} text="Eslint" />
                                <ListItem icon={SiPrettier} text="Prettier" />
                                <ListItem icon={SiNotion} text="Notion" />
                                <ListItem icon={SiStripe} text="Stripe" />
                                <ListItem icon={SiExpress} text="Express" />
                                <ListItem icon={SiTailwindcss} text="Tailwind" />
                                <ListItem icon={SiBootstrap} text="Bootstrap" />
                                <ListItem icon={SiNpm} text="Npm" />
                                <ListItem icon={SiYarn} text="Yarn" />
                                <ListItem icon={SiGit} text="Git" />
                                <ListItem icon={SiNodeDotJs} text="Node.js" />
                                <ListItem icon={SiTypescript} text="TypeScript" />
                                <ListItem icon={SiNextDotJs} text="Next.js" />
                            </ul>
                        </div>
                        <div className="self-center mt-12">
                            <ViewMoreBtn text="View more" href="https://github.com/samuelebarbiera" />
                        </div>
                    </div>
                </LayoutDefault>
            </Wrapper>
        </>
    )
}

export default Home

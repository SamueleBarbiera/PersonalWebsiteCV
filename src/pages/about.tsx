import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Head from 'next/head'
import * as anims from '../animations/index'
import Header from '../components/Header'
import Text from '../components/Text'

import LayoutDefault from '../components/layouts/Default'

const about: NextPage = () => {
    return (
        <>
            <Head>
                <title>Samuele - About</title>
                <link rel="icon" href="/favicon.ico" />

                <meta name="title" content="Samuele - About" />
                <meta name="description" content="Samuele aka samuelebarbiera's personal website" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Samuele - About" />
                <meta property="og:description" content="Samuele aka samuele's personal website" />
                <meta property="og:image" content="/photo.jpg" />
            </Head>

            <LayoutDefault>
                <motion.div
                    className="flex flex-col items-start justify-start mx-10 p-4"
                    variants={anims.FadeContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="pb-4">
                        <Header head="About Me" />
                    </div>
                    <Text>
                        <motion.div variants={anims.FadeContainer} initial="hidden" animate="visible">
                            <motion.p variants={anims.Fade}>
                                Hi, I&apos;m Samuele, commonly known as samuelebarbiera online. I&apos;m from and
                                live&nbsp; in Italy. I started my journey in high school learning c++, c#, mysql and
                                php, and since then i continued to learn about these stuff, especially web development
                                <br />
                                <br />
                                In 2020 I started going to an ITS IOT specializzation and in my free time i've tried to
                                learn something new or do some new project with new tools to explore others subjects.
                                Eventually in 2021 i got into web development and I love it, the frontend, the backend,
                                all of it.
                                <br />
                                <br />
                                For hobbies other than coding,I really like to produce & listen to R&B-RAP-TRAP music,
                                Bazzi,Nayt,Brent Fayez,Giveon are some of my favourite artists. I also love cycling.
                            </motion.p>
                        </motion.div>
                    </Text>
                    <div className="py-6" />
                    <div className="pb-6">
                        <Header head="About this website" />
                    </div>
                    <Text>
                        <motion.div className="pt-4" variants={anims.FadeContainer} initial="hidden" animate="visible">
                            <motion.div variants={anims.Fade}>
                                In case you&apos;re wondering:
                                <ul>
                                    <li>
                                        Heavily inspired by{' '}
                                        <a href="https://leerob.io" rel="noreferrer" target="_blank">
                                            Lee Robinson&apos;s website
                                        </a>
                                        <a href="https://www.nexxel.dev/" rel="noreferrer" target="_blank">
                                            Nexxel&apos;s website
                                        </a>
                                        <a href="https://nuro.dev/" rel="noreferrer" target="_blank">
                                            Nuro&apos;s website
                                        </a>
                                    </li>
                                    <li>
                                        Built with{' '}
                                        <a href="https://nextjs.org" rel="noreferrer" target="_blank">
                                            Next.js
                                        </a>
                                        ,{' '}
                                        <a href="https://framer.com/motion" rel="noreferrer" target="_blank">
                                            Framer Motion
                                        </a>{' '}
                                        ,{' '}
                                        <a href="https://tailwindcss.com" rel="noreferrer" target="_blank">
                                            TailwindCSS
                                        </a>{' '}
                                    </li>

                                    <li>
                                        Everything is in{' '}
                                        <a href="https://typescriptlang.org" rel="noreferrer" target="_blank">
                                            TypeScript
                                        </a>
                                    </li>

                                    <li>
                                        Deployed on{' '}
                                        <a href="https://vercel.com" rel="noreferrer" target="_blank">
                                            Vercel
                                        </a>
                                    </li>

                                    <li>
                                        Open source on{' '}
                                        <a
                                            href="https://github.com/samuelebarbiera/PersonalWebsiteCV"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </Text>
                </motion.div>
            </LayoutDefault>
        </>
    )
}

export default about

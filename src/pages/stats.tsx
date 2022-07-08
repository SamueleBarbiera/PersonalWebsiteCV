import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Stats from '../components/Stats'

import LayoutDefault from '../components/layouts/Default'

const stats: NextPage = () => {
    return (
        <>
            <Head>
                <title>Samuele - Stats</title>
                <link rel="icon" href="/favicon.ico" />

                <meta name="title" content="Samuele - Stats" />
                <meta name="description" content="Samuele aka samuele's personal website" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Samuele - Stats" />
                <meta property="og:description" content="Samuele aka samuele's personal website" />
                <meta property="og:image" content="/photo.jpg" />
            </Head>

            <LayoutDefault>
                <Header head="Stats" size={5} />
                <Stats />
            </LayoutDefault>
        </>
    )
}

export default stats

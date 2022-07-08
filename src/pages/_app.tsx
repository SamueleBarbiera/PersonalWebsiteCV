import '../styles/globals.css'
import '../styles/nprogress.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import splitbee from '@splitbee/web'
import { ThemeProvider } from 'next-themes'
import { useEffectOnce, useEvent } from 'react-use'
import { useRouter } from 'next/router'
import 'inter-ui/inter.css'
import 'nprogress/nprogress.css'
import { Theme } from '../../types'
import { KBarProvider } from 'kbar'
import { MantineProvider } from '@mantine/core'
import CommandPalette from '../components/CommandPalette'
import actions from '../lib/actions'

export function reportWebVitals(metric: NextWebVitalsMetric) {
    const url = process.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT
    if (!url) return

    const body = JSON.stringify({
        route: window.__NEXT_DATA__.page,
        ...metric,
    })

    if (navigator.sendBeacon) {
        navigator.sendBeacon(url, body)
    } else {
        fetch(url, {
            body,
            keepalive: true,
            method: 'POST',
        })
    }
}

function PersonalSite({ Component, pageProps }: AppProps) {
    const router = useRouter()

    useEffectOnce(() => {
        router.events.on('routeChangeStart', () => NProgress.start())
        router.events.on('routeChangeComplete', () => NProgress.done())
        router.events.on('routeChangeError', () => NProgress.done())

        if (process.env.NODE_ENV === 'production')
            splitbee.init({
                disableCookie: true,
            })
    })
    NProgress.configure({ showSpinner: false })
    Router.events.on('routeChangeStart', () => NProgress.start())
    Router.events.on('routeChangeComplete', () => NProgress.done())
    Router.events.on('routeChangeError', () => NProgress.done())

    return (
        <ThemeProvider defaultTheme={Theme.SYSTEM} themes={Object.values(Theme)} attribute="class">
            <MantineProvider>
                <KBarProvider
                    options={{
                        enableHistory: true,
                    }}
                    actions={actions}
                >
                    <CommandPalette />
                    <Component {...pageProps} />
                </KBarProvider>
            </MantineProvider>
        </ThemeProvider>
    )
}
// }

export default PersonalSite

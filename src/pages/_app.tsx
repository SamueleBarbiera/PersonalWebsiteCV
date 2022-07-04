import '../styles/globals.css'
import '../styles/nprogress.css'
import '@fontsource/barlow'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { ThemeProvider } from 'next-themes'
import NProgress from 'nprogress'
import { KBarProvider } from 'kbar'
import { MantineProvider } from '@mantine/core'
import CommandPalette from '../components/CommandPalette'
import actions from '../lib/actions'

function PersonalSite({ Component, pageProps }: AppProps) {
    NProgress.configure({ showSpinner: false })
    Router.events.on('routeChangeStart', () => NProgress.start())
    Router.events.on('routeChangeComplete', () => NProgress.done())
    Router.events.on('routeChangeError', () => NProgress.done())

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            value={{
                dark: 'dark',
                light: 'light',
            }}
        >
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

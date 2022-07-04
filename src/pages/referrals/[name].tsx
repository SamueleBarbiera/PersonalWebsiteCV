import splitbee from '@splitbee/web'
import type { GetServerSideProps } from 'next'
import type { Referrals } from '../../../types'

export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
    const { default: rawReferrals } = await import('../../../data/referrals.json')
    const referrals = rawReferrals as Referrals

    if (!params.name)
        return {
            redirect: {
                destination: '/referrals',
                permanent: true,
            },
        }

    const paramName = Array.isArray(params.name) ? params.name[0].toLowerCase() : params.name.toLowerCase()

    const result:any = referrals.find((referral: any) => {
        const referralName = referral.name.toLowerCase()

        if (referralName === paramName) return referral

        if (referral.aliases) return referral.aliases.find((alias: any) => alias.toLowerCase() === paramName)

        return undefined
    })

    splitbee.track(result.name.toLowerCase(), {
        code: result.code,
        type: 'referral',
        url: result.url,
    })

    return {
        redirect: {
            destination: result ? result.url : '/referrals',
            permanent: true,
        },
    }
}

export default function ReferralRedirectPage() {
    return null
}

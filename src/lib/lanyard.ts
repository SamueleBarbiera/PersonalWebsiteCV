import { useLanyard } from 'react-use-lanyard'

import { DISCORD_STATUS_COLOR } from '../../types/'

export function useStatus() {
    const userId = process.env.NEXT_PUBLIC_DISCORD_ID
    console.log("🚀 - file: lanyard.ts - line 7 - useStatus - userId", userId)
    const result = useLanyard({
        userId,
        socket: true,
    })
    console.log('🚀 - file: lanyard.ts - line 11 - useStatus - result', result)

    return {
        ...result,
        color: result.status && !result.loading ? DISCORD_STATUS_COLOR[result.status.discord_status] : null,
    }
}

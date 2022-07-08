import { api } from '../../lib/api'

export default api({
    async GET({ res }: any) {
        res.throw(400, 'This error message was intentional.')
    },
})

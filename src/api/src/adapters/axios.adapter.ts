import { Fetcher, extractToken } from '../configure'
import { API_URL } from '../configure'

export const axiosAdapter = (library: any): Fetcher => {
    return async (method, url, body, headers) => {
        console.log(`request ${method} ${API_URL + url}, headers: ${JSON.stringify(headers)}, body: ${JSON.stringify(body)}`)

        const token = await extractToken()
        return (
            await library({
                method: method.toUpperCase(),
                url: API_URL + url,
                data: body ? body : undefined,
                headers: {
                    authorization: `Bearer ${token}`
                },
            })
        ).data
    }
}

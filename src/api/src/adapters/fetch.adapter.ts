import { Fetcher, extractToken } from '../configure'
import { API_URL } from '../configure'

export const fetchAdapter = (fetchLibrary: any): Fetcher => {
    return async (method, url, body, headers) => {
        const token = await extractToken()
        const response = await fetchLibrary(API_URL + url, {
            method: method.toUpperCase(),
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-Type': 'application/json',
                ...(token ? { Authorization: 'Bearer ' + token } : {}),
                ...headers,
            },
        })
        return await response.json()
    }
}

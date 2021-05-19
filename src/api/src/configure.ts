// import * as io from 'socket.io-client'


export type HttpMethod = 'get' | 'post' | 'patch' | 'put' | 'delete'

export type Fetcher = (
    method: HttpMethod,
    path: string,
    body?: any,
    headers?: any
) => Promise<any>

export let fetcher: Fetcher
export let extractToken: () => Promise<string>
export let API_URL = ''

type Config = {
    fetcher: Fetcher
    tokenExtractor: () => Promise<string>
    backendUrl: string
}
export const configure = ({
    fetcher: fetch,
    tokenExtractor: extractor,
    backendUrl,
}: Config) => {
    fetcher = fetch
    extractToken = extractor
    API_URL = backendUrl.endsWith('/') ? backendUrl.slice(0, -1) : backendUrl
    console.log('BACKEND URL: ', API_URL)
}

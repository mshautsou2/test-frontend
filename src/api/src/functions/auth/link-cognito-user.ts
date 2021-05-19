import { fetcher } from '../../configure'

export type LinkCognitoUserRequest = {
    firstName: string
    username: string
    email: string
    password: string
}

export type LinkCognitoUserResponse = {
    success: boolean
}

export type LinkCognitoUserEndpoint = (
    request: LinkCognitoUserRequest
) => Promise<LinkCognitoUserResponse>

export const linkCognitoUser: LinkCognitoUserEndpoint = async (
    request
) => {
    return await fetcher('post', '/users/link', request)
}

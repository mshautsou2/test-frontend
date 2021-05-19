import { fetcher } from '../../configure'
import { GuideDto } from './dto/guide.dto'

export type GetGuidesRequest = void

export type GetGuidesResponse = GuideDto[]

export type GetGuidesEndpoint = (
    request: GetGuidesRequest
) => Promise<GetGuidesResponse>

export const getGuides: GetGuidesEndpoint = async (
    request
): Promise<GetGuidesResponse> => {
    return await fetcher('get', '/guides/', request)
}

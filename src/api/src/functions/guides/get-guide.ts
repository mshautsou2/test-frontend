import { fetcher } from '../../configure'
import { GuideDetailsDto } from './dto/guide-details.dto'

export type GetGuideRequest = {
    guideId: string
}

export type GetGuideResponse = GuideDetailsDto

export type GetGuideEndpoint = (
    request: GetGuideRequest
) => Promise<GetGuideResponse>

export const getGuide: GetGuideEndpoint = async (
    request
): Promise<GetGuideResponse> => {
    return await fetcher('get', `/guides/${request.guideId}`)
}

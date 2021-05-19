

import { fetcher } from '../../configure'
import { GuideGeo } from './dto/guide-geo.dto'

export type GetGuideGeoRequest = {
    guideId: string
}

export type GetGuideGeoResponse = GuideGeo

export type GetGuideEndpoint = (
    request: GetGuideGeoRequest
) => Promise<GetGuideGeoResponse>

export const getGuideGeo: GetGuideEndpoint = async (
    request
): Promise<GetGuideGeoResponse> => {
    return await fetcher('get', `/guides/${request.guideId}/geo`)
}

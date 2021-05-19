import { GuideDto } from './guide.dto'

export interface GuideDetailsDto extends GuideDto {
    guideTags: string[]
    guideDescription: string
}

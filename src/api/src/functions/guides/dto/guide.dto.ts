export enum GuideType {
    SKU_STANDALONE = 'SKU-Standalone',
    SKU_HAS_BUNDLE_NO_GEO = 'SKU-HasBundleNoGeo',
    SKU_HAS_BUNDLE_HAS_GEO = 'SKU-HasBundleHasGeo',
    SKU_IN_BUNDLE_SECTION = 'SKU-InBundleSection',
    SKU_IN_BUNDLE_STANDALONE = 'SKU-InBundleStandalone',
    FreeStandalone = 'Free-Standalon',
    FreeDemo = 'FreeDemo',
    NoSkuInBundle = 'noSKU-InBundle'
}
export interface ParentGuideInfo {
    guideId: string
    guideName: string
    price: number
}

export interface GuideDto {
    guideId: string
    guideName: string
    guideType: GuideType

    guideIsFree: boolean
    guidePrice: number
    guideIcon?: string
    isPurchased: boolean

    guidePreviewCoordinates: PolygonCoordinates | MultiLineStringCoordinates
    guidePromoText: string
    guideLength: {
        meters: number
        kilometers: number
        miles: number
    }
    guideBounds: GuideBoudns
    parentGuideInfo?: ParentGuideInfo
    childGuides?: GuideDto[]
    photosCarousel: string[]
}


export type GuideBoudns = [[number, number], [number, number]]
export interface PolygonCoordinates {
    type: "Polygon",
    coordinates: [[number, number]]
}

export interface MultiLineStringCoordinates {
    type: "MultiLineString",
    coordinates: [[number, number]]
}
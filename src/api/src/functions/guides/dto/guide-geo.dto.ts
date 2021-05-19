
interface PointGeometry {
    type: 'Point'
    coordinates: [number, number, number]
}

interface MultiLineStrigGeometry {
    type: 'MultiLineString'
    coordinates: [number, number][]
}
export interface Trail {
    id: number
    type: string
    stroke: string
    trackId: string
    geometry: MultiLineStrigGeometry
    trackName: string
    trackLength: number
    strokeWidth?: number
    strokeOpacity?: number
    trackIsPrimary: boolean
}

export interface Waypoint {
    id: number
    type: string
    title: string
    geometry: PointGeometry
    waypointId: string
    description: string
    markerColor?: string
    markerSymbol?: string
    waypointIconSet: string[]
    waypointDistance?: number
}

export interface GuideGeo {
    bbox: string
    trails: Trail[]
    guideId: string
    guideName: string
    trailType?: string
    waypoints: Waypoint[]
    trailLength: number
    primaryTrail: string[]
    primaryDirection: string
    secondaryDirection: string
    guideNextWaypointTypes?: string
}
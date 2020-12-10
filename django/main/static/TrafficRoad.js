/*
 * roadType
 * 1. VerticalRoad
 * 2. HorizonRoad
 * 3. CrossRoad
 * 4. NonRoad
 */
class TrafficRoad {
    constructor(roadType, roadRane, roadLeftTopPoint, roadWidth, roadHeight) {
        this.roadType         = roadType;
        this.roadRane         = roadRane;
        this.roadLeftTopPoint = JSON.parse(JSON.stringify(roadLeftTopPoint));
        this.roadWidth        = roadWidth;
        this.roadHeight       = roadHeight;
    }
}
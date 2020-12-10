var simulationWorldSize = window.innerWidth * 5 / 10;
var simulationRoadState = new Array(9);
var simulationRoadSize  = Math.floor(simulationWorldSize / 9);

for(var rows = 0; rows < simulationRoadState.length; ++rows) {
    simulationRoadState[rows] = new Array(9);

    for(var cols = 0; cols < simulationRoadState[rows].length; ++cols) {
        var RoadPointX   = cols * simulationRoadSize;
        var RoadPointY   = rows * simulationRoadSize;
        var RoadPoint    = new TrafficPoint(RoadPointX, RoadPointY);
        var trafficRoad  = null;
        var trafficLight = null;
        var lightPoint   = null;

        simulationRoadState[rows][cols] = {
            "road"  : null,
            "light" : null
        };

        if(rows % 2 == 0) {
            if(cols % 2 == 0) {
                trafficRoad = new TrafficRoad(
                    "NonRoad",
                    0,
                    RoadPoint,
                    simulationRoadSize,
                    simulationRoadSize
                );

            } else {
                trafficRoad = new TrafficRoad(
                    "VerticalRoad",
                    3,
                    RoadPoint,
                    simulationRoadSize,
                    simulationRoadSize
                );

                lightPoint = new TrafficPoint(
                    RoadPointX,
                    RoadPointY + simulationRoadSize / 2
                );

                trafficLight = new TrafficLight(3, lightPoint);

            }
        } else {
            if(cols % 2 == 0) {
                trafficRoad = new TrafficRoad(
                    "HorizonRoad",
                    3,
                    RoadPoint,
                    simulationRoadSize,
                    simulationRoadSize
                );

                lightPoint = new TrafficPoint(
                    RoadPointX + simulationRoadSize / 2,
                    RoadPointY
                );

                trafficLight = new TrafficLight(3, lightPoint);

            } else {
                trafficRoad = new TrafficRoad(
                    "CrossRoad",
                    3,
                    RoadPoint,
                    simulationRoadSize,
                    simulationRoadSize
                );

                lightPoint = new TrafficPoint(RoadPointX, RoadPointY);

                trafficLight = new Array(4);
                
                lightPoint.y += simulationRoadSize / 2;
                trafficLight[0] = new TrafficLight(4, lightPoint);

                lightPoint.x += simulationRoadSize;
                trafficLight[2] = new TrafficLight(4, lightPoint);
                
                lightPoint.x -= simulationRoadSize / 2;
                lightPoint.y -= simulationRoadSize / 2;
                trafficLight[1] = new TrafficLight(4, lightPoint);

                lightPoint.y += simulationRoadSize;
                trafficLight[3] = new TrafficLight(4, lightPoint);
            }
        }

        simulationRoadState[rows][cols]["road"] 
        = JSON.parse(JSON.stringify(trafficRoad));
        simulationRoadState[rows][cols]["light"] 
        = JSON.parse(JSON.stringify(trafficLight));
    }
}



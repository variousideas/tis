function DrawTrafficRoad(canvasContext, trafficRoad, fillRoadColor, roadColor) {
    var trafficRoadPoint = trafficRoad.roadLeftTopPoint;

    DrawFillRectInCanvas(
        canvasContext,
        trafficRoadPoint.x, trafficRoadPoint.y,
        trafficRoad.roadWidth, trafficRoad.roadHeight,
        fillRoadColor
    );
    
    if(trafficRoad.roadType == "VerticalRoad") {
        DrawParallelLine(
            canvasContext,
            trafficRoadPoint.x, trafficRoadPoint.y,
            trafficRoad.roadWidth, trafficRoad.roadHeight,
            "Vertical",
            roadColor
        );
                                      
    } else if(trafficRoad.roadType == "HorizonRoad") {
        DrawParallelLine(
            canvasContext,
            trafficRoadPoint.x, trafficRoadPoint.y,
            trafficRoad.roadWidth, trafficRoad.roadHeight,
            "Horizon",
            roadColor
        );

    } else if(trafficRoad.roadType == "CrossRoad") {
        DrawStrokeRectInCanvas(
            canvasContext,
            trafficRoadPoint.x, trafficRoadPoint.y,
            trafficRoad.roadWidth, trafficRoad.roadHeight,
            "rgb(180, 180, 180)"
        );
    } else if(trafficRoad.roadType == "NonRoad") {
        

    } else {
        throw Error("Error DrawTrafficRoad");
    }
}

function DrawTrafficCircleLight(canvasContext, x, y, radius, trafficCircleLightType) {
    var trafficLightColor = ConvertColorStringToRGB(trafficCircleLightType, 0.5);

    DrawFillCircleInCanvas(
        canvasContext,
        x, y, radius,
        trafficLightColor
    );
}

function DrawTrafficArrowLight(canvasContext, x, y, radius) {
    var trafficLightColor = ConvertColorStringToRGB("gray", 0.5);
    var trafficArrowColor = ConvertColorStringToRGB("Green", 0.5);
    var divideRadius      = Math.floor(2 * radius / 3);
    var arrowWidth        = Math.floor(radius / 5);

    DrawFillCircleInCanvas(
        canvasContext,
        x, y, radius,
        trafficLightColor,
    );

    DrawLineInCanvas(
        canvasContext,
        x - divideRadius, y,
        x, y + divideRadius,
        trafficArrowColor,
        arrowWidth,
        true
    );

    DrawLineInCanvas(
        canvasContext,
        x - divideRadius, y,
        x + divideRadius, y,
        trafficArrowColor,
        arrowWidth,
        true
    );

    DrawLineInCanvas(
        canvasContext,
        x - divideRadius, y,
        x, y - divideRadius,
        trafficArrowColor,
        arrowWidth,
        true
    );
}

function DrawTrafficLightState(canvasContext, trafficLightType, x, y, radius) {
    if(trafficLightType != "Arrow") {
        DrawTrafficCircleLight(canvasContext, x, y, radius, trafficLightType);
    } else {
        DrawTrafficArrowLight(canvasContext, x, y, radius);
    }
}

function DrawTrafficLight(canvasContext, trafficLight, x, y, drawWidth, drawHeight, backgroundColor) {
    DrawFillRectInCanvas(
        canvasContext, 
        x, y, drawWidth, drawHeight, backgroundColor
    );
    
    var addLength           = drawWidth / (trafficLight.numberOfLight + 1);
    var drawCircleXPosition = x + addLength;
    var drawCircleYPosition = y + drawHeight / 2;
    var drawCircleRadius    = drawHeight / 4;

    for(var refObjKey in trafficLight.setOfLightState) {
        if(refObjKey != "Type") {
            if(trafficLight.setOfLightState[refObjKey] == true) {
                DrawTrafficLightState(
                    canvasContext,
                    refObjKey,
                    drawCircleXPosition, drawCircleYPosition,
                    drawCircleRadius,
                );
            } else {
                DrawTrafficLightState(
                    canvasContext,
                    "gray",
                    drawCircleXPosition, drawCircleYPosition,
                    drawCircleRadius,
                )

            }

            drawCircleXPosition += addLength;
        }
    }
}

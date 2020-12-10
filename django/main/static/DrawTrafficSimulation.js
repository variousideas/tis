function ClearAllCanvas() {
    simulationCanvas.canvasContext.clearRect(
        0, 0,
        simulationCanvas.htmlCanvas.width,
        simulationCanvas.htmlCanvas.height
    );

    showTrafficLightCanvas.canvasContext.clearRect(
        0, 0,
        showTrafficLightCanvas.htmlCanvas.width,
        showTrafficLightCanvas.htmlCanvas.height
    );
}

function DrawTrafficRoadInShowCanvas() {
    for(var rows = 0; rows < 9; ++rows) {
        for(var cols = 0; cols < 9; ++cols) {
            DrawTrafficRoad(
                simulationCanvas.canvasContext,
                simulationRoadState[rows][cols]["road"],
                "rgb(220, 220, 220)",
                "rgb(100, 100, 100)"
            );
        }
    }
}

function DrawTrafficRoadInStateCanvas(row, col) {
    var termSize = 5;
    var startPointX = termSize;
    var startPointY = termSize;
    var refSimulationRoadState = simulationRoadState[row][col]["road"];
    var drawSize = showTrafficLightCanvas.htmlCanvas.width - termSize;

    DrawStrokeRectInCanvas(
        showTrafficLightCanvas.canvasContext,
        startPointX, startPointX,
        drawSize, drawSize,
        "rgb(150, 150, 150)"
    );

    DrawFillRectInCanvas(
        showTrafficLightCanvas.canvasContext,
        startPointX, startPointX,
        drawSize, drawSize,
        "rgb(200, 200, 200)"
    );

    if(refSimulationRoadState.roadType == "VerticalRoad") {
        DrawParallelLine(
            showTrafficLightCanvas.canvasContext,
            startPointX + drawSize / 8, startPointY,
            drawSize * 6 / 8, drawSize,
            "Vertical",
            "rgb(150, 150, 150)"
        );

    } else if(refSimulationRoadState.roadType == "HorizonRoad") {
        DrawParallelLine(
            showTrafficLightCanvas.canvasContext,
            startPointX, startPointY + drawSize / 8,
            drawSize, drawSize * 6 / 8,
            "Horizon",
            "rgb(150, 150, 150)"
        );

    } else if(refSimulationRoadState.roadType == "CrossRoad") {
        DrawParallelLine(
            showTrafficLightCanvas.canvasContext,
            startPointX + drawSize / 8, startPointY,
            drawSize * 6 / 8, drawSize,
            "Vertical",
            "rgb(150, 150, 150)"
        );

        DrawParallelLine(
            showTrafficLightCanvas.canvasContext,
            startPointX, startPointY + drawSize / 8,
            drawSize, drawSize * 6 / 8,
            "Horizon",
            "rgb(150, 150, 150)"
        );

    } else {

    }
}
class Canvas {
    constructor(canvasTagID, canvasWidth, canvasHeight, canvasFillColor, flagOutLine = null, outLineColor = null) {
        this.htmlCanvas                = document.getElementById(canvasTagID);
        this.canvasContext             = this.htmlCanvas.getContext("2d");
        this.htmlCanvas.width          = canvasWidth;
        this.htmlCanvas.height         = canvasHeight;
        this.canvasContext.fillStyle   = canvasFillColor;
        
        this.canvasContext.fillRect(0, 0, this.htmlCanvas.width, this.htmlCanvas.height);

        if(flagOutLine == true) {
            this.canvasContext.strokeStyle = outLineColor;
            this.canvasContext.strokeRect(0, 0, canvasWidth, canvasHeight);
        }
    }
}

function DrawLineInCanvas(canvasContext, x1, y1, x2, y2, lineColor, lineWidth, flagRound) {
    canvasContext.save();

    if(flagRound == true) {
        canvasContext.lineCap = "round";
    }

    canvasContext.strokeStyle = lineColor;
    canvasContext.lineWidth   = lineWidth;
    canvasContext.beginPath();
    canvasContext.moveTo(x1, y1);
    canvasContext.lineTo(x2, y2);
    canvasContext.stroke();

    canvasContext.restore();
}

function DrawStrokeRectInCanvas(canvasContext, x, y, width, height, rectColor) {
    canvasContext.save();

    canvasContext.strokeStyle = rectColor;
    canvasContext.strokeRect(x, y, width, height);

    canvasContext.restore();
}

function DrawFillRectInCanvas(canvasContext, x, y, width, height, rectFillColor) {
    canvasContext.save();

    canvasContext.fillStyle = rectFillColor;
    canvasContext.fillRect(x, y, width, height);

    canvasContext.restore();
}

function DrawStrokeCircleInCanvas(canvasContext, x, y, radius, circleColor) {
    canvasContext.save();

    canvasContext.strokeStyle = circleColor;
    canvasContext.beginPath();
    canvasContext.arc(
        x, y, radius,
        0, Math.PI * 2,
        true
    );
    canvasContext.closePath();
    canvasContext.stroke();

    canvasContext.restore();
}

function DrawFillCircleInCanvas(canvasContext, x, y, radius, circleFillColor) {
    canvasContext.save();

    canvasContext.fillStyle = circleFillColor;
    canvasContext.beginPath();
    canvasContext.arc(
        x, y, radius,
        0, Math.PI * 2,
        true
    );
    canvasContext.closePath();
    canvasContext.fill();

    canvasContext.restore();
}

function DrawParallelLine(canvasContext, startXPosition, startYPosition, width, height, lineDirection, lineColor) {
    if(lineDirection == "Vertical") {
        DrawLineInCanvas(
            canvasContext,
            startXPosition, startYPosition,
            startXPosition, startYPosition + height,
            lineColor
        );

        DrawLineInCanvas(
            canvasContext,
            startXPosition + width, startYPosition,
            startXPosition + width, startYPosition + height,
            lineColor
        );
    } else if(lineDirection == "Horizon") {
        DrawLineInCanvas(
            canvasContext,
            startXPosition, startYPosition,
            startXPosition + width, startYPosition,
            lineColor
        );
        
        DrawLineInCanvas(
            canvasContext,
            startXPosition, startYPosition + height,
            startXPosition + width, startYPosition + height,
            lineColor
        );

    } else {
        throw Error("Error DrawParallelLine");
    }
}

function ConvertColorStringToRGB(colorString, colorAlpha) {
    var newColorString = colorString.toLowerCase();
    
    var rgbR = Math.floor(255 * colorAlpha);
    var rgbG = Math.floor(255 * colorAlpha);
    var rgbB = Math.floor(255 * colorAlpha);

    switch(newColorString) {
        case "red":
            rgbR = 255;
            break;
        case "green":
            rgbG = 255;
            break;
        case "blue":
            rgbB = 255;
            break;
        case "yellow": // yello = red + green;
            rgbR = 255;
            rgbG = 255;
            break;
        case "cyan": // cyan = green + blue;
            rgbG = 255;
            rgbB = 255;
            break;
        case "magenta": // magenta = red + blue;
            rgbR = 255;
            rgbB = 255;
            break;
        case "orange":
            rgbR = 255;
            rgbG = 160;
        default:
            break;
    }
    
    var rgb  = `rgb(${rgbR}, ${rgbG}, ${rgbB})`;

    return rgb;
}

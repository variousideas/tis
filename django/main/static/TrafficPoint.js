class TrafficPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    moveToPosition(moveXPosition, moveYPosition) {
        this.x = moveXPosition;
        this.y = moveYPosition;
    }

    addNowPosition(addXPosition, addYPosition) {
        this.x += addXPosition;
        this.y += addYPosition;
    }

    rotatePosition(rotateCenterPoint, rotateRadian) {
        this.addNowPosition(
            -rotateCenterPoint.x,
            -rotateCenterPoint.y
        );
        
        var tempNowXPosition = this.x * Math.cos(rotateRadian) - this.y * Math.sin(rotateRadian);
        var tempNowYPosition = this.x * Math.sin(rotateRadian) + this.y * Math.cos(rotateRadian);
        
        this.x = tempNowXPosition
        this.y = tempNowYPosition

        this.addNowPosition(
            rotateCenterPoint.x,
            rotateCenterPoint.y
        );
    }
}

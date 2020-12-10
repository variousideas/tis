var windowWidth  = window.innerWidth;
var windowHeight = window.innerHeight;

var simulationCanvas = new Canvas(
    "ShowSimulationCanvas", 
    windowWidth * 5 / 10, windowWidth * 5 / 10, 
    "rgb(200, 200, 200)", 
    true, 
    "rgb(150, 150, 150)"
);

var showTrafficLightCanvas = new Canvas(
    "ShowTrafficStateCanvas", 
    windowWidth * 3 / 10, windowWidth * 5 / 10,
    "rgb(200, 200, 200)",
    true,
    "rgb(150, 150, 150)"
);
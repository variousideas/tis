class TrafficLight {
    constructor(numberOfLight, lightPointInMap) {
        this.numberOfLight   = numberOfLight;
        this.lightPointInMap = JSON.parse(JSON.stringify(lightPointInMap));
        this.setOfLightState = null;
        
        this.InitLightState();
        this.TurnLight("Red", "On");
    }

    InitLightState() {
        if(this.numberOfLight == 2) {
            this.setOfLightState = {
                "Type"  : "Pedestrian", /* Pedestrian : 보행자*/
                "Green" : false,
                "Red"   : false
            };
        } else if(this.numberOfLight == 3) {
            this.setOfLightState = {
                "Type"   : "Vehicle", /* Vehicle : 차량*/
                "Red"    : false,
                "Orange" : false,
                "Green"  : false
            };
        } else if(this.numberOfLight == 4) {
            this.setOfLightState = {
                "Type"   : "Vehicle", /* Vehicle : 차량*/
                "Red"    : false,
                "Orange" : false,
                "Arrow"  : false,
                "Green"  : false
            };
        } else {
            throw Error("Paramer 'numberOfLight' Error In InitLightState Of TrafficLight");
        }
    }

    TurnLight(lightType, changeLight) {
        if(lightType in this.setOfLightState) {
            if(changeLight == "On") {
                this.setOfLightState[lightType] = true;
            } else if(changeLight == "Off") {
                this.setOfLightState[lightType] = false;
            } else {
                throw Error("Paramer 'ChangeLight' Error In TurnLight Of TrafficLight");
            }
        } else {
            throw Error("Paramer 'lightType' Error In TurnLight Of TrafficLight");
        }
        
    }
}
//help loic rico chirst saravia jean-francois Taillefer Anthony pageau
//===================== class elevator=========================/
class Elevator {
    constructor(id, direction, status) {
        this.id = id;
        this.elevatorDirection = direction;
        this.elevatorStatus = status;
        this.doorStatus = "closed";
        this.floorLevel = 1;
        this.queueList = [];
        this.maximumWeight =null
    }


    //============================ controler==============================//
    controler(requestedFloor) {

        while (this.floorLevel != this.queueList[0]) {
            if (this.floorLevel > this.queueList[0]) {
                this.floorLevel -= 1
                this.direction = "down"
            } else if (this.floorLevel < this.queueList[0]) {
                    this.floorLevel += 1
                    this.direction = "up"
            }
        }
        this.direction = null
        this.queueList.splice(0, 1);
    }  
}
//==========================================CallBTN OBJ==================================//
class CallButton {

}

class Column {
    constructor(nbElevators, nbFloors) {
        this.numberElevators = nbElevators;
        this.numberFloors = nbFloors;
        this.elevatorList = [];
        this.callButtonList = [];
        this.floorList = [];
        this.bestElevator = null;
        this.bestElevatorList = [];

        for (var i = 1; i <= this.numberElevators; i++) {
            var elev = new Elevator(i, null, "IDLE");
            this.elevatorList.push(elev);
        }

        for (var i = 1; i <= this.numberFloors; i++) {
            if (i != 1) {
                var callButton = new CallButton();
                this.callButtonList.push(callButton);
            }
            if (i != nbFloors); {
                var callButton = new CallButton();
                this.callButtonList.push(callButton)
                    
            }
        }
    }
    
    //requesting elevator from outside button
    requestedElevator(requestedFloor, requestedDirection) {
        var bestElevator = this.findBestElevator(requestedFloor, requestedDirection);
        bestElevator.controler(requestedFloor);
        console.log('The elevator has been requested ');
        return bestElevator;
    }

    // elevator request from inside button
    requestedFloor(elevator, requestedFloor) {
        elevator.queueList.unshift(requestedFloor);

        if (requestedFloor < elevator.floorLevel) {
            elevator.controler(requestedFloor, 'down', 'moving')
        }
        if (requestedFloor > elevator.floorLevel) {
            elevator.controler(requestedFloor, 'up', 'moving')
            console.log('It is moving to the requested floor');
        }
    }

    findBestElevator(floor, direction) {
        var bestElevator = null;
        var bestDifference = this.numberFloors;

  // The smallest difference will be sent as best case
       
        for (var i = 0; i < this.elevatorList.length; i++) {
            var difference = Math.abs(this.elevatorList[i].floorLevel - floor);

            if (difference < bestDifference) {
                if (this.elevatorList[i].direction == null || direction == this.elevatorList[i].direction) {
                    bestElevator = this.elevatorList[i];
                    bestDifference = difference;
                }
            }
        }

        //bestElevator = this.elevatorList[0]
        bestElevator.queueList.unshift(floor)
        return bestElevator;
    }
 
}
// SCENARIO setup

function scenario1() {
    var column1 = new Column(2, 10)
    console.log('Button on 3rd floor going up pressed')
    var r = column1.requestedElevator(3, 'up')
    console.log('Button to floor 7 requested inside elevator ' + r.id)
    column1.requestedFloor(r, 7)
    console.log('selected elevator is ')
}


function scenario2() {
    var column2 = new Column(2, 10)
    column2.elevatorList[0].elevatorStatus = "idle"
    column2.elevatorList[0].floorLevel = 10
    column2.elevatorList[1].elevatorStatus = "idle"
    column2.elevatorList[1].floorLevel = 3
    console.log('Button on 1st floor going up pressed')
    var elevator1 = column2.requestedElevator(1, 'up')
    console.log('Button to floor 6 requested inside elevator ' + elevator1.id)
    column2.requestedFloor(elevator1, 6)
    console.log('Button on 3rd floor going up pressed')

    var elevator1 = column2.requestedElevator(3, 'up')
    console.log('Button to floor 3 requested inside elevator ' + elevator1.id)
    column2.requestedFloor(elevator1, 5)
    console.log('Button on 9th floor going down pressed')
    var elevator1 = column2.requestedElevator(9, 'down')
    console.log('Button to floor 9 requested inside elevator ' + elevator1.id)
    column2.requestedFloor(elevator1, 2)
}
scenario1()
//scenario2(1)

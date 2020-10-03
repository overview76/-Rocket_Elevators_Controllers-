class Elevator {
    constructor(id, direction, status) {
        this.id = id;
        this.elevatorDirection = direction;
        this.elevatorStatus = status;
        this.doorStatus = "closed";
        this.floorLevel = 1;
        this.queueList = [];
        this.doorSensor = false
        this.maximumWeight =null
    }

    openDoors(elev) {
        elev.doorStatus = 'open'
        if (this.doorSensor = true && this.maximumWeight > 4000)
            this.openDoors(elev)
        else
            closeDoors(elev);
        console.log('doors are ' + elevator.doorStatus);
    }


    closeDoors(elev) {
        elev.doorStatus = 'close'
        if (this.doorSensor = false && this.maximumWeight < 4000)
            this.closeDoors(elev)
        else
            openDoors(elev);
    }

    // How elevator will move
    move(requestedFloor) {

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
        bestElevator.move(requestedFloor);
        console.log('The elevator has been requested ');
        return bestElevator;
    }

    // elevator request from inside button
    requestedFloor(elevator, requestedFloor) {
        elevator.queueList.unshift(requestedFloor);

        if (requestedFloor < elevator.floorLevel) {
            elevator.move(requestedFloor, 'down', 'moving')
        }
        if (requestedFloor > elevator.floorLevel) {
            elevator.move(requestedFloor, 'up', 'moving')
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
scenario1()
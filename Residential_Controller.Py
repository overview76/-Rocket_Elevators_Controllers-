# help and link 
class Elevators:
    def __init__(self, numElevators, floorNumber):
        self.numElevators = numElevators
        self.currentFloor = 1
        self.direction = None
        self.status = "Idle"
        self.floorList = []
    

    def movingDown(self):
        if self.status == "Idle":  
            self.status = "moving"
            self.direction = "Down"

    
    def movingUp(self): 
        if self.status == "Idle":
            self.status = "moving"
            self.direction = "Up"
        

class Columns:
    def __init__ (self, numElevators, floorNumber):
        self.numElevators = numElevators
        self.floorNumber = floorNumber
        self.elevators = []

        for i in range(self.numElevators):
            self.elevatorsList.append(Elevators(i, floorNumber))

        #for let i = 0; i < self.numElevators; i++
            #self.elevators.append(new Elevators(floorNumber))
        
class Button:
    def __init__(self, requestFloor): 
        self.requestFloor = requestFloor



class ExternalFloorBtn:
    def __init__ (self, direction, requestFloor, status):
        self.requestFloor = requestFloor
        self.direction = direction
        self.status = status
    

class RequestedFloor:
    def __init__ (self, numElevators, status, requestFloor): 
        self.numElevators = numElevators
        self.status = status
        self.requestFloor = requestFloor

class ElevatorController:
    def __init__ (self, floorNumber, numElevators):
        self.floorNumber = floorNumber
        self.numElevators = numElevators
        self.btnList = []
        self.elevatorList = []
        for i in range (self.floorNumber): 
            self.btnList.append(Button('Up', i, 'off'))
            self.btnList.append(Button('Down', i + 1, 'off'))
        
        for i in range (self.numElevators):
            self.elevatorList.append(Elevators(i, floorNumber))
        
    

    
    def bestElevator(self, floorList, direction): 
        if (self.direction == "Up"):
                z = False
                for i in range (self.floorList.length): 
                    if floorList[i] > floorList[i+1]: 
                        temp = floorList[i]
                        floorList[i] = floorList[i+1]
                        floorList[i+1] = temp
                        z = True
                     
                while (z):

        elif(self.direction == "Down"):
                z = False
                for i in range (self.floorList.length-1): 
                    if (floorList[i] < floorList[i+1]): 
                        temp = floorList[i]
                        floorList[i] = floorList[i+1]
                        floorList[i+1] = temp
                        z = True
                    
                while (z):
                    print("Sorted floorList : ", self.floorList)
    

    def findBestElevator(self, floorNumber, direction, elevList):
        print("findBEstElevator")
        while (True): 
            for i in range (self.elevList.length): 
                 x = elevList[i]
            print("elevator " + x.numElevators)
            print("floorNumber " + floorNumber)
            print("current floor " + x.currentFloor)
                if x.status == "STOPPED" && x.currentFloor == floorNumber && x.direction == direction: 
                    print("findBEstElevator 1")
                    x.floorList.append(floorNumber)
                    return x
                 else if (x.status === "Idle" && x.currentFloor === floorNumber) 
                    print("findBEstElevator 2")
                    x.floorList.append(floorNumber)
                    return x
                 else if (x.currentFloor < floorNumber && (x.status === "moving" || "STOPPED") && x.direction === "Up" && direction === x.direction) 
                    print("findBEstElevator 3")
                    x.floorList.append(floorNumber)
                    return x
                 else if (x.currentFloor > floorNumber && (x.status === "moving" || "STOPPED") && x.direction === "Down" && direction === x.direction) 
                    print("findBEstElevator 4")
                    x.floorList.append(floorNumber)
                    return x
                 else if (x.status === "Idle"): 
                    print("findBEstElevator 5")
                    x.floorList.append(floorNumber)
                    return x
                
                else 
                    print("findBEstElevator6")
                     x = self.shortestList(elevList)
                    return x
                
            
        
    

    requestElevator(FloorNumber, Direction) 
         elevator = self.findBestElevator(FloorNumber, Direction, self.elevatorList)
        print("Find best elevator has retrned : " + elevator.numElevators)
        self.operateElevator(elevator, Direction)
    

    requestFloor(Elevator, RequestedFloor) 
         elevator = self.requestElevator(RequestedFloor, direction, self.elevatorList)
        self.operateElevator(Elevator, Direction)
    

    operateElevator(Elevator, Direction) 
        print("next item on floor list : ", Elevator.floorList[0])
        while (Elevator.floorList.length > 0) 
            print("current floor : ", Elevator.currentFloor)
            if (Elevator.floorList[0] === Elevator.currentFloor) 
                Elevator.floorList.shift()
                print("new list : ", Elevator.floorList)
                print("next destination : ", Elevator.floorList[0])
            
            if (Elevator.floorList[0] > Elevator.currentFloor) 
                Elevator.movingUp(Elevator)
            
            if (Elevator.floorList[0] < Elevator.currentFloor) 
                Elevator.movingDown()
            
        
        if (Elevator.floorList.length < 1) 
            Elevator.status = "Idle"
            Elevator.direction = None
        
    

    shortestList(elevlist) 
         length = 9999
        for ( i = 0 i < elevlist.length i++) 
            if (length > elevlist[i].floorList.length) 
                length = elevlist[i].floorList.length
                 y = elevlist[i]
            
        
        return y
    



print("main2")
Elevator  1
elevatorController = ElevatorController(3, 2)
elevatorController.elevatorList[0].currentFloor = 3
elevatorController.elevatorList[0].direction = None
elevatorController.elevatorList[0].status = "Idle"
elevatorController.elevatorList[0].floorList = []
print("*****" + elevatorController.elevatorList[0].numElevators)

Elevator 2
elevatorController.elevatorList[1].currentFloor = 10
elevatorController.elevatorList[1].direction = None
elevatorController.elevatorList[1].status = "Idle"
elevatorController.elevatorList[1].floorList = []
print("*****" + elevatorController.elevatorList[1].numElevators)


elevatorController.requestElevator(10, "Down")
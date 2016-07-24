function Spaceship(name, passengerArray, phasers, shields){
  var self = this;
  this.name = name;
  this.passengersArray = passengerArray;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  if (passengerArray.length == 0) { 
    this.docked = true;
  }
  else if (passengerArray.length > 0) {
    passengerArray.forEach(function(passenger){
      passenger.currentShip = self;
    });
    this.docked = false;
  }
  this.phasersCharge = "uncharged";
}
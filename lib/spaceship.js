function Spaceship(name, crewMembers, phasers, shields){
  var self = this
  this.name = name;
  this.crewMembers = crewMembers;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = "disengaged"; 
  if (crewMembers.length > 0) {
    this.docked = false;
  } else {
    this.docked = true;
  }
  this.phasersCharge = "uncharged"; 
  this.crewMembers.forEach(function(crewMember){
    crewMember.currentShip = self;
  })
} 

// spaceship = new Spaceship('The Krestel', [tristan, jon, katie], 5, 4);

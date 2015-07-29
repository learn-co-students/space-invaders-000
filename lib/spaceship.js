function Spaceship(name, crew, phasers, shields) {
  var ship = this
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.warpDrive = "disengaged";
  this.cloaked = false;
  this.phasersCharge = "uncharged";
  this.docked = (this.crew.length == 0 ? true : false);
  this.crew.forEach(function(member){
    member.currentShip = ship });
}


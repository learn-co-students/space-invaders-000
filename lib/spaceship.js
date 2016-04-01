
function Spaceship(name, crew, phasers_num, shields_num) {
  this.name = name;
  this.crew = crew;
  var ship = this;
  this.crew.forEach(function(crew_member){
    crew_member.currentShip = ship
  });
  this.phasers = phasers_num;
  this.phasersCharge = "uncharged";
  this.shields = shields_num;
  this.docked = (crew.length === 0 ? true : false);
  this.cloaked = false;
  this.warpDrive = "disengaged";
}
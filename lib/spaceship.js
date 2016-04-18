function Spaceship (name, crew, phasers, shieldLayer) {
  this.name = name;
  this.phasers = phasers;
  this.shields = shieldLayer;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.docked = true;
  this.phasersCharge = 'uncharged';
  this.crew = crew;
  var currentShip = this;
  if (crew.length > 0) {
    this.docked = false;
    this.crew.forEach(function(member) {
      member.currentShip = currentShip;
    }); 
  } else { 
    this.docked = true;
  }

}
function CrewMember(position){
  this.name = name;
  this.position = position;
  this.currentShip = "Looking for a Rig";
  this.specialAbility = "had no effect";

}

CrewMember.prototype.engageWarpDrive =  function() {
  return "had no effect";
}

CrewMember.prototype.setsInvisibility =  function() {
  return "had no effect";
}

CrewMember.prototype.chargePhasers =  function() {
  if (this.currentShip == "Looking for a Rig") {
  return "had no effect";
  } else if (this.position == "Gunner"){
  this.currentShip.phasersCharge = "charged!";
  return "charged!";
  } else{
  this.currentShip.phasersCharge = "uncharged";  
  return "had no effect";
  }
}

CrewMember.prototype.engageWarpDrive =  function() {
  if (this.currentShip == "Looking for a Rig") {
  return "had no effect";
  } else if (this.position == "Pilot"){
  this.currentShip.warpDrive = "engaged!";
  return "engaged!";
  } else{
  this.currentShip.warpDrive = "disengaged";  
  return "had no effect";
  }
}

CrewMember.prototype.setsInvisibility =  function() {
  if (this.currentShip == "Looking for a Rig") {
  return "had no effect";
  } else if (this.position == "Defender"){
  this.currentShip.cloaked = true;
  return true;
  } else{
  this.currentShip.cloaked = false;  
  return "had no effect";
  }
}
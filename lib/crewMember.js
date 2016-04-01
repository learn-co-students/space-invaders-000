function CrewMember(position){
  this.position = position;
  this.currentShip = "Looking for a Rig";
  this.engageWarpDrive = function(){
    return (1 === 2 ? "dunno" : "had no effect");
  };
  this.setsInvisibility = function(){
    return (1 === 2 ? "dunno" : "had no effect");
  };
  this.chargePhasers = function(){
    if (this.position === "Gunner") {
      this.currentShip.phasersCharge = "charged!"
    } else {
    return "had no effect"
    };
  };
}


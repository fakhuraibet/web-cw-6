let planet = prompt(" Name the planet you want to travel to ");

(function travel(x = "Mars") {
  console.log(" I want to travel to planet " + x);
})(planet);

travel(planet);
travel(planet);

(function travel(x = " Saturn ") {
  console.log(" I want to travel to planet " + x);
})(planet);

(function travel(x = " Saturn ") {
  console.log(" I want to travel to plant " + x);
})();

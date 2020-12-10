
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   /*window.addEventListener("load", function() {
            fetch("https://handlers.education.launchcode.org/static/weather.json").then( function(response) {
               response.json().then( function(json) {
                  const div = document.getElementById("weather-conditions");
                  // Add HTML that includes the JSON data
                  div.innerHTML = `
                     <ul>
                        <li>Temp ${json.temp}</li>
                        <li>Wind Speed ${json.windSpeed}</li>
                        <li>Status ${json.status}</li>
                        <li>Chance of Precip ${json.chanceOfPrecipitation}</li>
                     </ul>
                  `;
               });
            });
         });
         */
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.getElementById("pilotName");
      let copilotNameInput = document.getElementById("copilotName");
      let fuelLevelInput = document.getElementById("fuelLevel");
      let cargoMassInput = document.getElementById("cargoMass");
      if (pilotNameInput.value === "" || typeof pilotNameInput.value !== "string") {
         alert("Pilot input must be a name!");
      }  else {
         document.getElementById("pilotName").innerHTML = `Pilot ${pilotNameInput.value} Ready`;
      }
      
      if (copilotNameInput.value === "" || typeof copilotNameInput.value !== "string") {
         alert("Co-Pilot input must be a name!");
      }  else {
         document.getElementById("copilotName").innerHTML = `Co-Pilot ${copilotNameInput.value} Ready`;
      }

      if (fuelLevelInput.value === "" || isNaN(Number(fuelLevelInput.value)) === true) {
         alert("Fuel Level must be a number!");
      }
      if (cargoMassInput.value === "" || isNaN(Number(cargoMassInput.value)) === true) {
            alert("Cargo Mass must be a number!");
      }      
      
      if (fuelLevelInput.value < 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = `Fuel level of ${fuelLevelInput.value} is too low for launch!`;
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
            document.getElementById("launchStatus").style.color = "red";
            event.preventDefault();
      }  else { 
         if (cargoMassInput.value > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("cargoStatus").innerHTML = `Cargo mass of ${cargoMassInput.value} is too high for launch!`;
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
            document.getElementById("launchStatus").style.color = "red"; 
      }  else {      
         document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch!`;
         document.getElementById("launchStatus").style.color = "green";
      }
      event.preventDefault();
      }
   });
   

});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

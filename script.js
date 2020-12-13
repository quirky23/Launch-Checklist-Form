window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      let pilotNameInput = document.getElementById("pilotName");
      let copilotNameInput = document.getElementById("copilotName");
      let fuelLevelInput = document.getElementById("fuelLevel");
      let cargoMassInput = document.getElementById("cargoMass");
      if (
         pilotNameInput.value === "" ||
         isNaN(Number(pilotNameInput.value)) === false
      ) {
         alert("Pilot name cannot be blank OR a number. Please re-enter NAME.");
         event.preventDefault();
      } else {
         document.getElementById(
            "pilotStatus"
         ).innerHTML = `Pilot "${pilotNameInput.value}" Ready`;
      }

      if (
         copilotNameInput.value === "" ||
         isNaN(Number(copilotNameInput.value)) === false
      ) {
         alert(
            "Co-pilot name cannot be blank OR a number. Please re-enter NAME."
         );
         event.preventDefault();
      } else {
         document.getElementById(
            "copilotStatus"
         ).innerHTML = `Co-Pilot "${copilotNameInput.value}" Ready`;
      }

      if (
         fuelLevelInput.value === "" ||
         isNaN(Number(fuelLevelInput.value)) === true
      ) {
         alert("Fuel Level must be a number!");
      }
      if (
         cargoMassInput.value === "" ||
         isNaN(Number(cargoMassInput.value)) === true
      ) {
         alert("Cargo Mass must be a number!");
      }

      if (fuelLevelInput.value < 10000 || cargoMassInput.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById(
            "launchStatus"
         ).innerHTML = `Shuttle not ready for launch`;
         document.getElementById("launchStatus").style.color = "red";
         if (fuelLevelInput.value < 10000) {
            document.getElementById("fuelStatus").style.color = "red";
            document.getElementById(
               "fuelStatus"
            ).innerHTML = `Fuel level of ${fuelLevelInput.value} is too low for launch!`;
         }
         event.preventDefault();
         if (cargoMassInput.value > 10000) {
            document.getElementById("cargoStatus").style.color = "red";
            document.getElementById(
               "cargoStatus"
            ).innerHTML = `Cargo mass of ${cargoMassInput.value} is too high for launch!`;
         }
         event.preventDefault();
      } else {
         document.getElementById(
            "launchStatus"
         ).innerText = `Shuttle is ready for launch!\n\n Pilot "${pilotNameInput.value}" and Co-Pilot "${copilotNameInput.value}" are going to SPACE!`;
         document.getElementById("launchStatus").style.color = "green";
      }
      event.preventDefault();
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(
      function (response) {
         response.json().then(function (json) {
            const planet = document.getElementById("missionTarget");
            let index = Math.floor(Math.random() * json.length);
            planet.innerHTML = `
         <h2>Mission Destination:</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">
         `;
         });
      }
   );
});

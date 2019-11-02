document.addEventListener('DOMContentLoaded', function () {

  const chosenDistance = document.querySelector("#distance");
  let hours = document.querySelector("#hours");
  let minutes = document.querySelector("#minutes");
  let seconds = document.querySelector("#seconds");
  let paceKm = document.querySelector(".pace-km");
  let paceMile = document.querySelector(".pace-mile");
  const calculateButton = document.querySelector(".calculate-btn");

  function getPace() {
    let hoursInSeconds = parseInt(hours.value * 3600);
    let minutesInSeconds = parseInt(minutes.value * 60);
    let secondsInSeconds = parseInt(seconds.value);
    let timeInSeconds = hoursInSeconds + minutesInSeconds + secondsInSeconds;

    let distanceInKm = chosenDistance.value / 1000;
    let distanceInMiles = chosenDistance.value / 1000 / 1.609344;

    let paceInKm = timeInSeconds / distanceInKm;
    let paceInMiles = timeInSeconds / distanceInMiles;

    let minutesPaceInKm = paceInKm / 60;
    let minutesPaceInMiles = paceInMiles / 60;

    let secondsPaceInKm = paceInKm % 60;
    let secondsPaceInMiles = paceInMiles % 60;

    if (secondsPaceInKm === 0) {
      secondsPaceInKm = "00";
    }

    getPaceInKilometers();
    getPaceInMiles();
    console.log(hoursInSeconds);
    
    function getPaceInKilometers() {
      paceKm.innerHTML = `${Math.floor(minutesPaceInKm)} min ${Math.floor(secondsPaceInKm)} sec / km`
    }

    function getPaceInMiles() {
      paceMile.innerHTML = `${Math.floor(minutesPaceInMiles)} min ${Math.floor(secondsPaceInMiles)} sec / mile`
    }


  }


  calculateButton.addEventListener("click", function () {
    getPace();
  })
});
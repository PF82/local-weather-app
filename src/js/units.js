 // allow user to flip between imperial and metric units of measure 
 export var countryUnits = 'metric';
 export var button = document.getElementById("unit");

 export function toggleUnits() {
     // check if currently set to imperial or metric
     if (countryUnits === 'metric') {
         // convert celsius to fahrenheit
         document.getElementById("temp").innerHTML = `${Math.round((temp * 9 / 5) + 32)}°F`;
         document.getElementById("temp_max").innerHTML = `${Math.round((temp_max * 9 / 5) + 32)}°F &nbsp`;
         document.getElementById("temp_min").innerHTML = `/&nbsp ${Math.round((temp_min * 9 / 5) + 32)}°F &nbsp`;
         document.getElementById("feels_like").innerHTML = `| Feels like ${Math.round((feels_like * 9 / 5) + 32)}°F &nbsp`;
         // convert km/h to mph
         document.getElementById("visibility").innerHTML = `${Math.round((visibility / 1.609) / 1000)} Miles`;
         document.getElementById("wind-speed").innerHTML = meterSecToMpH(speed);
         document.getElementById("wind-gust").innerHTML = speedGustToMpH(gust);
         countryUnits = 'imperial';
         button.innerHTML = 'Metric Units';
     }
     else {
         // convert fahrenheit to celsius
         document.getElementById("temp").innerHTML = `${Math.round(temp)}°C`;
         document.getElementById("temp_max").innerHTML = `${temp_max.toFixed(0)}°C &nbsp`;
         document.getElementById("temp_min").innerHTML = `/&nbsp ${temp_min.toFixed(0)}°C &nbsp`;
         document.getElementById("feels_like").innerHTML = `| Feels like ${feels_like.toFixed(0)}°C`;
         // convert mph to km/h
         document.getElementById("visibility").innerHTML = `${Math.round(visibility / 1000)} Km`;
         document.getElementById("wind-speed").innerHTML = meterSecToKmH(speed);
         document.getElementById("wind-gust").innerHTML = speedGustToKmH(gust);
         countryUnits = 'metric';
         button.innerHTML = 'Imperial Units';
     }
 }
 // add onclick event to toggle units button
 document.getElementById("unit").onclick = function () {
     toggleUnits();
 };
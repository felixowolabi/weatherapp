"use strict"

const url ="https://api.openweathermap.org/data/2.5/weather?q=New York&appid=3ce69b20f4bd96d696640296534d3312"

$.ajax ({
    url:url,
    success: function (result){
        console.log (result);
        console.log (result.name);
         //Output the location
         let displayCity =`Current weather in ${result.name}`;
        $("#location").html(displayCity);
       

        //Display the temperature
        let F =Math.round(result.main.temp * (9/5) - 459.67);
        let displayTemp =`Temperature:${F}&#176;F`;
        $ ("#temperature"). html(displayTemp);

  //Display the wind
        let windSpeed = Math.round(result.wind.speed / .44704);
        let displayWind =`Wind:${windSpeed} mph`;
        $("#wind").html(displayWind);

         //Display the sky
         let displaySky =`Sky condition:${result.weather[0].description}`;
        $("#sky").html(displaySky);
       
    }
})

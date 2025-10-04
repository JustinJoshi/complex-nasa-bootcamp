//mau, hector, godwin

//the main thing that i had trouble with was getting the cors proxy to work. It wasnt working for me for a long time, but it ended up starting to work so now im using it

const nasaUrl = `https://corsproxy.io/?url=https://data.nasa.gov/docs/legacy/gvk9-iz74.json`

const facilities = document.querySelector('#facilities')
const loc = document.querySelector('#location')

//i did have trouble using async syntax and for loops, so i applied hector's strategy of using the basic fetch syntax

fetch(nasaUrl)
    .then(res => res.json()) // parse response as JSON
    .then(nasaData => {
        nasaData.forEach((x, i) => {

            const lat = nasaData[i].location.latitude
            const lon = nasaData[i].location.longitude



            const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${lat},${lon}&APPID=0e904a2a7aacc8772e00052c29bf80c8`;
            fetch(weatherUrl)
                .then(res => res.json()) // parse response as JSON
                .then(weatherData => {

                    facilities.innerHTML += `<div> ${nasaData[i].facility} || ${lat} ${lon} || ${weatherData}</div>`

                })
                .catch(err => {
                    console.log(`error ${err}`)
                });





        })
        console.log(nasaData[0])

    })
    .catch(err => {
        console.log(`error ${err}`)
    });


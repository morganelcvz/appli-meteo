// recherche city

const url = new URLSearchParams(window.location.search);
let city = url.get('city')

if (city == null || city == "") {
    city = 'Havre'
} 

// message erreur : ville non trouvée 

const object = {
  cod: "404",
  message: "city not found"
}

if (object.cod == "404") {
  document.getElementById("todayMeteo").innerHTML = `
  <div class="error">
  <h1>Erreur</h1>
  <h2>Cherchez une autre ville</h2>
  <i class="fa-solid fa-cloud-showers-heavy"></i>
  <i class="fa-regular fa-face-frown"></i>
  </div>
  `
}

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=fr&units=metric&appid=ee6df9f0e15bebd128db31decab1af46`)
    .then(response => response.json())
    .then(data => {
        moment.locale('fr')
        console.log(data)
        console.log(data.city.name)
        console.log(data.list[0].dt_txt)
        console.log(data.list[0].weather[0].description)
        console.log((data.list[0].main.temp).toPrecision(2))
        console.log(data.list[0].main.temp_min)
        console.log(data.list[0].main.temp_max)
        console.log(data.list[0].main.feels_like)
        console.log(data.list[0].main.pressure)
        console.log(data.list[0].main.humidity)
        console.log(data.list[0].wind.speed)

        console.log(data.list[0].weather[0].icon)
        console.log(data.list[3].main.temp_min)
        console.log(data.list[3].main.temp_max)
        console.log(moment(data.list[3].dt_txt).format('dddd'))

        const fiveDays = data.list.filter( date => date.dt_txt.split(' ')[1] == '12:00:00')

        const otherDays = data.list.filter( date => date.dt_txt.split(' ')[1] == '12:00:00')

        console.log(fiveDays)
        console.log(otherDays)

        // Affichage Meteo du jour TOP 
        document.getElementById("todayMeteo").innerHTML = `
                <div class="title">
                  <span><i class="fa-solid fa-location-dot"></i> ${data.city.name}</span> <p>${moment(data.list[0].dt_txt).format('LLLL')}</p>
                </div>
                <div class="degree">
                 ${(Math.round(data.list[0].main.temp))}°c
                </div>
            <div class="status">${data.list[0].weather[0].description}</div>
            <div class="temp">${(Math.round(data.list[0].main.temp_min))}° / ${(Math.round(data.list[0].main.temp_max))}°</div>
         `

        // Affichage des prévisions 5 jours 
        document.getElementById("daysMeteo").innerHTML += `
        <div class="date">
        ${createFive(fiveDays)}
        ${createOther(otherDays)}
        <button class="btn plusday" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
        aria-expanded="false" aria-controls="collapseExample">
        <i class="fa-solid fa-bars"></i> plus de jours
        </button>
        <span class="preview">
          <a href="#">prévisions 5 jours</a>
        </span>
        </div>
        `

        // Affichage Meteo du jour Bottom 
        document.getElementById("todayPlus").innerHTML = `
              <div class="top">
        <div class="box">
          <p>Ressenti</p>
          <span>${Math.round((data.list[0].main.feels_like))}°c</span>
        </div>
        <div class="box">
          <p>Humidité</p>
          <span>${data.list[0].main.humidity}%</span>
        </div>
      </div>
      <div class="bottom">
        <div class="box">
          <p>Vent</p>
          <span>${((data.list[0].wind.speed)*3.6).toPrecision(3)} km/h</span>
        </div>
        <div class="box">
          <p>Pression</p>
          <span>${data.list[0].main.pressure} Pa</span>
        </div>
      </div>
         `
    })
    .catch(error => console.error(error))


    // Affichage des 3 premiers jours

    function createFive(tableau) {
      let myDiv = ''
      let count = 3
      tableau.forEach(element => {
          count--
          if (count >= 0) {
              myDiv += `
        <span class="day">
          <p>${moment(element.dt_txt).format('dddd')}</p> <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}.png"> <span>${Math.round((element.main.temp_min))}° / ${Math.round((element.main.temp_max))}°</span>
        </span>
      `
          }
  
      })
  
      return myDiv
  }

  // Affichage des 2 derniers jours 

  function createOther(other) {
    let myDiv = ''
    let count = 5
    other.forEach(element => {
        count--
        if (count <= 1) {
            myDiv += `
             <div class="collapse" id="collapseExample">
      <span class="day">
        <p>${moment(element.dt_txt).format('dddd')}</p> <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}.png"> <span>${Math.round((element.main.temp_min))}° / ${Math.round((element.main.temp_max))}°</span>
      </span>
      </div>
    `
        }

    })

    return myDiv
}
  


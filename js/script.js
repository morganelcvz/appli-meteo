fetch('https://api.openweathermap.org/data/2.5/forecast?q=havre&lang=fr&units=metric&appid=ee6df9f0e15bebd128db31decab1af46')
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

        // const today = new Date(data.list[0].dt_txt)

        // const datefr = today.toLocaleDateString("fr")

        // Affichage Meteo du jour TOP 
        document.getElementById("todayMeteo").innerHTML = `
                <div class="title">
                  <span><i class="fa-solid fa-location-dot"></i> ${data.city.name}</span> <p>${moment(data.list[0].dt_txt).format('LLLL')}</p>
                </div>
                <div class="degree">
                 ${(data.list[0].main.temp).toPrecision(1)}°c
                </div>
            <div class="status">${data.list[0].weather[0].description}</div>
            <div class="temp">${(data.list[0].main.temp_min).toPrecision(1)}° / ${(data.list[0].main.temp_max).toPrecision(1)}°</div>
         `

        // Affichage Meteo du jour Bottom 
        document.getElementById("todayPlus").innerHTML = `
              <div class="top">
        <div class="box">
          <p>Ressenti</p>
          <span>${(data.list[0].main.feels_like).toPrecision(1)}°c</span>
        </div>
        <div class="box">
          <p>Humidité</p>
          <span>${data.list[0].main.humidity}%</span>
        </div>
      </div>
      <div class="bottom">
        <div class="box">
          <p>Vent</p>
          <span>${data.list[0].wind.speed} km/h</span>
        </div>
        <div class="box">
          <p>Pression</p>
          <span>${data.list[0].main.pressure}</span>
        </div>
      </div>
         `

        //  function prochainJours(jours) {
        //     let count = 5
        //     jours.forEach(element =>
        //         count-- 
        //         if (count >= 0) {
        //             document.getElementById("todayPlus").innerHTML = `
        //                     <span class="day">
        //                      <p>${moment(data.list[3].dt_txt).format('dddd')}</p> <img src="http://openweathermap.org/img/wn/03d@2x.png"> ${}° / 12°
        //                     </span>
        //             `
        //         }
        //     )
        //  }

    })
    .catch(error => console.error(error))

//     <span class="day">
//     <p>Lundi</p> <img src="http://openweathermap.org/img/wn/03d@2x.png"> 9° / 12°
//   </span>
//   <span class="day">
//     <p>Mardi</p> <img src="http://openweathermap.org/img/wn/10n@2x.png"> 10° / 15°
//   </span>
//   <span class="day">
//     <p>Mercredi</p> <img src="http://openweathermap.org/img/wn/03d@2x.png"> 3° / 9°
//   </span>

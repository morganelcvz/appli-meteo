fetch('https://api.openweathermap.org/data/2.5/forecast?q=havre&lang=fr&units=metric&appid=ee6df9f0e15bebd128db31decab1af46')
    .then(response => response.json())
    .then(data => {
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

        const today = new Date(data.list[0].dt_txt)

        const datefr = today.toLocaleDateString("fr")

        document.getElementById("todayMeteo").innerHTML = `
                <div class="title">
                  <span><i class="fa-solid fa-location-dot"></i> ${data.city.name}</span> <p>${datefr}</p>
                </div>
                <div class="degree">
                 ${(data.list[0].main.temp).toPrecision(2)}°
                </div>
            <div class="status">${data.list[0].weather[0].description}</div>
            <div class="temp">${(data.list[0].main.temp_min).toPrecision(2)}° / ${(data.list[0].main.temp_max).toPrecision(2)}°</div>
         `

        document.getElementById("todayPlus").innerHTML = `
              <div class="top">
        <div class="box">
          <p>Ressenti</p>
          <span>${(data.list[0].main.feels_like).toPrecision(2)}°</span>
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

    })
    .catch(error => console.error(error))


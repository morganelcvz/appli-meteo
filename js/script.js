fetch('https://api.openweathermap.org/data/2.5/forecast?q=Havre,fr&appid=ee6df9f0e15bebd128db31decab1af46')
    .then(response => response.json())
    .then(data => { 
        console.log(data)
         document.getElementById("todayMeteo").innerHTML = `
                <div class="title">
                  <span>${data.city.name}</span> <p>${data.dt_txt}</p>
                </div>
                <div class="degree">
                 ${data.main.temp}
                </div>
            <div class="status">${data.weather.description}</div>
            <div class="temp">${data.main.temp_min} / ${data.main.temp_max}</div>
         `
     })
    .catch(error => console.error(error))

 
//     <div class="title">
//     <span>Le Havre</span> <p>Lundi 13 janvier 2025 / 18:45</p>
// </div>
// <div class="degree">
//     13°
// </div>
// <div class="status">Dégagé</div>
// <div class="temp">6° / 20°</div>
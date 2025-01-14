// fetch('https://api.openweathermap.org/data/2.5/forecast?q=Havre&lang=fr&units=metric&appid=ee6df9f0e15bebd128db31decab1af46')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.list[0])
//         console.log(data.list[0].main.temp)



//         document.getElementById("todayMeteo").innerHTML = `
//                 <div class="title">
//                   <span>${data.city.name}</span> <p>${data.list[0].dt_txt}</p>
//                 </div>
//                 <div class="degree">
//                  ${data.list[0].data.main.temp}
//                 </div>
//             <div class="status">${data.list[0].data.weather.description}</div>
//             <div class="temp">${data.list[0].data.main.temp_min} / ${data.list[0].data.main.temp_max}</div>
//          `
//     })
//     .catch(error => console.error(error))





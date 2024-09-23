

function temm(temper){
    return (temper-32)*5/9
}





async function search() {

    console.log(inp.value);
    if(inp.value){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`)
       console.log(response);
       response.json().then((data)=>{

        console.log(data);

        const name = data.name
        console.log(name);

        let temper = data.main.temp
        let mainTemp = Math.floor(eval(temper-273.15))

        // temper = (temper-32) * 5 / 9

        const pre = data.main.pressure

        let feel = data.main.feels_like

        let felLike = Math.floor(eval(feel-273.15))

        const humid = data.main.humidity
        console.log(humid);

        const coun = data.sys.country

        const win = data.wind.speed

        const abd = data.weather.map((item)=>item.main)

        const timez = data.timezone


        result.innerHTML =`

          <div class="main text-center mt-5">
            <h1 id="tem">${mainTemp}°<span>C</span></h1>
            <p id="typ">${abd}</p>
        </div>
        
          <div class="row text-center mt-5 p-5 border shadow">
     
        
        <div class="col-md-1"></div>
            <div class="col-md-5">
                <img src="" alt="">
                <p></p>
                <p>FeelsLike: ${felLike}°C</p>
                <p>Humidity: ${humid}%</p>
                <p>Pressure: ${pre}atm</p>
            </div>
            
            <div class="col-md-5">
                <p>Country: ${coun}</p>
                <p>Place: ${name}</p>
                <p>Timezone: ${timez}</p>
                <p>Wind: ${win}km/h</p>
            </div>
            <div class="col-md-1"></div>
        </div>
        </div>
        
        
        
        `

       })
       
    }
    else{
        alert('Enter city name')
    }
    
    
}



  
        
  
    

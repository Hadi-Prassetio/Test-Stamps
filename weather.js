import fetch from "node-fetch"

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const getData =async()=>{
  const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=-6.2146&lon=106.8451&appid=5d9e2c77930406aedfd99b505c7b2012')
  let data = await response.json()
  let result = data.list
  result.map((item,index)=>{
    if(index % 8 == 0){
      let date = new Date(item.dt_txt)
      const newDate = date.toLocaleDateString("en-US",options)
      console.log(newDate,`: ${Math.floor(item.main.temp-273.15)}℃`)
    }
  })
}
getData()

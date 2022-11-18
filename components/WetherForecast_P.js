import React, { useState } from 'react'
import axios from 'axios'
import './WetherApp.css'

function WeathForecast() {
  const API_Key = 'aaaaa';  //add your key from you account
  const [location, setLocation] = useState('')
  const [Temp, setTemp] = useState('')
  const [Speed, setSpeed] = useState('')
  const [Humidity, setHumidity] = useState('')
  const [Pressure, setPressure] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_Key}`

  const checkWeather = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setTemp(response.data.main.temp)
        setSpeed(response.data.main.speed)
        setHumidity(response.data.main.humidity)
        setPressure(response.data.main.pressure)
      })

    }
  }

  
 
  return (
         

    <div className="weather_func">

            <div>
              <p className='result2'>My Weather App</p>
              <p className='result2'>How is the weather near U1.11 LQG </p>
            </div>

            <div >
             <input
               className="search"
               placeholder='Enter Town/City'
               onChange={event => setLocation(event.target.value)}
               onKeyPress={checkWeather}
               />
            </div>        
            
            <div>         
              <table>
               <tr>
                <td className="title">Location:</td>
                <td><p className='result'>{location}</p> </td>
               </tr>
               <tr>
                 <td className="title">Temperature:</td>
                 <td><p className='result'>{Temp} °C</p></td>           
               </tr>
               <tr>
                 <td className="title">Wind Speed:</td>
                 <td> <p className='result'>{Speed} mph</p> </td>
               </tr>
               <tr>
                <td className="title">Humidity:</td>
                <td><p className='result'>{Humidity}%</p> </td>
               </tr>
               <tr>
                 <td className="title">Pressure:</td>
                 <td> <p className='result'>{Pressure}</p> </td>
               </tr>
              </table> 
            </div>

    </div>

  );


}


export default WeathForecast;

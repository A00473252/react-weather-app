import cityPhoto from './Chennai.jpg';
import Weather from './Weather';
import { useState, useEffect } from 'react';



export function MyTown() {
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=46a7e88ec38744e7c82e7049e59b1f88&units=metric';
    
        const [tempr, setTempr] = useState([]);
        //const [weatherIcon, setweatherIcon] = useState([]);
        const fetchWeather = async () =>{
            const response = await fetch(`${API_URL}`)
            const data = await response.json();
            console.log(data.cod);
            console.log(data.main);
            console.log(data.main.temp);
            
            setTempr(data.main);
        };

        useEffect(() => {
            fetchWeather();
        }, []);
    return (
        <> 
            <div> 
                <img src={ cityPhoto } alt = "Singara Chennai" thumbnail 
                style={{width:'1700px'}}
                />
                <h1 className='cityName'> Chennai </h1>
                <p>
                    Chennai is the capital city of Tamil Nadu, the southern most state of India.
                    This city is known for its inclusivity and we, the natives, proudly call it the 
                    city that provides livelihood to whoever starts a new life here.
                    The language spoken is Tamil, one of the first formed languages and the mother of other
                    South Indian languages. The city is full of life no matter what part of the day it is and is filled with 
                    people's love and kindness.

                    I miss everything about the city but the weather. 
                    Because we only have 2 kinds of weather - it's either raining or its scorching hot.
                    You can see it down below :)
                </p>
            </div>  
            
                {
                    (tempr.cod = 200 ) ?
                        (<div> 
                            <Weather temp = { tempr.temp } />
                        </div>) :
                        (<div>
                            Could not find temperature!
                         </div>)
                }
            </> 
          
    );
    
}
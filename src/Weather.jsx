import coldIcon from './cold.png';
import mildIcon from './mild.png';
import sunnyIcon from './sunny.png';
import { useState, useEffect } from 'react';


export default function Weather(props){
    const [propsMetrics, setpropsMetrics] = useState(true);
    const [propsImperial, setpropsImperial] = useState(false);
    return(
        <> 
            

        <table className='weather'> 
            <tr>
                <td>
                    <img src={props.temp < 10 ? coldIcon 
                            : (props.temp > 10 && props.temp < 20) ? mildIcon
                            : (props.temp > 20 ? sunnyIcon : coldIcon)} />
                </td>
                
                <td>
                <span className='tempValue' rowSpan={2}
                style={{fontSize: "45px"}}
                > 
                                {

                                    propsMetrics ? props.temp + "°C" :
                                      ((props.temp * 9 / 5) + 32).toFixed(2)  + "°F" 
                                }            
                </span>        
                </td>
                
                <td> 
                   { 
                   <span>  
                   <> 
                        <button className='celcButton' 
                        size="lg"  
                        onClick={(e) => setpropsMetrics(true)                      
                        }
                        > °C </button>
                    
                        <button className='farhButton' size="lg"
                        onClick={(e) => setpropsMetrics(false)}
                        > °F </button>
                    </>
                    </span>
                    }
                </td>
            </tr>
        
        </table>
        </>
    );
}
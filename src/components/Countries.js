import React from 'react';
import Moment from 'react-moment';



const Countries = ({Country,TotalConfirmed, Date, TotalDeaths, TotalRecovered}) => {
  
 

return (

    <div className="200x200">
        <h2>{Country}</h2>
        <h3>As of <Moment format="MMM Do YYYY">{Date}</Moment></h3>
        <ul>
        <li>Confirmed Cases: {TotalConfirmed}</li>
        <li>Confirmed Deaths: {TotalDeaths}</li>
        <li>Confirmed Recoveries: {TotalRecovered}</li>
        </ul>
    </div>
  );
}

export default Countries;
import React from 'react';

const Countries = ({Country, TotalConfirmed, TotalDeaths, TotalRecovered}) => {
return (
    <div>
        <h2>{Country}</h2>
        <p>{TotalConfirmed}</p>
        <p>{TotalDeaths}</p>
        <p>{TotalRecovered}</p>
    </div>
  );
}

export default Countries;
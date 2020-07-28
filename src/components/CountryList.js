import React from 'react';
import Countries from './Countries';


const CountryList = ({ countries }) => {
    console.log('countriesList', countries )
    return (
     <div>
         {
          countries.map((info, i) => {
              return (
                  <Countries
                  key={i}
                  Country={info.Country}
                  Date={info.Date}
                  TotalConfirmed={info.TotalConfirmed}
                  TotalDeaths={info.TotalDeaths}
                  TotalRecovered={info.TotalRecovered}

                />  
              );
          })
         }
     </div>
    );
}
export default CountryList;
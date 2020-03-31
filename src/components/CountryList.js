import React from 'react';
import Countries from './Countries';


const CountryList = ({ countries }) => {
    return (
     <div>
         {
          countries.map((user, i) => {
              return (
                  <Countries
                  key={i}
                  name={countries[i].Country}
                  confirmed={countries[i].TotalConfirmed}
                  deaths={countries[i].TotalDeaths}
                  recovered={countries[i].TotalRecovered}
                />  
              );
          })
         }
     </div>
    );
}
export default CountryList;
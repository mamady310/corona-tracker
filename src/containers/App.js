import React, { Component } from 'react';
import CountryList from '../components/CountryList';
import SearchBox from '../components/SearchBox';

import '../containers/App.css';

class App extends Component {
constructor () {
  super ()
    this.state = {
      countries: [],
      searchfield: ''
    }
  
}

componentDidMount () {
  fetch("https://api.covid19api.com/summary")
  .then(response=> response.json())
  .then(users=> {this.setState({countries: users})
  console.log(users)
});

}  

onSearchChange = (event) => {
  this.setState({searchfield: event.target.value})
}
render () {
  const { countries, searchfield } = this.state;
  const filteredCountries = countries.filter(news =>{
    return news.Country.toLowerCase().includes
    (searchfield.toLocaleLowerCase());
  })

  return (
    <div> 
      <h1>Corona Virus Tracker</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <CountryList countries={filteredCountries}/>
   
    </div>

  )
}
}

export default App;


import React, { Component } from 'react';
import axios from 'axios';
import CountryList from '../components/CountryList';
// import SearchBox from '../components/SearchBox';

import '../containers/App.css';

class App extends Component {
constructor () {
  super ()
    this.state = {
      countries: [],
      // searchfield: '',
    }
  
}


componentDidMount () {
  axios.get('https://api.covid19api.com/summary')
    .then(res => {
      const info = res.data.Countries
      const global = res.data.Global
      this.setState({ countries: info, global })
      console.log(info)
    })
    .catch(error => console.log(error) );
}

// componentDidMount () {
//  fetch("https://api.covid19api.com/summary") 
//  .then(res => res.json())
//  .then(res => {
//    this.setState({countries: [...this.state.countries, res.Countries]})

//    console.log(res.Countries)
//  })


// //   fetch("https://api.covid19api.com/summary")
// //   .then(response => response.json())
// //   .then(users => {this.setState({countries: users})
// //   // console.log(users);

// //   let keys = Object.entries(users.Countries);
// //   console.log(keys);

// // })
// // .catch(err => {
// // 	console.log(err);
// // });

// } 


// onSearchChange = (e) => {
//   this.setState({searchfield: e.target.value})
// }
render () {
  


  return (
    <div> 
      <h1 className="tc">Corona Virus Tracker</h1>
      <CountryList countries={this.state.countries} />

   
    
   
    </div>

  )
}
}

export default App;


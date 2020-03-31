import React, { Component } from 'react';

import '../containers/App.css';

class App extends Component {
constructor () {
  super ()
    this.state = {
      countries: [],
      searchfield: '',
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
  return (
    <div> 
   
    </div>

  )
}
}

export default App


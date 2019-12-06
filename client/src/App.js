import React from 'react';
import axios from 'axios';
import Search from './components/Search';
import './App.css';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      soccerData: [],
    }
  }

  //class component fetching the data from the API
  componentDidMount(){
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        console.log(response.data)
        this.setState({
          soccerData: response.data
        })
      })
      .catch(error => console.log(error))
  }

  //displays player data thats recieved from API
  render(){return (
    <div className="container">
      <h1>Women's World Cup</h1>
      <Search soccerData={this.state.soccerData}/>
    </div>
  );
  }
}

export default App;

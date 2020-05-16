import React, { Component } from 'react';
// import Person from "../components/persons/person";
import './App.css';
import Card from "../components/card/card";
import {SearchBox} from "../components/search/search";
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }

    
  }

  componentDidMount(){

      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response =>response.json() )
      .then(users => this.setState({monsters : users}));
  }

  handleChange = (e) => {
     this.setState({searchField : e.target.value})
    
  }

  render(){

    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return(
      <div className="App">
      <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder="Monster Search"
          handleChange={ this.handleChange }     
        />
       <Card monsters = {filterMonsters} />
        
      </div>
    );
  }


}

export default App;

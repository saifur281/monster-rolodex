import React, { Component } from "react";

class Person extends Component{

    constructor(){

        super();

        this.state = {

            monstars : [

                {
                    id : "a1",
                    name : "Monstaer 01"
                },

                {
                    id : "b1",
                    name : "monster 02"
                },

                {
                    id : "c1",
                    name : "Monster 3"
                }
            ]
        }
        

       
      
    }


    componentDidMount(){

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({monstars : users}))
    }
    
    render(){

        return(

            <div>
               {
                   this.state.monstars.map(monster => <h2 key={monster.id}>{monster.name}</h2>)
               }
            </div>
        )
    }  
}

export default Person;
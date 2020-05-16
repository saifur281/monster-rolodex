import React, { Component } from "react";
import "./cardComponent.css";
class Singlecard extends Component{

    constructor(props){
        super(props);

    }

    render(){

        return(

            <div className="single-card">
                <img src={`https://robohash.org/${this.props.monsters.id}.png?set=set2&size=180x180`} />
                <h2>{this.props.monsters.name}</h2>
                <p>{this.props.monsters.email}</p>
            </div>
        );
    }
}

export default Singlecard;
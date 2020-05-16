import React, { Component } from "react";
import "./cardComponent.css";
import Singlecard from "./singleCard";


function Card(props) {
    
    return(

        <div className="card">
            {
                props.monsters.map(monster =>
                
                <Singlecard monsters={monster} />
                    
                )
            }
        </div>
    )
}

export default Card;
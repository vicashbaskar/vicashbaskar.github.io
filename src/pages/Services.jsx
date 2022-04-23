
import React from "react";
import "../css/Services.css";

 export class  Services extends React.Component{
    colorData=[
        {
            color: "red",
            value: "#f00"
        },
        {
            color: "green",
            value: "#0f0"
        },
        {
            color: "blue",
            value: "#00f"
        },
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#ff0"
        },
        {
            color: "black",
            value: "#000"
        }
    ]
    generateColorBox(data){
        return(
        <div className="colorBox">
        <span >{data.color}<span id="color" style={{background:data.color}}></span>
       </span>
        <p>{data.value}  <i className="fa fa-car" style={{color:data.value}} ></i></p>

        </div>
        )
        
    }
    displayColorBox(){
        return this.colorData.map(eachdata=>this.generateColorBox(eachdata))
    }
    render(){
        return(
            <React.Fragment>
            <h1>Services</h1>
            
            
            {this.  displayColorBox()}

            </React.Fragment>
        )
    }
}
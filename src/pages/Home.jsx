
import React from "react";
import image from '../image/006.gif';
import '../css/home.css';


 export class  Home extends React.Component{
    render(){
        return(
            <div className='react-container'>   
                
                <img src={image} alt={"REACT JS"} width={"100%"}/>
                <div className="react-js">REACT JS</div>
            </div>
        )
    }
}
import React from "react";
import {Hello} from '../components/Hello';

export class Welcome extends React.Component{
    constructor(){
        super();
        console.log('constructor')
    }
    componentDidMount(){
        console.log("hi")
    }
    componentWillUnmount(){
        console.log("hello")
    }
    render(){
        return(
            <div>
            <p>Welcome Vicash</p>
            <Hello employee={'vicash'}/>
            <Hello employee={'vimal'}/>
            </div>
        )
    }
    
}
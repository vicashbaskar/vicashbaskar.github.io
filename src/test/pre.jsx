import "./Table.css";
import  React from 'react';


export class Table extends React.Component{
generateButton(button){
        
        
        return(
        <button onClick={(button=>this.view(button))}>{button}</button>
        )

    }
    displayButton(){
        let allButton=[1,2,3,4,5,6];
        return allButton.map(eachButton=>this.generateButton(eachButton));
    }
    view(pages){
        alert(pages)
    }
    generateRow(Row){
        <tr>{Row}</tr>

    }
    displayRow(){
        let myData={ Name: 'vicash', Age: 24, Email: 'vicashbaskargmail.com' }
        let myKeys=objects.keys(myData);
        return myKeys.map(each=>{
            return this.generateRow(myData[each])
        })
    }
    render(){
        return(
            <div>
                <div>{this.displayButton()}</div>
            </div>
        )
    }
    
}
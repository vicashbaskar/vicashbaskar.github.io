import React from "react";
import '../css/EmployeeDetail.css';
import person from '../image/person.jpg';
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class EmployeeDetail extends React.Component {
    generateEmployeeId(data) {
        return (
            <div className='list'>
                <div className="card1">
                    <img src={person} width={'200px'} height={'150px'} className='person-image' />
                    <p>{this.props.Employee.Name}</p>
                    <Link className="employeelist-link" to='/EmployeeList' >Back</Link>
                </div>
                <div>
                    <h3 className='Title'>EMPLOYEE DETAILS</h3>
                </div>
            </div>
        )
    }
    displayEmployeeId() {
        return this.generateEmployeeId()
    }
    // backToList(){
    //     this.props.dispatch
    // }
    // Employee = {
    //     "Name": "Aurora",
    //     "Age": 53,
    //     "Email": "ante.blandit@disparturient.ca",
    //     "Street": "493 Iaculis Rd.",
    //     "City": "Lewiston",
    //     "Zip": "42591-180",
    //     "Region": "Maine",
    //     "Country": "Sudan",
    //     "Info": "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia",
    //     "EmployeeID": 101,
    //     "DateOfJoining": "10/06/2019",
    //     "PhoneNumber": "1628101902299"
    // }
    generateRow(data) {
        return (<tr className="info-Table tr" key={'Row' + data}>{data}</tr>)
    }
    displayRow() {
        let heading = Object.keys(this.props.Employee)
        let diplayEachRow = heading.map(eachKey => this.generateData(eachKey));
        return this.generateRow(diplayEachRow);
    }
    // generateHeader(data) {
    //     return (
    //         <td className="table-th" key={'head' + data}>{data}</td>
    //     )
    // }
    // displayHeader() {
    //     let headers = Object.keys(this.props.Employee);
    //     let displayheaders = headers.map(eachhead => this.generateHeader(eachhead));
    //     return displayheaders;
    // }
    generateData(data) {
        return (
            <div>
                <th className="info-Table th" key={'head' + data}>{data}</th>
                <td className="info-Table td" key={'data' + data}>{this.props.Employee[data]}</td>
            </div>
        )
    }
    displayData(data) {
        let data1 = this.displayRow(data);
        return data1;
    }

    render() {
        return (
            <div className='list'>
                {this.displayEmployeeId()}
                <div className='info-Table'>
                    <table className="info-Table table">
                        <tbody >{this.displayData()}</tbody>
                    </table>
                </div>
                <div className="space"></div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        Employee: state.employee.Employee
    };
}
export default connect(mapStateToProps)(EmployeeDetail)
// export default EmployeeDetail


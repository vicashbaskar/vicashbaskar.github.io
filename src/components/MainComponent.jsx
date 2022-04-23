import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { Singin } from "../pages/Singin";
import { Login } from "../pages/Login";
import { Pagination, } from "../pages/Pagination";
import { Welcome } from "../pages/Welcome";
import  EmployeeDetail  from "../pages/EmployeeDetail";
import  EmployeeList  from "../pages/EmployeeList";
import  Counter  from "../pages/Counter";
import { Samp } from '../test/Samp';
// import {Th} from "../pages/Th";


export class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/EmployeeList" element={<EmployeeList />} />
                    <Route path="/EmployeeDetail" element={<EmployeeDetail />} />
                    <Route path="/Pagination" element={<Pagination />} />
                    <Route path="/Singin" element={<Singin />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/About" element={<About />} /> 
                    <Route path="/Services" element={<Services />} />
                    <Route path="/Welcome" element={<Welcome />} />
                    {/* <Route path="/Th" element={<Th />} /> */}
                    <Route path="/Counter" element={<Counter/>} />
                    <Route path="/Samp" element={<Samp/>} /> 
                </Routes>
            </div>
        )
    }
}
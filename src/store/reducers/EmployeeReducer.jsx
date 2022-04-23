import { getEmployee, setEmployee } from '../action/EmployeeAction';

const initialstate = {
    Employee: {
        "Name": "Aurora",
        "Age": 53,
        "Email": "ante.blandit@disparturient.ca",
        "Street": "493 Iaculis Rd.",
        "City": "Lewiston",
        "Zip": "42591-180",
        "Region": "Maine",
        "Country": "Sudan",
        "Info": "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia",
        "EmployeeID": 101,
        "DateOfJoining": "10/06/2019",
        "PhoneNumber": "1628101902299"
    }

}
export function EmployeeReducer(state = initialstate, action) {
    console.log(action)
    switch (action.type) {
        case getEmployee:
            return state;
        case setEmployee:
            return {
                Employee: action.payload
            }
        default:
            return state;
    }

}
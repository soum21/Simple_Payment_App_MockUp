import { userData } from '../../../variable.js';
import moment from 'moment';
export const testAction = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'GET_TOPICS' })
    }
}

export const loginAction = (username, password) => {
    return (dispatch, getState) => {
        let user = userData.find(user => { return user.username.toLocaleLowerCase() === username.toLocaleLowerCase() && user.password === password });
        if(user !== undefined){
            dispatch({
                type:"GET_USER",
                payload:user
            })
        }
        else{
            dispatch({
                type:'AUTH_FAIL',
                payload:'Authentication Failed'
            })
        }
    }
}

export const getDate = () => {
    var dateTime = new Date();
    let year = moment(dateTime).format("YYYY");
    let month = moment(dateTime).format("MMMM");
    let date = moment(dateTime).format("DD");
    let time = moment(dateTime).format("hh:mm A")
    let day = dateTime.getDay();

    function switchDay(day) {
        switch (day) {
            case 0:
                return "Sunday"
            case 1:
                return "Monday"
            case 2:
                return "Tuesday"
            case 3:
                return "Wednesday"
            case 4:
                return "Thursday"
            case 5:
                return "Friday"
            case 6:
                return "Saturday"
            default: 
                return "Error"    
        }
    }
    var dayOfWeek = switchDay(day)
    var dateData = {
        dayOfWeek,
        date,
        month,
        year,
        time
    }
    return (dispatch, getState) => {
        dispatch({
            type: 'CURRENT_DATE',
            payload: dateData
        })
    }
}
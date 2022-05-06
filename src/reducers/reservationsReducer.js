import { GET_HOURS, GET_RESERVATIONS } from "../Types";

const initialState = {
    hours: [],
    reservations: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_HOURS:
            return {
                ...state,
                hours: action.payload
            }
        case GET_RESERVATIONS: 
            return {
                ...state,
                reservations: action.payload
            }
        default: 
            return state;
    }
}
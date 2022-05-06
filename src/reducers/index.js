import { combineReducers } from "redux";
import alertReducer from './alertReducers';
import reservationsReducer from "./reservationsReducer";

export default combineReducers({
    alert: alertReducer,
    reservation: reservationsReducer
});
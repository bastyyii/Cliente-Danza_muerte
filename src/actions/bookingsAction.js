import clientAxios from '../clientAxios.js/config';
import { viewAlert } from './alertAction';
import { GET_HOURS, GET_RESERVATIONS } from '../Types';

export function getReservations(month, day, year){
    return async (dispatch) => {
        try {
            const get = await clientAxios.get(`/api/appointment/${month}/${day}/${year}`);
            dispatch(successGettingHours(get.data.hours));
            dispatch(successGettingReservations(get.data.reservationsPerDay));
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
        }
    }
}

const successGettingHours = hours => ({
    type : GET_HOURS,
    payload: hours
});
const successGettingReservations = reservations => ({
    type : GET_RESERVATIONS,
    payload: reservations
});

export function createReservations(month, day, year, data){
    return async (dispatch) => {
        try {
            const get = await clientAxios.post(`/api/appointment/create/${month}/${day}/${year}`, data);
            dispatch(successGettingReservations(get.data.reserv));
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
        }
    }
}

import React, { useState } from 'react';
import {DatePicker} from '@material-ui/pickers';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations, createReservations } from '../actions/bookingsAction';
import { viewAlert, hideAlert } from '../actions/alertAction';

const Calendar = () => {
    const dispatch = useDispatch();

    const alert = useSelector(state => state.alert.alert);
    const hours = useSelector(state => state.reservation.hours);

    const [dateStart, setNewDate] = useState(new Date());
    
    const [hourSelect, setNewHour] = useState({
        firstName: '',
        lastName: '',
        email: '',
        bookingHours: undefined
    });

    const { firstName, lastName, email, bookingHours } = hourSelect;

    const actualDate = new Date();

    const [month, day, year] = [dateStart.getMonth(), dateStart.getDate(), dateStart.getFullYear()];
    const [Actualmonth, Actualday, actualHour] = [actualDate.getMonth(), actualDate.getDay(), actualDate.getHours()];
    
    const searchHoures = () => {
        if(year < 2022 || month < Actualmonth){
            const alert = {
                msg: 'Lo siento, la muerte es muy estricta, la fecha debe ser posterior al dia de hoy',
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
            return;
        }
        dispatch(getReservations(month, day, year));
        dispatch(hideAlert());
    }

    const handleChange = e => {
        setNewHour({
            ...hourSelect,
            [e.target.name] : e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || bookingHours === undefined){
            const alert = {
                msg: 'Debe completar todos los campos',
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
            return;
        }
        if(actualHour < bookingHours.trim()){
            const alert = {
                msg: 'La hora debe ser posterior a la hora actual del dia',
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
            return;
        }
        dispatch(createReservations(month, day, year, hourSelect));
        dispatch(hideAlert());
        setNewHour({
            firstName: '',
            lastName: '',
            email: '',
            bookingHours: 'undefined'
        });
        dispatch(getReservations(month, day, year));
    }
    
    return ( 
        <div className='cont-calendario'>
            <h2>Calendario de reservas</h2>
            <form
                onSubmit={handleSubmit}
            >
                {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
                <label>Fecha:</label>   
                <DatePicker className='datePicker' value={dateStart} onChange={setNewDate}/>                 
                <input
                    type='button'
                    className='input-buscar'
                    value='Buscar horas disponibles'
                    onClick={searchHoures}
                />
                <br></br>
                {
                    hours.length === 0 ? <p className='alerta-error'></p>
                    :
                    <div className='horario-reservas'>
                        <div className='campo-form'>
                            <label>Horas disponibles: </label>
                            <select className='select-horas'
                                    name='bookingHours'
                                    id='bookingHours'
                                    value={bookingHours}
                                    onChange={handleChange}
                            >
                                <option id='undefined' value='undefined'>Elija: </option> 
                                {hours.map(element => {
                                    return <option value={element}>{element}</option>
                                })}
                            </select>
                        </div>
                        <div className='campo-form'>
                            <label>Nombre:</label>
                            <input type='text' name='firstName' id='firstName' value={firstName} onChange={handleChange}/>
                            </div>
                        <div className='campo-form'>
                            <label className='apellido'>Apellido: </label>
                            <input type='text' name='lastName' id='lastName' value={lastName} onChange={handleChange}/>
                        </div>
                        <div className='campo-form'>
                            <label>Correo : </label>
                            <input className='input-email' type='email' name='email' id='email' value={email} onChange={handleChange}/>
                        </div>
                        <input 
                                className='input-reserva'
                                type='submit'
                                value='Reservar'
                        />
                </div>
                }
            </form>
        </div>
     );
}
 
export default Calendar;

import React, { Fragment } from 'react';

const Booking = ({element}) => {
    const { bookingMonth } = element;
    let month = parseInt(bookingMonth) + 1;
    
    return ( 
        <Fragment>
            <p>Cliente reservado: {element.firstName + ' ' + element.lastName}</p>
            <p>Fecha de reserva: {element.bookingDay + '/' + month + '/' + element.bookingYear}</p>
            <p> Horario de inicio: {element.bookingHours}</p>
        </Fragment>
    );
}
 
export default Booking;
import React from 'react';
import { useSelector } from 'react-redux';
import Booking from './Booking';

const Bookings = () => {
    const reservations = useSelector(state => state.reservation.reservations);
    return ( 
        <div className='cont-bookings'>
            <h3>Reservas del dia seleccionado</h3>
            {reservations.length === 0 ? <p>No hay reservas este dia</p>
            : <div className='div-reservacion'>
                {reservations.map(element => (
                    <div className='reserva'>
                        <Booking
                            element={element}
                        />
                    </div>
                ))}
              </div>}
        </div>
     );
}
 
export default Bookings;
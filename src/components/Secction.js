import React from 'react';
import Calendar from './Calendar';
import Bookings from './Bookings';

const Section = () => {
    return ( 
        <section className='section-body'>
            <Calendar/>
            <Bookings/>
        </section>
    );
}
 
export default Section;
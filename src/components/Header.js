import React from 'react';
import danza from '../img/danza.PNG'
const Header = () => {
    return (  
        <header className='header'>
            <div className='div-header'>
                <div className='title-header'>
                    <h3>Ven a danzar con la muerte</h3>
                </div>
                <img src={danza}/>
            </div>
        </header>
    );
}
 
export default Header;
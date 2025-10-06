import React from 'react';
import './NavInshorts.css';
import HamburtgerDrawer from './HamburtgerDrawer';

const NavInshorts = (setCategory) => {
    return (
        <div className='nav'>
            <div className='icon'>
                <HamburtgerDrawer setCategory={setCategory}/>
            </div>
            <img
                style={{cursor: "pointer", }}
                src='./images/inshorts-logo.png'
                alt='Inshort Logo'
                height="80%"
            />
        </div>
    )
}

export default NavInshorts
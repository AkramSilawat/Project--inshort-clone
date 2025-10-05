import React from 'react';
import './NavInshorts.css';
import HamburtgerDrawer from './HamburtgerDrawer';

const NavInshorts = () => {
    return (
        <div className='nav'>
            <div className='icon'>
                <HamburtgerDrawer />
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
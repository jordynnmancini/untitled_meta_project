import React from 'react'; 
import { Link } from 'react-router-dom';

export default function Menu({ navOpen, toggleNav }) {
    return (
        <div className={'menu' + (navOpen && 'active')}>
            <ul>
                <li onClick={toggleNav}>
                    <Link to='/'>Home</Link>
                </li>
                <li onClick={toggleNav}>
                    <Link to='/profile'>Profile</Link>
                </li>
            </ul>
        </div>
    );
};
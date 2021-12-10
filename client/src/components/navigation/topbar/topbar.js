import React from 'react';
import { Link } from 'react-router-dom';

export default function Topbar({ navOpen, toggleNav }) {
    return (
        <div className={'topbar' + (navOpen && 'active')}>
            <div className="wrapper">
                <div className='left'>
                    <Link to='/'>
                    insert logo that links back to home page
                    </Link>
                </div>
                {/* <div className='right'>
                    <div className='hamburger' onClick={toggleNav}>
                        <span className="line1">feed</span>
                        <span className="line2">explore</span>
                        <span className="line3">my stuff</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
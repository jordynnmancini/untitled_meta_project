import React from "react";
import Topbar from '../topbar/topbar';
import Menu from '../menu/menu'; 

export default function Navigation({ navOpen, toggleNav }) {
    return (
        <div>
            <Topbar navOpen={navOpen} toggleNav={toggleNav} />
            <Menu navOpen={navOpen} toggleNav={toggleNav} />
        </div>
    );
}
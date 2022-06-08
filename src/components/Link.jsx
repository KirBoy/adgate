import React from 'react';
import {NavLink} from "react-router-dom";

const Link = ({path, name}) => {
    return (
        <NavLink  className='navigation__link' to={path}>
            {name}
        </NavLink>
    );
};

export default Link;
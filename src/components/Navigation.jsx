import React from 'react';
import {Outlet} from "react-router";
import Link from "./Link";

const Navigation = () => {
    return (
        <div className='container'>
            <nav className='navigation'>
                <Link name='Главная' path='/'/>
                <Link name='Новости' path='/news'/>
                <Link name='Профиль' path='/profile'/>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Navigation;
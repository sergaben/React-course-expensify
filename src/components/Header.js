import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Go Create</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Go edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">Go help</NavLink>
    </header>
);

export default Header;

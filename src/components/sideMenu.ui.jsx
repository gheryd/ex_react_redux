import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const SideMenuUI = ({location, match}) => {
    console.log("match", match);
    return (
    <div className="list-group">
        <div>{location.pathname}</div>
        <NavLink
            exact
            to="/"
            activeClassName='active'
            className="list-group-item list-group-item-action"
        >Products</NavLink>
        <NavLink
            exact
            to="/product/new"
            activeClassName='active'
            className="list-group-item list-group-item-action"
        >New</NavLink>
        {
        match.path.indexOf("/product/edit")===0 ? 
        <div className="list-group-item list-group-item-action active">Edit</div>
        : null
        }
    </div> 
    );
}
 
export default withRouter(SideMenuUI);
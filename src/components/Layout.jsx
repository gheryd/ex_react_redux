import React from 'react';
import SideMenu from './sideMenu';

const Layout = ({children}) => {
    return <div className="row">  
        <div className="col-4">
        <SideMenu />
        </div>
        <div className="col">
            {children}
        </div>
    </div>

}

export default Layout;
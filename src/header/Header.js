import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-2 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">My GT Sport</a>
            </nav>
        );
    }
}
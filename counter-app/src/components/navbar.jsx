import React from 'react'

const NavBar = (props) => {
    return (
        <nav className="navbar bg-light">
            <a href="#" className="navbar-brand">
                Navbar{' '}
                <span className="badge badge-pill bg-secondary">
                    {props.totalCounters}
                </span>
            </a>
        </nav>
    )
}

export default NavBar

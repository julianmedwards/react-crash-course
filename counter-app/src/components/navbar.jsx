import React from 'react'

const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar bg-light">
            <a href="#" className="navbar-brand">
                Navbar{' '}
                <span className="badge badge-pill bg-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    )
}

export default NavBar

import React from 'react'
import logo from "../../assets/Logo/logo.svg"

function Header() {
    return (
        <div className="navbar bg-base-300">
            <button className="btn btn-ghost text-xl">
                <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                <span>The Sapphire Retreat's</span>
            </button>
        </div>
    )
}

export default Header

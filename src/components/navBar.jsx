import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../assets/images/logo.svg';


const Navbar = () => {

    return (<nav className='nav-bar'>
        <div>
            <div className='logo'>
                <img src={Logo}/>
            </div>
            <div className='menu-list-nav'>

                <ul className="nav-links">

                    <Link className="link-font" to="#">
                        <li>
                            <h3>Featurers</h3>
                        </li>
                    </Link>

                    <Link className="link-font" to="#">
                        <li><h3>Pricing</h3></li>
                    </Link>

                    <Link className="link-font" to="#">
                        <li><h3>Resources</h3></li>
                    </Link>


                </ul>
            </div>
            {/*<div className='nav-mid'></div>*/}
            <div className="nav-buttons">
                <Link className="link-font" to="#">
                    <h3>Login</h3>
                </Link>
                <Link to="#">
                    <button>Sign up</button>
                </Link>
            </div>

        </div>
    </nav>)
}

export default Navbar;
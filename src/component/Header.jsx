import React from 'react'
import logo from "../assets/plannepal.gif"
import { Link } from "react-router-dom";
function Header() {
    return (
        <header >
            <div className="top-header">
                <div className="container text-light">
                    <div className="row gy-4 align-items-center">
                        <div className="col-lg-2">
                        <Link to="/" className='logo'>
                        <img src={logo} alt="" /> 
                        </Link>
                        </div>
                        <div className="col-lg-3">
                            <marquee>Agency for Tour & Trekking in Nepal
                            </marquee>
                        </div>
                        <div className="col-lg-3 social-media-links">
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-youtube"></i></a>
                            <a href=""><i class="bi bi-twitter"></i></a>
                        </div>
                        <div className="col-lg-4 contact-info">
                            <ul>
                                <li><i class="bi bi-telephone-fill"></i> <a href=""> +977-1-4435300 </a></li>
                                <li><i class="bi bi-envelope-fill"></i> <a href="">  info@plannepal.com </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div className="container">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li> <Link to="/about">About Us</Link></li>
                        <li><a href="">Nepal</a></li>
                        <li><a href="">Tibet</a></li>
                        <li><a href="">Bhutan</a></li>
                        <li><a href="">Multi Country</a></li>
                        <li><a href="">Heli Tour</a></li>
                        <li><a href="">Day Tours</a></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Header

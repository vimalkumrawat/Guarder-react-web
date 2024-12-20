import React from 'react'
import { Link } from "react-router-dom";


export default function Header
    () {
    return (
        <>
            <header class="header_section ">
                <div class="header_top">
                    <div class="container-fluid">
                        <div class="contact_link-container">
                            <a href="" class="contact_link1">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <span>
                                    Annaporna road Indore
                                </span>
                            </a>
                            <a href="" class="contact_link2">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                <span>
                                    Call : +91 9993640149
                                </span>
                            </a>
                            <a href="" class="contact_link3">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <span>
                                    info@gmail.com
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="header_bottom">
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-lg custom_nav-container">
                            <Link class="navbar-brand" to="/">
                                <span>
                                    Guarder
                                </span>
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class=""></span>
                            </button>

                            <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                                <ul class="navbar-nav  ">
                                    <li class="nav-item active">
                                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/about"> About</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/services"> Services </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/guards"> Guards </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/contact">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            {/* <!-- end header section --> */}
        </>
    )
}

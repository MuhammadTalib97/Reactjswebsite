import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.gif"

const About = () => {
    return (
        <>
        <section id="header">
        <div className="container-fluid nav-bg">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-3 mt-5 pt-lg-0 order-2 order-lg-1">
            <h1> Welcome to About Page <strong className="brand-name">Muhammad Talib</strong></h1>
<p className="my-3">We are the team of talented developer making websites</p>
<div className="mt-3">
    <button className="btn-get-started">
    <NavLink to="/contact" >Contact Now</NavLink>
    </button>
</div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animated" alt="img"/>
            </div>
            </div>




            </div>
</div>
</div>
        </section>
            
        </>
    )
}

export default About

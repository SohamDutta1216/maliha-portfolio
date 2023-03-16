import React from 'react';
import './Sections.scss'
import Maliha from "../../images/maliha.png"

const About = (isInView) => {
    return (
        <section id="about" >
            <div className='about'>
                <div >
                    <div className=' about__row'>
                        <div className=' about__column'>
                            <h1>ABOUT</h1>
                            <p className="about__text"> Maliha Jahangiri is a Brooklyn-based interior decorator. With her passion for both postmodern and midcentury design, Maliha creates beautiful and sustainable spaces with secondhand pieces to make interior decorating affordable. </p>
                        </div>
                        <div className='avatar-container'>
                            <img src={Maliha} className="avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
import React, { Component } from 'react';
import TextLoop from 'react-text-loop';
import './About.scss';

import Logo from '../../assets/images/logo/logo.png';

export default class About extends Component {


    render() {
        return(
            <div className='about'>
                <div className='about--container'>
                    <div className='about--left'>
                        <div className='about--image'>

                        </div>
                        <div className='about--text'>
                            <div className='about--buttons-top'>
                                <button className='btn btn-secondary'>Github</button>
                                <button className='btn btn-secondary'>Linkedin</button>
                            </div>
                            <div className='about--buttons-bottom'>
                                <button className='btn-2 btn-secondary'>Resume</button>
                            </div>
                        </div>
                    </div>
                    <div className='about--right'>
                        <h2>Nice to meet you.</h2>
                        <p>Recently  graduated from BrainStation’s full-time Web Development 
                        Diploma program in Toronto wanting to transition careers to become a 
                        junior web developer. A passion for making beautiful websites with the 
                        ability in writing clean and efficient code to help clients bring their 
                        ideas to life. With 4+ years of experience in a customer facing role 
                        that is strongly motivated to maintain customer satisfaction and contribute 
                        to company success by providing exceptional customer service that ensures 
                        client retention and positive feedback.
                        </p>
                        <h2>Knowledge Of.</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Version Control</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }



}
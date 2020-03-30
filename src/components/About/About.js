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
                            <button className='btn btn-secondary'>Github</button>
                            <button className='btn btn-secondary'>Linkedin</button>
                            <button className='btn btn-secondary'>Resume</button>
                        </div>
                    </div>
                    <div className='about--right'>
                        <h2>Nice to meet you.</h2>
                        <p>Web development is my passion and I started off as a self-taught
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
import React, { Component } from 'react';
import TextLoop from 'react-text-loop';
import './Hero.scss';

import Logo from '../../assets/images/logo/logo.png';
import iconLinkedin from '../../assets/icons/linkedin.svg';
import iconGithub from '../../assets/icons/github.svg';


export default class Hero extends Component {

    render() {
        return(
            <div className='header-container'>
            <div className='navbar'>
            <div className='navbar--container'>
            <div className='navbar--left'>
                <img className='navbar--logo' src={ Logo } alt='Millard Le Logo'/>
            </div>
            <div className='navbar--right'>
                <ul className='navbar--list'>
                    <li className='navbar--item'>About</li>
                    <li className='navbar--item'>Portfolio</li>
                    <li className='navbar--item'>Contact</li>
                </ul>
            </div>
            </div>
        </div>
            <div className='hero-container'>
            <div className='hero'>
                <div className='hero--text-container'>
                    <h2 className='hero--header-2'>Hello, I'm</h2>
                    <h1 className='hero--header-1'>Millard Le</h1>
                    <p className='hero--header-3'>&lt; Front End Developer using &nbsp;

                    <TextLoop
                    interval={2000}
                    >
                    <span className='hero--span'>HTML</span>
                    <span className='hero--span'>CSS</span>
                    <span className='hero--span'>JavaScript</span>
                    <span className='hero--span'>React</span>
                    </TextLoop>

                    &nbsp; /&gt;</p>
                    <div className='hero--btn-container'>
                        <button className='btn btn-default hero--btn'>Portfolio</button>
                        <button className='btn btn-secondary hero--btn'>Contact</button>
                    </div>
                    {/* <div className='hero--icon-container'>
                        <img src={iconLinkedin} className='hero--icon' />
                        <img src={iconGithub} className='hero--icon' />
                    </div> */}
                </div>
                <div><img className='hero--image' src={ Logo } alt='Hero Logo' /></div>
            </div>
            </div>
            </div>
        )
    }



}
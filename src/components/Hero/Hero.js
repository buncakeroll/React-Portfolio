import React, { Component } from 'react';
import TextLoop from 'react-text-loop';
import './Hero.scss';

import Logo from '../../assets/images/logo/logo.png';

export default class Hero extends Component {

    render() {
        return(
            <div className='hero-container'>
            <div className='hero'>
                <div className='hero--text-container'>
                    <h2 className='hero--header-2'>Hello, I'm</h2>
                    <h1 className='hero--header-1'>Millard Le</h1>
                    <p className='hero--header-3'>&lt;Web Developer using &nbsp;

                    <TextLoop
                    interval={2000}
                    >
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    </TextLoop>

                    &nbsp; /&gt;</p>
                    <div className='hero--btn-container'>
                        <button className='btn btn-default hero--btn'>Portfolio</button>
                        <button className='btn btn-secondary hero--btn'>Contact</button>
                    </div>
                </div>
                
            </div>
            <img className='hero--image' src={ Logo } alt='Hero Logo' />
            </div>
        )
    }



}
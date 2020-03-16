import React, { Component } from 'react';
import './NavBar.scss';
import Logo from '../../assets/images/logo/logo.png';

export default class NavBar extends Component {

    render() {
        return(
            <div className='navbar'>
                <div className='navbar--container'>
                <div className='navbar--left'>
                    <img className='navbar--logo' src={ Logo } alt='Millard Le Logo'/>
                </div>
                <div className='navbar--right'>
                    <ul className='navbar--list'>
                        <li className='navbar--item'>Home</li>
                        <li className='navbar--item'>About</li>
                        <li className='navbar--item'>Portfolio</li>
                        <li className='navbar--item'>Contact</li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }



}
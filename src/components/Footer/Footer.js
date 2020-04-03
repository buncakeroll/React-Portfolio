import React, { Component } from 'react';
import './Footer.scss'

export default class Footer extends Component {


    render() {
        return(
            <div className='footer'>
                <ul className='footer--list'>
                    <li footer='footer--item'>Home</li>
                    <li footer='footer--item'>About</li>
                    <li footer='footer--item'>Portfolio</li>
                    <li footer='footer--item'>Contact</li>
                </ul>
            </div>
        )
    }



}
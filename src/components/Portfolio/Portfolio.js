import React, { Component } from 'react';
import './Portfolio.scss';

export default class About extends Component {


    render() {
        return(
            <div className='portfolio'>
                <h2>Portfolio</h2>

                <div className='portfolio--container'>
                    <div clasName='portfolio--item'>Project 1</div>
                    <div clasName='portfolio--item'>Project 2</div>
                    <div clasName='portfolio--item'>Project 3</div>
                </div>
            </div>

        )
    }



}
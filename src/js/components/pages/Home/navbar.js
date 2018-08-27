import React from 'react';

import {Link} from 'react-router-dom'

import '../../../../assets/css/style.css';

class Navbar extends React.Component{
    render(){
        return(
            <div className={'navbar'}>
                <div className={'logo'}>Logo</div>

                <ul>
                    <li><Link to={'#'}>About</Link></li>
                    <li><Link to={'#'}>Services</Link></li>
                    <li><Link to={'#'}>Hire an Ace</Link></li>
                    <li><Link to={'#'}>Projects</Link></li>
                    <li><Link to={'#'}>Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar
import React from 'react';

import '../../../animations/skills-animation'
import '../../../animations/jquery'

import Web from './../../../../assets/img/skills/browser.png'
import Software from './../../../../assets/img/skills/1.png'
import Media from './../../../../assets/img/skills/who3.jpg'
import Network from './../../../../assets/img/skills/credit.png'
import Infosec from './../../../../assets/img/skills/security2.jpg'
import Pentest from './../../../../assets/img/skills/trojan.jpg'



class Skills extends React.Component{
    render(){
        return(
            <div className={'skills-container'}>
                    <li><img src={Web} alt="Web-Development"/></li>
                    <li><img src={Software} alt="Software-Development"/></li>
                    <li><img src={Media} alt="Social-Media-Marketing"/></li>
                    <li><img src={Network} alt="Computer-Networking"/></li>
                    <li><img src={Infosec} alt="Information-Security-Consulting"/></li>
                    <li><img src={Pentest} alt="Penetration-Testing"/></li>
            </div>
        )
    }
}

export default Skills
import React from 'react';

import Navbar from './Home/navbar';
import Slider from './Home/slider';
import Footer from './Home/footer'

import Cas from '../../../assets/img/castles.jpg'
import Skills from "./Home/skills";
import Who from "./Home/who";
import Partners from "./Home/partners";

class Index extends React.Component{
    render(){
        return(
            <div className={'container'}>
               <div className={'home-container'}>
                   <img className={'home-background'} src={Cas} alt="background-castles"/>
                   <div className={'home-background-cover'}> </div>
                   <Navbar/>
                   <Slider/>
               </div>
               <Who/>
               <Skills/>
                <Partners/>
               <Footer/>
            </div>
        )
    }
}


export default Index
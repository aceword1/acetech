import React from 'react';


import Centrica from './../../../../assets/img/centrica.jpeg'
import Gsk from './../../../../assets/img/gsk-1.png'
import Prudential from './../../../../assets/img/prudential-1.png'
import Uess from './../../../../assets/img/uess.png'
import Whitbread from './../../../../assets/img/whitbread-1.jpg'

class Partners extends React.Component{
    render(){
        return(
            <div className={'partners-container'}>
                <div className={'partners-text-container'}>
                    <h1 className={'partners-header'}>Partners</h1>
                    <p className={'partners-text'}>From Design to Security, our <b>&nbsp;Partners&nbsp;</b> can testify of the swift deliveries and new-age technical abilities that characterize our half-a-decade long partnership.</p>
                </div>
                <div className={'p-container'}>
                    <div className={'partners p1'}>
                        <img className={'partners-pic'} src={Centrica} alt="Star-Strategos"/>
                        </div>
                    <div className={'partners p2'}>
                        <img className={'partners-pic'} src={Gsk} alt="IIHT"/>
                        </div>
                    <div className={'partners p3'}>
                        <img className={'partners-pic'} src={Prudential} alt="ICT-CDS"/>
                        </div>
                    <div className={'partners p4'}>
                        <img className={'partners-pic'} src={Uess} alt="AUO"/>
                        </div>
                    <div className={'partners p5'}>
                        <img className={'partners-pic'} src={Whitbread} alt="BlogTek"/>
                        </div>
                </div>

            </div>
        )
    }
}

export default Partners
import React from 'react';

import {Link} from 'react-router-dom'


class Footer extends React.Component{
    render(){
        return(
            <div className={'footer-container'}>
                    <h3 className={'newsletter-title'}>Stay Updated</h3>
                    <p className={'newsletter-content'}>
                        Want the best insight, stories, and publications from top developers in the industry? Subscribe to our Monthly Newsletter!
                    </p>

                    <div className={'form-group'}>
                        <div className={'form-container'}>
                            <span>Logo</span>
                            <input type="email" placeholder={'Enter your email address'}/>
                        </div>
                        <button className={'subscribe'}>Subscribe</button>
                    </div>
                    <div className={'hr'}></div>

                    <div className={'footer-links'}>
                            <div className={'social-links'}>

                            </div>

                        <div className={'team-links'}>
                            <Link to={'#'}><p className={'tech-aces'}>Copyright &copy;Tech Aces Inc.</p></Link>

                            <Link to={'#'}><p className={'adeniji'}>Adeniji Oluwagbemiga Daniel</p></Link>
                        </div>

                    </div>
            </div>
        )
    }


}

export default Footer
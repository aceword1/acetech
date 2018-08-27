import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {AnimatedSwitch} from 'react-router-transition'

import Index from "./pages/index";

class Router extends React.Component{
    render(){
        return(
                <BrowserRouter>
                    <AnimatedSwitch
                        atEnter = {{opacity: 0}}
                        atLeave = {{opacity: 0}}
                        atActive =  {{opacity: 1}}
                    >
                        <Route exact path={'/'} component={Index} />
                    </AnimatedSwitch>
                </BrowserRouter>
        )
    }
}

export default Router
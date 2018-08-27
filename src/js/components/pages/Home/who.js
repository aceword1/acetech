import React from 'react'

class Who extends React.Component{
    render(){
        return(
            <div className={'who-container'}>
                <h1 className={'who-title'}>Who we Are</h1>

                <div className={'who-text'}>
                    <p>At Star Strategos, we understand the specific challenges posed to Energy Suppliers as the roll-out process gets underway.</p>
                    <p>Our consultants are industry-certified experts and can help your organization achieve ISO 27001 compliance as well as effectively prepare for both the Foundation & Enduring Smart Metering Audits by the Competent Independent Organisation (CIO).</p>
                    <p>This we do by reviewing and assessing your security designs, controls, policies, procedures ahead of your audit.</p>
                </div>

                <h1 className={'who-title'}>What we do</h1>
                <div className={'who-text'}>
                    <p>One of the aims of the Smart Meter roll-out which commenced in 2015 is to improve operational efficiency by bringing an end to estimated billing. This ongoing program, however,  introduces with it a new risk with respect to the security and privacy of users’ personally identifiable information.</p>
                    <p>Our consultants are industry-certified experts and can help your organization achieve ISO 27001 compliance as well as effectively prepare for both the Foundation & Enduring Smart Metering Audits by the Competent Independent Organisation (CIO).</p>
                </div>
            </div>

        )

    }
}

export default Who
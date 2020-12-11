
import React from 'react'
import DayMonth from './DayMonth'

const DonationLi = ({donation}) => {

    

    return (
        <div id="list-item-dn">
            <div className="li-left">
                <h5>{donation.abracoins}</h5>
                <p>Abracoins</p>
            </div>
            <div className="li-middle">
                <h5><DayMonth day={donation.createdat} /></h5>
            </div>
            <div className="li-right">
                <h5>R$ {donation.value}</h5>
            </div>
            
    </div>
    )
}

export default DonationLi

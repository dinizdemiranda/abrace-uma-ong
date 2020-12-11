import React from 'react'
import './css/donations.css'
import DonationLi from './components/DonationLi'


const Donations = ({limit}) => {
    const [donations, setDonations] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);


    React.useEffect(() => {
         async function fetchProfile(url) {
           try {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setDonations(json);
           } catch (erro) {
                setError('Um erro occorreu')
           } finally {
               setLoading(false)
           }
         }
         fetchProfile('../database/donations.json')
        }, []);


        if(loading) return <div>Carregando...</div>
        if(donations === null) return null
        if(error) return <p>{error}</p>
    return (
        <>
        <div id="receipts">
            <div className="panel-list-title">
                <h4>Histórico</h4>
                <button class="panel-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                    </svg>
                    Obter Abracoins
                </button>    
                
            </div>            
            <div id="receipts-board">

            {donations.slice(0, limit || 10).map((donation) => (
                <DonationLi donation={donation} />
            ))}

            </div>
        </div>
        </>
    )
}

export default Donations

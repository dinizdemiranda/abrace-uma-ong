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
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                    <span>Doar</span>
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

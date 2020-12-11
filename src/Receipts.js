import React from 'react'
import './css/receipts.css'
import ReceiptLi from './components/ReceiptLi'
import Loading from './components/Loading'

const Receipts = ({limit}) => {
    const [receipts, setReceipts] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);


    React.useEffect(() => {
         async function fetchProfile(url) {
           try {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setReceipts(json);
           } catch (erro) {
                setError('Um erro occorreu')
           } finally {
               setLoading(false)
           }
         }
         fetchProfile('../database/notas.json')
        }, []);


        if(loading) return <div><Loading /></div>
        if(receipts === null) return null
        if(error) return <p>{error}</p>
    return (
        <>
        <div id="receipts">
            <div className="panel-list-title">
                <h4>Notas doadas</h4>
                <div>
                <button class="panel-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                            </svg>
                            <span>Nova nota</span>
                </button>    
                </div>
            </div>            
            <div id="receipts-board">

            {receipts.slice(0, limit || 10).map((receipt) => (
                <ReceiptLi receipt={receipt} />
            ))}

            </div>
        </div>
        </>
    )
}

export default Receipts

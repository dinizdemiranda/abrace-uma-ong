import React from 'react'
import { useParams } from 'react-router-dom'
import InsideHeader from './InsideHeader'
import './css/ong.css'

const Ong = () => {
    const [ongs, setOngs] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const { id } = useParams();


    React.useEffect(() => {
         async function fetchOng(url) {
           try {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            const filtrado = json.filter(it => it.id.includes(id));
            setOngs(filtrado[0]);
           } catch (erro) {
                setError('Um erro occorreu')
           } finally {
               setLoading(false)
           }
         }
         fetchOng('../database/ongs.json')
        }, [id]);

        if(loading) return <div>Carregando...</div>
        if(ongs === null) return null
        if(error) return <p>{error}</p>
    return (

        <>
        <InsideHeader title={ongs.name} />
        <div id="ong-detail">

        
            
            <img src={ongs.photo} alt="" srcset=""/>

            <div id="ong-body">
                <div id="ong-header">
                    <div>
                        <h3 id="ong-name">{ongs.name}</h3>
                        <div id="score">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" style={{display: "block"}} >
                                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                            </svg>
                            <span>
                                {ongs.score}
                            </span>
                        </div>     
                    </div>
                    <img src={ongs.logo} id="logo" alt="" srcset=""/>
                    
                </div>
                <p>{ongs.description}</p>
                <div id="ong-location">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p id="location">Atua em {ongs.location}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Ong

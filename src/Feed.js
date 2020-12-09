
import React from 'react';
import './css/feed.css';
import { Link } from 'react-router-dom'

const Feed = () => {

    const [ongs, setOngs] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);


    React.useEffect(() => {
         async function fetchOngs(url) {
           try {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setOngs(json);
           } catch (erro) {
                setError('Um erro occorreu')
           } finally {
               setLoading(false)
           }
         }
         fetchOngs('./database/ongs.json')
        }, []);


    
        if(loading) return <div>Carregando...</div>
        if(ongs === null) return null
        if(error) return <p>{error}</p>
    return (
        <>
        <div id="feed-header">
                <div>
                    <p>{ongs.length} projetos recentes</p>
                    <h2>Últimos projetos</h2>
                </div>
            
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 18c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm-14-3c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3h-14zm19 3c0 2.761-2.239 5-5 5h-14c-2.761 0-5-2.239-5-5s2.239-5 5-5h14c2.761 0 5 2.239 5 5zm0-12c0 2.761-2.239 5-5 5h-14c-2.761 0-5-2.239-5-5s2.239-5 5-5h14c2.761 0 5 2.239 5 5zm-15 0c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2z"/>
                </svg>
            </button>
        </div>
        
        
        <div id="feed" className="grid">
            { ongs && (ongs.map((ong)=> (
               <div className="grid-item">
                   <Link to={'ong/'+ong.id}>
                   <img src={ong.photo} alt="" />
                   </Link>
                   
                   <div className="info">
                       <div>
                            <h3>{ong.name}</h3>
                        </div>
                        <div id="subinfo">
                            <p>{ong.location}</p>
                            <div id="score">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                                </svg>
                                <span>
                                    {ong.score}
                                </span>
                            </div>
                        </div>
                        
                    </div>
                
                   </div>         
                  )))}
        </div>
        </>
        
    )
}

export default Feed

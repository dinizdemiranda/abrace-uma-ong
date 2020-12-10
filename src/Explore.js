import React from 'react'
import Mapa from './Mapa'
import ExploreCard from './ExploreCard'
import './css/explore.css'

const Explore = () => {
    const [ongs, setOngs] = React.useState(null);
    const [filter, setFilter] = React.useState('all');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [allOngs, setAllOngs] = React.useState(null);

    const filterAll = () => {setOngs(allOngs); setFilter('all')}
    const filterEducation = () => {setOngs(allOngs.filter(o => o.category.includes('education'))); setFilter('education')}
    const filterHealth = () => {setOngs(allOngs.filter(o => o.category.includes('health'))); setFilter('health')}
    const filterSocial = () => {setOngs(allOngs.filter(o => o.category.includes('social'))); setFilter('social')}
    


    React.useEffect(() => {
         async function fetchOngs(url) {
           try {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setAllOngs(json)
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
        <div id="explore-page">
            <div>
                <div id="explore-map">
                    <Mapa lista={ongs} />
                    {console.log(ongs[0].lgn)}
                </div>
            </div>
            <div id="explore-ongs">
                <div id="explore-filters">
                    <button onClick={filterAll} className={filter === 'all' ? 'active' : 'inactive'}>Tudo</button>
                    <button onClick={filterEducation} className={filter === 'education' || filter === 'all' ? 'active' : 'inactive'}>Educação</button>
                    <button onClick={filterHealth} className={filter === 'health' || filter === 'all' ? 'active' : 'inactive'}>Saúde</button>
                    <button onClick={filterSocial} className={filter === 'social' || filter === 'all' ? 'active' : 'inactive'}>Social</button>
                </div>
                <div id="explore-list-ongs">
                { ongs.map((ong) => (
                    <div key={ong.id}>
                    <ExploreCard ong={ong} />
                    </div>
                ))
                }
                </div>
            </div>
        </div>
    )
}

export default Explore

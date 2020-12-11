import React from 'react'
import { useParams } from 'react-router-dom'
import InsideHeader from './InsideHeader'
import './css/profile.css'
import Loading from './components/Loading'

const Profile = () => {
    const [profile, setProfile] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const { id } = useParams();


    React.useEffect(() => {
         async function fetchProfile(url) {
           try {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            const filtrado = json.filter(it => it.id.includes(id));
            setProfile(filtrado[0]);
           } catch (erro) {
                setError('Um erro occorreu')
           } finally {
               setLoading(false)
           }
         }
         fetchProfile('../database/profile.json')
        }, [id]);

        function getMes(dia) {
            const monthNames = ["jan", "fev", "mar", "abr", "mai", "jun",
             "jul", "ago", "set", "out", "nov", "dez"
                ];

             let diaFull = new Date(dia);
            return `${monthNames[diaFull.getMonth()]} ${diaFull.getFullYear()}`
        }

        if(loading) return <div><Loading /></div>
        if(profile === null) return null
        if(error) return <p>{error}</p>


    return (
        <>
        <InsideHeader title='Meu perfil' />
        <div style={{margin: "0 10px"}}>
            <div id="profile-detail">
                <div id="profile-header">
                    <div id="profile-picture" style={{backgroundImage: "url(" + profile.picture + ")"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/>
                        </svg>
                    </div>
                    <div>
                        <h2>{profile.name + ' ' + profile.lastname}</h2>
                        <span>Membro desde {getMes(profile.since)}</span>
                    </div>
                </div>
                <div id="profile-about">
                    
                    <div id="about-text">
                        <h3>Sobre</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                        </svg>
                        <p>{profile.about}</p>
                        <div className="spacer">

                        </div>
                    </div>
                    
                </div>
                <div>
                    <div id="profile-location">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p id="location">Vive em {profile.city}</p>
                        </div>
                        <div id="profile-coins">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                                <p id="location">Possui 4.597 abracoins</p>
                        </div>
                </div>
            
            </div>
            </div>
        </>
    )
}

export default Profile

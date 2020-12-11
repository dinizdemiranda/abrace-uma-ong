import React from 'react'
import { NavLink } from 'react-router-dom';
import './css/desktop-header.css'

const DesktopHeader = () => {

    const [profile, setProfile] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);


    React.useEffect(() => {
         async function fetchProfile(url) {
           try {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            const filtrado = json
            setProfile(filtrado[0]);
           } catch (erro) {
                setError('Um erro occorreu')
           } finally {
               setLoading(false)
           }
         }
         fetchProfile('../database/profile.json')
        }, []);


        if(loading) return <div>Carregando...</div>
        if(profile === null) return null
        if(error) return <p>{error}</p>


    return (
        <div id="full-header">
            <div id="desktop-header">
                <NavLink to="/" end>
                    <img src="../images/logo-abrace-thin-color.png" alt="" id="logo-header"/>
                </NavLink>
                <div id="desktop-menu">
                    <NavLink to="/explore">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <p>Explorar</p>
                    </NavLink>
                    <NavLink to="/coins"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    <p>Doações</p></NavLink>
                    <NavLink to="/profile/x0uH7Qv6r4">
                    <div style={{backgroundImage: "url(" + profile.picture + ")"}} id="header-profile-picture">
                        
                    </div>
                    </NavLink>
                </div>
            </div>
            
        </div>
    )
}

export default DesktopHeader

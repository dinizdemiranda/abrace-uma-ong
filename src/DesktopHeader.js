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
                    <img src="../images/logo-abrace-thin-color.png" alt="" srcset="" id="logo-header"/>
                </NavLink>
                <NavLink to="/profile/x0uH7Qv6r4">
                <div style={{backgroundImage: "url(" + profile.picture + ")"}} id="header-profile-picture">
                    
                </div>
                </NavLink>
            </div>
            
        </div>
    )
}

export default DesktopHeader

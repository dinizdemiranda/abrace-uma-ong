import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'





const Mapa = ({lista, zoom, latCenter, lngCenter}) => {

    
    function Map() {
        const [selectedOng, setSelectedOng] = useState(null);

        return (
            <GoogleMap
                defaultOptions={{mapTypeControl: false, fullscreenControl: false, streetViewControl: false}}
                defaultZoom={zoom || 4.5}
                defaultCenter={{lat: latCenter || -14.6143963, lng: lngCenter || -56.1118472}}
            >
                { 
                
                    lista.map( ong => (
                        <Marker
                        key={ong.id}
                        position={{lat: parseFloat(ong.lat), lng: parseFloat(ong.lng)}}
                        icon={{
                            url: "/images/location.svg"
                        }}
                        onClick={() => {
                            setSelectedOng(ong)
                        }}
                        />
                        
                    ))
                }

                {selectedOng && (
                    <InfoWindow
                    position={{lat: parseFloat(selectedOng.lat), lng: parseFloat(selectedOng.lng)}}
                    onCloseClick={() => {
                        setSelectedOng(null)
                    }}
                    >
                        <div className="card-map">
                        <h3 className="ong-name-map">{selectedOng.name}</h3>
                        <div class="card-map-score"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" style={{display: "block"}} >
                                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                            </svg>
                            <span>
                                <strong> {selectedOng.score}</strong> ({selectedOng.votes} avaliações)
                            </span>
                            </div>
                            <div class="card-map-location">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                        <p>{selectedOng.location}</p>
                </div>
                       
                        </div>
                    </InfoWindow>
                )}

                </GoogleMap>
        );
    }
    
    const WrappedMap = withScriptjs(withGoogleMap(Map));

    

    return (
        
            <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAsnK6cRrKPPHuy-D-JqNJYfl9KCjoGcW8`}
            loadingElement={<div style={{height: "100%"}} />}
            containerElement={<div style={{height: "100%"}} />}
            mapElement={<div style={{height: "100%"}} />}
            
            />
    )
}

export default Mapa

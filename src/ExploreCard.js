import React from 'react'
import CategoryTag from './CategoryTag'
import { Link } from 'react-router-dom'

const ExploreCard = ({ong}) => {
    return (
        <Link to={'../ong/'+ong.id}>
        <div className="explore-card">
            <div className="card-photo" style={{backgroundImage: "url(" + ong.photo + ")"}}>
            
                <CategoryTag category={ong.category} />
            </div>
            <div className="card-info">
                <div>
                    <p className="ong-name">{ong.name}</p>
                    <div class="explore-ong-location">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p>{ong.location}</p>
                </div> 
                    
                </div>
                
                <div className="explore-score">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" style={{display: "block"}} >
                            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                        </svg>
                        <span>
                            <strong> {ong.score}</strong> 
                        </span>
                    </div>  
            </div>
        </div>
        </Link>
    )
}

export default ExploreCard

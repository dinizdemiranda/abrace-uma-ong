import React from 'react'
import './css/category-tag.css'

const CategoryTag = ({category}) => {

    function getCategory(cat) {
        switch(cat){   
            case 'education': return "EDUCAÇÃO";
            case 'health': return "SAÚDE";
            case 'poverty': return "SOCIAL";
            case 'animal': return "ANIMAIS";
            case 'culture': return "CULTURA";
            default: return "SOCIAL";      
        }
    }

    return (
        <span className="category-tag">
            {getCategory(category)}
        </span>
    )
}

export default CategoryTag

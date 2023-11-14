import React from 'react'

const MovieCard = ({ key, Year, Poster, Type, Title }) => {
    return (
        <div className='movie'>
            <div>
                <p>{Year}</p>
            </div>

            <div>
                <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title}/>
            </div>

            <div>
                <span> {Type} </span>
                <h3> {Title} </h3>
            </div>        
        </div>
    )
}

export default MovieCard;
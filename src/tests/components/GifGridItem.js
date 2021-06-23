import React from 'react'

export const GifGridItem = ( {title, url} ) => {
    
    // console.log(title, url);
    // console.log(props);

    return (
        <div className ="card animate__animated animate__bounce animate__fadeIn">
            {/* {img.title} */}
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}

//import React, { useState, useEffect } from 'react'
import React from 'react';
import PropsTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from './helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( {category} ) => {


    const {data, loading} = useFetchGifs( category );  

//console.log(data)
//const [count, setCount] = useState(0);

/* const [images, setImages] = useState([]);


 */


//getGifs();


    return (
        <>
        <h3>{ category }</h3>
         { loading && <p>Loading</p> } 
        <div className="card-grid">
           

            {
                data.map (( img ) => (

                    <GifGridItem 
                        { ...img }
                        key = { img.id }
                    />
                ))
            }

          {/*   <ol>
                {
                    images.map( img => (
                        <li key={ img.id }>{ img.title }</li>
                    ))
                }
            </ol> */}
            {/* <h3>{ count }</h3> */}
            {/* <button onClick={ () => setCount( count +1 )}></button> */}
         </div>
        </>
    )
}

GifGrid.PropsTypes = {

    category: PropsTypes.string.isRequired
}

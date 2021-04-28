// Sniper rafc

import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

export const GifExpertApp = () => {
    
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories,setCategories] = useState(['Dragon Ball'])

   /*    const handleAdd = () =>{
         //Agregar un elemento al arreglo.
         //setCategories('[HunterXHunter]',...categories);
          setCategories( cats => [...cats, 'Hunter']);
     } */

    return (
        <div>
            <h2>GifExpertApp</h2>
            {/* Renderizando el componente: */}
            <AddCategory setCategories= { setCategories }/>
            <hr />
           {/*  <button onClick={ handleAdd }>Agregar</button> */}
            <ol> 
               {
                   categories.map( category => (
                       /* return <li key={category}>{category}</li> */
                       <GifGrid 
                          
                            category= {category}
                            key= {category}
                       />)
                   )
               }
            </ol>

        </div>
    )
}

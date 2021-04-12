
//import PropTypes from 'prop-types';

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(["One punch"])
    
    /*const handleAdd = () =>{
       // setCategories([...categories,"HunterXHunter"]);
       setCategories(cats => [...cats,"HunterXHunter"]);
    }*/

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/> 
            <hr />
           {/*<button onClick={handleAdd}>Agregar</button>*/}

            <ol>
                {
                    categories.map((category) => 
                        //no puede ser indice y debe ser unico
                        <GifGrid 
                            key = {category}
                            category = {category} 
                        />
                     //<li key={category}>{category}</li>
                    )
                }
            </ol>
        </>
    );
}


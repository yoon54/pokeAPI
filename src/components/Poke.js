import React, {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'


const Poke = () => {
    const [pokeName, setPoke]=useState([]);
    const getPoke = e =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
        .then( res => setPoke(res.data.results));
        
    }
    


        return (
            <>
            <button onClick = {getPoke} className ="btn btn-lrg btn-dark">Fetch pokemon</button>
            <ul>
            {
                pokeName.map((pokemon,i) =>
                <li className= "list-group-item list-group-item-dark" key = {i}>{pokemon.name}</li>
                )
            }
            </ul>
            </>
        );
        
}

export default Poke


import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Rickyindividual() {
  const [individual,SetIndividual] = useState([])
  const {id} = useParams()
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then((response)=>response.json())
  .then((response)=>SetIndividual(response))
       setIndividual(response)
       setI


  return (
    <div className='individualpadre'>
     <h1> <img src={individual.image} alt={individual.image}/></h1>
      <h1>ID:{individual.id}</h1>
      <p>Nombre:{individual.name}</p>
      <p>Status:{individual.status}</p>
      <p>Especie:{individual.species}</p>
      <p>Genero:{individual.gender}</p>
      <p>Url:{individual.url}</p>
      <p>Fecha de creación:{individual.created}</p>
      <button id="miBoton" ><a href='/index'>inicio</a></button>
    </div>
    
  )
}

export default Rickyindividual
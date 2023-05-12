import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router';
import axios from 'axios';

const Planet = (props) => {

    const [planetObj, setPlanetObj] = useState({})

    const {id} = useParams()

    useEffect( ()  => {
        axios.get("https://swapi.dev/api/planets/" + id)
            .then( (response) => {
                console.log(response.data)
                setPlanetObj(response.data)
            })
            .catch( (errObj) => {
                console.log(errObj)
            })
    },[id])


  return (
    <div>
        <h5>Search for: Planets</h5>
        <h3>Planet: {planetObj.name}</h3>
        <p>Climate: {planetObj.climate}</p>
        <p>Terrain: {planetObj.terrain}</p>
        <p>Population: {planetObj.population}</p>
        <p>Rotation Period: {planetObj.rotation_period} hours</p>
    </div>
  )
}

export default Planet
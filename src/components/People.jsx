import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router';
import axios from 'axios';

const People = (props) => {

    const [personObj, setPersonObj] = useState({})

    const {id} = useParams()

    useEffect( () => {
        axios.get("https://swapi.dev/api/people/" + id)
            .then( (response) => {
                console.log(response.data)
                setPersonObj(response.data)
            })
            .catch( (errObj) => {
                console.log(errObj)
            })
    },[id])

  return (
    <div>
        <h5>Search for: People</h5> 
        <h3>People: {personObj.name}</h3>
        <p>Height: {personObj.height} cm</p>
        <p>Mass: {personObj.mass} km</p>
        <p>Hair Color: {personObj.hair_color}</p>
        <p>Skin Color: {personObj.skin_color}</p>
    </div>
  )
}

export default People
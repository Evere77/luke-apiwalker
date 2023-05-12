import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Form = (props) => {

    const [id, setId] = useState(1)

    const nav = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        nav("/people/" + id)
        nav("/planets/" + id)
    }

  return (
    <div>
        <form onSubmit={submit}>
        <input type="number" onChange={ (e) => setId(e.target.value)} value={id}/>
        <button>Search</button>
        </form>
    </div>
  )
}

export default Form
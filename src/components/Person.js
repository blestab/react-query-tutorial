import React from 'react'

const Person = ({ person }) => {
return (
        <div className="card">
            <h3>{ person.name }</h3>
            <p>Height: { person.height} </p>
            <p>Hair Color: { person.hair_color} </p>
        </div>
    )
}

export default Person;
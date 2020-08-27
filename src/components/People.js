import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person'

const fetchPeople = async () => {
    const res = await fetch('https://swapi.dev/api/people');
    return res.json();
}

const People = () => {
    const { data , status } = useQuery('people', fetchPeople);
    console.log(data);
return (
    <div>
        <h2>People</h2>
        {/*<div>{status}</div>*/}

        {status === 'loading' && (<div>Loading ...</div>)}

        {status === 'error' && (<div>The was an error fetching data!</div>)}

        {status === 'success' && (
            data.results.map(person => <Person key={person.name} person={person}/>)
        )}
    </div>
)
}

export default People;
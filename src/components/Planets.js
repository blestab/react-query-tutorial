import React from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'

const fetchPlanets = async () => {
    const res = await fetch('https://swapi.dev/api/planets');
    return res.json();
}

const Planets = () => {
    const { data , status } = useQuery('planets', fetchPlanets, {
        staleTime: 5000,
        retry: 3,
    });
    console.log(data);
return (
    <div>
        <h2>Planets</h2>
        {/*<div>{status}</div>*/}

        {status === 'loading' && (<div>Loading ...</div>)}

        {status === 'error' && (<div>The was an error fetching data!</div>)}

        {status === 'success' && (
            data.results.map(planet => <Planet key={planet.name} planet={planet}/>)
        )}
    </div>
)
}

export default Planets;
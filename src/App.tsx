import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [people, setPeople] = useState<any>([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/').then(response => {
      setPeople(response.data.results);
    })
  }, []);

  return (
    <div>
      Star Wars React App
      {people.map((p: any) => <div style={{border: "1px solid black", margin: "10px"}}>
        {p.name}
        {p.height}
        {p.mass}
        {p.hair_color}
        {p.skin_color}
        {p.eye_color}
        {p.birth_year}
        {p.gender}
        {p.homeworld}
        {p.films.map((film: any) => <>{film}</>)}
        {p.species.map((specie: any) => <>{specie}</>)}
        {p.vehicles.map((vehicle: any) => <>{vehicle}</>)}
        {p.starships.map((starship: any) => <>{starship}</>)}
        {p.created}
        {p.edited}
        {p.url}
      </div>)}
    </div>
  );
}

export default App;

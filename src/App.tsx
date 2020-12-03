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
      <div className="title">Star Wars React App</div>

      <div className="people-box">
        {people.map((p: any) =>
          <div className="people" key={p.name}>
            <div className="people-attribute">
              <span>Name:</span> {p.name}
            </div>

            <div className="people-attribute">
              <span>Height:</span> {p.height}
            </div>

            <div className="people-attribute">
              <span>Mass:</span> {p.mass}
            </div>

            <div className="people-attribute">
              <span>Hair Color:</span> {p.hair_color}
            </div>

            <div className="people-attribute">
              <span>Skin Color:</span> {p.skin_color}
            </div>

            <div className="people-attribute">
              <span>Eye Color:</span> {p.eye_color}
            </div>

            <div className="people-attribute">
              <span>Birth Year:</span> {p.birth_year}
            </div>

            <div className="people-attribute">
              <span>Gender:</span> {p.gender}
            </div>

            <div className="people-attribute">
              <span>Homeworld:</span> <a href={p.homeworld}>{p.homeworld}</a>
            </div>

            <div className="people-link-list">
              <span>Films</span>
              {p.films.map((film: any) =>
                <div key={film}><a href={film}>{film}</a></div>
              )}
            </div>
            
            <div className="people-link-list">
              <span>Species</span>
              {p.species.map((specie: any) =>
                <div key={specie}><a href={specie}>{specie}</a></div>
              )}
            </div>
            
            <div className="people-link-list">
              <span>Vehicles</span>
              {p.vehicles.map((vehicle: any) =>
                <div key={vehicle}><a href={vehicle}>{vehicle}</a></div>
              )}
            </div>
            
            <div className="people-link-list">
              <span>Starships</span>
              {p.starships.map((starship: any) =>
                <div key={starship}><a href={starship}>{starship}</a></div>
              )}
            </div>

            <div className="people-attribute">
              <span>Created At:</span> {p.created}
            </div>

            <div className="people-attribute">
              <span>Edited At:</span> {p.edited}
            </div>

            <div className="people-attribute">
              <span>URL:</span> <a href={p.url}>{p.url}</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

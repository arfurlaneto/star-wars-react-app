import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import {
  FiFilm,
  FiTwitter,
  FiTruck,
  FiZap,
  FiStar,
} from 'react-icons/fi';

import './App.css';

function App() {
  const [people, setPeople] = useState<any>([]);
  const [favorites, setFavorites] = useState<any>([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/').then(response => {
      setPeople(response.data.results);
    })
  }, []);

  const addToFavorite = useCallback((newFavorite: string) => {
    if (favorites.indexOf(newFavorite) < 0) {
      setFavorites((favoritesPrevValue: string[]) => [ ...favoritesPrevValue, newFavorite ]);
    }
  }, [favorites]);

  return (
    <div>
      <div className="title">
        Star Wars React App
        {people.length === 0 && <><br />Loading...</>}
      </div>
      
      <div className="favorite-box">
        <div>
          <span>Favorites:</span>
          {favorites.join(', ')}
          {favorites.length === 0 && ' - '}
        </div>
      </div>

      <div className="people-box">
        {people.map((p: any) =>
          <div className="people" key={p.name}>
            {favorites.indexOf(p.name) < 0 &&
              <button
                className="favorite-button"
                type="button"
                onClick={() => { addToFavorite(p.name); }}
              >
                <FiStar></FiStar>
              </button>
            }

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
              <span><FiFilm /> Films</span>
              {p.films.length === 0 && <div>Nothing</div>}
              {p.films.map((film: any) =>
                <div key={film}><a href={film}>{film}</a></div>
              )}
            </div>
            
            <div className="people-link-list">
              <span><FiTwitter /> Species</span>
              {p.species.length === 0 && <div>Nothing</div>}
              {p.species.map((specie: any) =>
                <div key={specie}><a href={specie}>{specie}</a></div>
              )}
            </div>
            
            <div className="people-link-list">
              <span><FiTruck/> Vehicles</span>
              {p.vehicles.length === 0 && <div>Nothing</div>}
              {p.vehicles.map((vehicle: any) =>
                <div key={vehicle}><a href={vehicle}>{vehicle}</a></div>
              )}
            </div>
            
            <div className="people-link-list">
              <span><FiZap/> Starships</span>
              {p.starships.length === 0 && <div>Nothing</div>}
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

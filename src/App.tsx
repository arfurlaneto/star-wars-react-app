import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import PaginatedList from './components/PaginatedList';

import {
  MenuContainer,
  MenuItemText
} from './styles'

const endpoints = [
  "people",
  "films",
  "starships",
  "vehicles",
  "species",
  "planets",
]

function App() {
  return (
    <div>
      <BrowserRouter>
        <MenuContainer>
          {endpoints.map(endpoint =>
            <MenuItemText key={endpoint}>
              <Link to={endpoint}>
                {endpoint}
              </Link>
            </MenuItemText>
          )}
        </MenuContainer>

        <Switch>
          <Route key="/" path="/" exact>
            <Redirect to={`/${endpoints[0]}`} />
          </Route>
          {endpoints.map(endpoint =>
            <Route key={endpoint} path={`/${endpoint}`}>
              <PaginatedList endpoint={endpoint}></PaginatedList>
            </Route>
            )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

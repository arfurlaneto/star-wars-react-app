import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import PaginatedList from './components/PaginatedList';

import GlobalStyles from './globalStyles';

import {
  MenuContainer,
  MenuItemText
} from './styles'

function App() {
  return (
      <BrowserRouter>
        <GlobalStyles></GlobalStyles>
        
        <MenuContainer>
          <MenuItemText><Link to="people">people</Link></MenuItemText>
          <MenuItemText><Link to="films">films</Link></MenuItemText>
          <MenuItemText><Link to="starships">starships</Link></MenuItemText>
          <MenuItemText><Link to="vehicles">vehicles</Link></MenuItemText>
          <MenuItemText><Link to="species">species</Link></MenuItemText>
          <MenuItemText><Link to="planets">planets</Link></MenuItemText>
        </MenuContainer>

        <Switch>
          <Route key="/" path="/" exact>
            <Redirect to="/people" />
          </Route>
          <Route path="/people">
            <PaginatedList endpoint="people" />
            </Route>
          <Route path="/films">
            <PaginatedList endpoint="films" />
            </Route>
          <Route path="/starships">
            <PaginatedList endpoint="starships" />
            </Route>
          <Route path="/vehicles">
            <PaginatedList endpoint="vehicles" />
            </Route>
          <Route path="/species">
            <PaginatedList endpoint="species" />
            </Route>
          <Route path="/planets">
            <PaginatedList endpoint="planets" />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;

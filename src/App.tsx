import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PaginatedList from './components/PaginatedList';
import Favorites from './components/Favorites';

import GlobalStyles from './globalStyles';

import {
  MenuContainer,
  MenuItemText
} from './styles'

import theme from './theme';
import { FavoritesProvider } from './hooks/favorites';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <FavoritesProvider>
          <BrowserRouter>
            <GlobalStyles></GlobalStyles>
            
            <MenuContainer>
              <MenuItemText><NavLink to="favorites">favorites</NavLink></MenuItemText>
              <MenuItemText><NavLink to="people">people</NavLink></MenuItemText>
              <MenuItemText><NavLink to="films">films</NavLink></MenuItemText>
              <MenuItemText><NavLink to="starships">starships</NavLink></MenuItemText>
              <MenuItemText><NavLink to="vehicles">vehicles</NavLink></MenuItemText>
              <MenuItemText><NavLink to="species">species</NavLink></MenuItemText>
              <MenuItemText><NavLink to="planets">planets</NavLink></MenuItemText>
            </MenuContainer>

            <Switch>
              <Route path="/" exact>
                <Redirect to="/people" />
              </Route>
              <Route path="/favorites">
                <Favorites></Favorites>
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
              <Route path="*">
                <Redirect to="/people" />
              </Route>
            </Switch>
          </BrowserRouter>
        </FavoritesProvider>
      </ThemeProvider>
  );
}

export default App;

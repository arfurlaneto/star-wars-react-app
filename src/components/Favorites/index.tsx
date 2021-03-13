import React, {
  useState,
  useEffect,
} from 'react';

import { fetchOneFromUrl } from '../../services/api';
import { useFavorites } from '../../hooks/favorites';

import { JsonSchema } from '../../models/JsonSchema';
import { DataItem } from '../../models/DataItem';

import Card from '../Card';

import {
  PaginatedListHeader,
  TitleContainer,
  TitlePrimaryText,
  TitleSecondaryText,
  LoadingContainer,
  LoadingText,
  NoItemsContainer,
  NoItemsText,
  ItemsContainer,
} from '../PaginatedList/styles'

interface LoadedFavorite {
  item: DataItem,
  schema: JsonSchema
}

function Favorites() {
  const { favorites } = useFavorites()
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [data, setData] = useState<LoadedFavorite[]>();

  useEffect(() => {
    setLoadingData(true);

    const loadedFavoritesPromises = favorites
      .map(async favoriteUrl => {
        try {
          const response = await fetchOneFromUrl(favoriteUrl);
          return response;
        } catch {
          return undefined;
        }
      }).filter(async loadedFavoritePromise => {
        const loadedFavorite = await loadedFavoritePromise;
        return loadedFavorite
      })

    Promise.all(loadedFavoritesPromises)
      .then(loadedFavorites  => setData(loadedFavorites as LoadedFavorite[]))
      .finally(() => { setLoadingData(false); })
  }, [favorites]);

  return (
    <div>
      <PaginatedListHeader>
        <TitleContainer>
          <TitlePrimaryText>
            Favorites
          </TitlePrimaryText>
          <TitleSecondaryText>
            Your favorites within the Star Wars universe
          </TitleSecondaryText>
        </TitleContainer>
      </PaginatedListHeader>

      {loadingData && (
        <LoadingContainer>
          <LoadingText>Loading</LoadingText>
        </LoadingContainer>
      )}

      {!loadingData && data && !data.length && (
        <NoItemsContainer>
          <NoItemsText>No results</NoItemsText>
        </NoItemsContainer>
      )}

      <ItemsContainer
        options={{ itemSelector: ".component_card_container_root", fitWidth: true, gutter: 1 }}
      >
        {!loadingData && data && data.map(({item, schema}) =>
          <Card key={item.url as string} schema={schema} item={item}></Card> 
        )}
      </ItemsContainer>
    </div>
  );
}

export default Favorites;

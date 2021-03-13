import React, {
  useState,
  useEffect,
} from 'react';
import { useParams } from 'react-router';

import { fetchOneFromUrl } from '../../services/api';

import { JsonSchema } from '../../models/JsonSchema';
import { DataItem } from '../../models/DataItem';

import Card from '../Card';

import {
  LoadingContainer,
  LoadingText,
  NoItemsContainer,
  NoItemsText,
  ItemsContainer,
} from '../PaginatedList/styles'

function Favorites() {
  const { url } = useParams<{ url: string; }>();

  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [data, setData] = useState<DataItem>();
  const [schema, setSchema] = useState<JsonSchema>();

  useEffect(() => {
    setLoadingData(true);

    if (!url) {
      setData(undefined);
      setSchema(undefined);
    }

    fetchOneFromUrl(decodeURIComponent(url))
      .then(response => {
        const { item, schema } = response;
        setData(item);
        setSchema(schema);
      })
      .catch(() => {
        setData(undefined);
        setSchema(undefined);
      })
      .finally(() => {
        setLoadingData(false);
      })
  }, [url]);

  return (
    <div>
      {loadingData && (
        <LoadingContainer>
          <LoadingText>Loading</LoadingText>
        </LoadingContainer>
      )}

      {!loadingData && !data && (
        <NoItemsContainer>
          <NoItemsText>No results</NoItemsText>
        </NoItemsContainer>
      )}

      <ItemsContainer
        options={{ itemSelector: ".component_card_container_root", fitWidth: true, gutter: 1 }}
      >
        {!loadingData && data && schema && (
          <Card schema={schema} item={data}></Card> 
        )}
      </ItemsContainer>
    </div>
  );
}

export default Favorites;

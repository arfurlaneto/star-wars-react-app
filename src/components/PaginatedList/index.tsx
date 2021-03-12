import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  FormEvent,
} from 'react';
import { fetchManyFromUrl } from '../../services/api';

import { JsonSchema } from '../../models/JsonSchema';
import { PaginatedResult } from '../../models/PaginatedResult';

import Card from '../Card';

import {
  TitleContainer,
  TitlePrimaryText,
  TitleSecondaryText,
  SearchForm,
  SearchField,
  SearchButton,
  PaginationController,
  PaginationPrevButton,
  PaginationNextButton,
  LoadingContainer,
  LoadingText,
  NoItemsContainer,
  NoItemsText,
  ItemsContainer,
} from './styles'

const ITENS_PER_PAGE: number = 10;

interface PeopleProps {
  endpoint: string;
}

function PaginatedList({ endpoint  }: PeopleProps) {
  const [searchDraft, setSearchDraft] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loadingData, setLoadingData] = useState<boolean>(false);

  const [data, setData] = useState<PaginatedResult>();
  const [schema, setSchema] = useState<JsonSchema>();

  const totalPages = useMemo(() => {
    return data ? Math.ceil(data.count / ITENS_PER_PAGE) : 0;
  }, [data]);

  useEffect(() => {
    setLoadingData(true);

    fetchManyFromUrl(`https://swapi.dev/api/${endpoint}/`, page, search.trim())
      .then(response => {
        setData(response.items);
        setSchema(response.schema);
      })
      .catch(() => {
        setData(undefined);
        setSchema(undefined);
      })
      .finally(() => {
        setLoadingData(false);
      })
  }, [endpoint, page, search]);

  const goToPreviousPage = useCallback(() => {
    setPage(page => page - 1)
  }, []);

  const goToNextPage = useCallback(() => {
    setPage(page => page + 1)
  }, []);

  const applySearch = useCallback((e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1);
    setSearch(searchDraft);
  }, [searchDraft]);

  return (
    <div>
      <TitleContainer>
        <TitlePrimaryText>{schema && schema.title}</TitlePrimaryText>
        <TitleSecondaryText>{schema && schema.description}</TitleSecondaryText>
      </TitleContainer>

      <SearchForm onSubmit={applySearch}>
        <SearchField
          type="text"
          maxLength={50}
          value={searchDraft}
          onChange={e => setSearchDraft(e.target.value)}
          disabled={loadingData}
        />
        
        <SearchButton
          type="submit"
          disabled={loadingData}
        >
          Search
        </SearchButton>
      </SearchForm>

      <PaginationController>
        <PaginationPrevButton 
          type="button"
          onClick={goToPreviousPage}
          disabled={loadingData || (data && !data.previous)}
        >
            Previous
        </PaginationPrevButton>

        {data && schema && <div>Page {page} of {totalPages}</div>}

        <PaginationNextButton 
          type="button"
          onClick={goToNextPage} 
          disabled={loadingData || (data && !data.next)}
        >
            Next
        </PaginationNextButton>
      </PaginationController>

      {loadingData && (
        <LoadingContainer>
          <LoadingText>Loading</LoadingText>
        </LoadingContainer>
      )}

      {data && schema && !data.results.length && (
        <NoItemsContainer>
          <NoItemsText>No results</NoItemsText>
        </NoItemsContainer>
      )}

      <ItemsContainer>
        {!loadingData && data && schema && data.results.map((item: any) =>
          <Card key={item.url} schema={schema} item={item}></Card> 
        )}
      </ItemsContainer>
    </div>
  );
}

export default PaginatedList;

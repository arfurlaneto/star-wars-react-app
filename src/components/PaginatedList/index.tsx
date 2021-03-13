import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  FormEvent,
  useRef,
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
  PaginationPageNumberText,
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
  const [paginationParams, setPaginationParams] = useState({ page: 1, search: ''})
  const [searchDraft, setSearchDraft] = useState<string>('');
  const [loadingData, setLoadingData] = useState<boolean>(false);

  const [data, setData] = useState<PaginatedResult>();
  const [schema, setSchema] = useState<JsonSchema>();

  const totalPages = useMemo(() => {
    return data ? Math.ceil(data.count / ITENS_PER_PAGE) : 0;
  }, [data]);

  const previousEndpoint = useRef<string>('');

  useEffect(() => {
    if (endpoint !== previousEndpoint.current) {
      previousEndpoint.current = endpoint;
      setSearchDraft('');
      setPaginationParams({ page: 1, search: ''})
      return;
    }

    setLoadingData(true);

    const { page, search } = paginationParams;

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
  }, [endpoint, paginationParams]);

  const goToPreviousPage = useCallback(() => {
    setPaginationParams(({ page: p, search: s }) => ({ page: p - 1, search: s }));
  }, []);

  const goToNextPage = useCallback(() => {
    setPaginationParams(({ page: p, search: s }) => ({ page: p + 1, search: s }));
  }, []);

  const applySearch = useCallback((e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPaginationParams({ page: 1, search: searchDraft });
  }, [searchDraft]);

  return (
    <div>
      <TitleContainer>
        <TitlePrimaryText>
          {(schema && schema.title) || <div>&nbsp;</div>}
        </TitlePrimaryText>
        <TitleSecondaryText>
          {(schema && schema.description) || <div>&nbsp;</div>}
        </TitleSecondaryText>
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
          disabled={loadingData || !data || !schema || (data && !data.previous)}
        >
            Previous
        </PaginationPrevButton>

        <PaginationPageNumberText>
          {(data && schema && data.results.length > 0 &&
            <>
              Page <span>{(paginationParams.page) || <span>&nbsp;</span>}</span> of{' '}
              <span>{(totalPages) || <span>&nbsp;</span>}</span>
            </>
          )}
        </PaginationPageNumberText>

        <PaginationNextButton 
          type="button"
          onClick={goToNextPage} 
          disabled={loadingData || !data || !schema || (data && !data.next)}
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

      <ItemsContainer
        options={{ itemSelector: ".component_card_container_root", fitWidth: true }}
      >
        {!loadingData && data && schema && data.results.map((item: any) =>
          <Card key={item.url} schema={schema} item={item}></Card> 
        )}
      </ItemsContainer>
    </div>
  );
}

export default PaginatedList;

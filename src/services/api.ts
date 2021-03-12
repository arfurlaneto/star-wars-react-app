import axios from 'axios';
import { readFromOrWriteToCache} from './cache'

import { DataItem } from '../models/DataItem';
import { JsonSchema } from '../models/JsonSchema';
import { PaginatedResult } from '../models/PaginatedResult';

interface FetchOneResponse {
  item: DataItem;
  schema: JsonSchema;
}

interface FetchManyResponse {
  items: PaginatedResult;
  schema: JsonSchema;
}


export const fetchOneFromUrl = async (url: string) : Promise<FetchOneResponse> => {
  url = url.replace(/^http:/g, 'https:');
  const schemaUrl = url.replace(/\/\d+\/*$/g, '') + '/schema';

  const item = await readFromOrWriteToCache(
    url,
    async () => (await axios.get<DataItem>(url)).data
  );
  
  const schema = await readFromOrWriteToCache(
    schemaUrl,
    async () => (await axios.get<JsonSchema>(schemaUrl)).data
  );

  return { item, schema };
}

export const fetchManyFromUrl = async (
  url: string,
  page: string | number = 1,
  search: string = ''
) : Promise<FetchManyResponse> => {
  const params = new URLSearchParams({ page: page + '', search: search });

  url = url.replace(/^http:/g, 'https:').replace(/(\/\d+)*\/*$/g, '') + '/';
  const urlWithParams = `${url}?${params}`
  const schemaUrl = url + 'schema';

  const items = await readFromOrWriteToCache(
    urlWithParams,
    async () => (await axios.get<PaginatedResult>(urlWithParams)).data
  );

  const schema = await readFromOrWriteToCache(
    schemaUrl,
    async () => (await axios.get<JsonSchema>(schemaUrl)).data
  )

  return { items, schema };
}

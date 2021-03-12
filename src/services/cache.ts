const readFromCache = <T>(url: string) : T | undefined => {
  const item = localStorage.getItem(url);
  const value = item && JSON.parse(item);
  return value || undefined;
}

const writeToCache = <T>(url: string, data: T) => {
  localStorage.setItem(url, JSON.stringify(data));
}

const readFromOrWriteToCache = async <T>(url: string, dataFactory: () => Promise<T>) => {
  const data = readFromCache<T>(url);
  if (data) {
    return data;
  }
  const newData = await dataFactory();
  writeToCache(url, newData);
  return newData;
}

export { readFromCache, writeToCache,  readFromOrWriteToCache }

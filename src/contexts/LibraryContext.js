import React, {useCallback, useMemo, createContext} from 'react';
import {useQuery, queryCache} from 'react-query';

const LibraryContext = createContext();

export default LibraryContext;

const GET_BOOKS = 'GET_BOOKS';

async function fetchData() {
  const response = await fetch(
    'https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed',
  );

  const jsonAPI = await response.json();

  return jsonAPI;
}

export function LibraryContextProvider({children}) {
  const {isSuccess, isLoading, data} = useQuery(GET_BOOKS, fetchData);

  const invalidateBooksListCache = useCallback(function () {
    queryCache.invalidateQueries(GET_BOOKS);
  }, []);

  const value = useMemo(
    () => ({
      isSuccess,
      isLoading,
      data,
      invalidateBooksListCache,
    }),
    [isSuccess, isLoading, data, invalidateBooksListCache],
  );

  return (
    <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
  );
}

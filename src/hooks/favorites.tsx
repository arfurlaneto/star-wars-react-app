import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

interface FavoritesContextData {
  favorites: string[];
  isFavorite(url: string): boolean,
  addToFavorites(url: string): void,
  removeFromFavorites(url: string): void,
}

const FavoritesContext = createContext<FavoritesContextData> (
  {} as FavoritesContextData
);

const LOCAL_STORAGE_FAVORITES_KEY = 'start-wars-react-app-favorites';

const FavoritesProvider : React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const item = localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY);
    if (item) {
      setFavorites(JSON.parse(item));
    }
  }, [])

  const isFavorite = useCallback((url: string) => {
    return favorites.includes(url);
  }, [favorites]);

  const addToFavorites = useCallback((url: string) => {
    const set = new Set(favorites);
    set.add(url);
    const newFavorites = Array.from(set);
    localStorage.setItem(LOCAL_STORAGE_FAVORITES_KEY, JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  }, [favorites]);

  const removeFromFavorites = useCallback((url: string) => {
    const set = new Set(favorites);
    set.delete(url);
    const newFavorites = Array.from(set);
    localStorage.setItem(LOCAL_STORAGE_FAVORITES_KEY, JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  }, [favorites]);
  
  return (
    <FavoritesContext.Provider value={{
      favorites,
      isFavorite,
      addToFavorites,
      removeFromFavorites
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('"useFavorites" must be used within an FavoritesProvider.');
  }

  return context;
}

export { FavoritesProvider, useFavorites };

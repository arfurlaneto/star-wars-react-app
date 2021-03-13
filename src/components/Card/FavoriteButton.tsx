import React, { useMemo, useCallback } from 'react';
import { useFavorites } from '../../hooks/favorites';

import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

interface FavoriteButtonProps {
  url: string;
  size?: number;
}

const FavoriteButton : React.FC<FavoriteButtonProps> = ({ url, size = 20 }) => {
  const {
    isFavorite: hookIsFavorite,
    addToFavorites: hookAddToFavorites,
    removeFromFavorites: hookRemoveFromFavorites
  } = useFavorites();

  const isFavorite = useMemo(() => {
    return hookIsFavorite(url)
  }, [hookIsFavorite, url])

  const addToFavorites = useCallback(() => {
    hookAddToFavorites(url);
  }, [hookAddToFavorites, url]);

  const removeFromFavorites = useCallback(() => {
    hookRemoveFromFavorites(url);
  }, [hookRemoveFromFavorites, url])

  return (
    <span>
      {isFavorite ?
        <FcLike
          size={size}
          onClick={removeFromFavorites}
        />
        :
        <FcLikePlaceholder
          size={size}
          onClick={addToFavorites}
        />
      }
    </span>
  );
}

export default FavoriteButton;

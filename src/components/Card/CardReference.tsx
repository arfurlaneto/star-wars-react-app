import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchOneFromUrl } from '../../services/api';

import { DataItem } from '../../models/DataItem';

import { FieldValue } from './styles'

interface CardReferenceProps {
  url: string;
}

const CardReference: React.FC<CardReferenceProps> = ({ url }) => {
  const [item, setItem] = useState<DataItem>()

  const encodedUrl = useMemo(
    () => encodeURIComponent((item?.url || '') as string),
    [item]
  );

  const fetchData = useCallback(async (url: string) => {
    try {
      const { item } = await fetchOneFromUrl(url);
      setItem(item);
    } catch {
      setItem(undefined);
    }
  }, [])

  useEffect(() => {
    fetchData(url);
  }, [fetchData, url])

  if (!item) {
    return (
      <FieldValue>Loading</FieldValue>
    );
  }

  return (
    <FieldValue>
      <Link to={`/show/${encodedUrl}`}>
        {item.name || item.title || JSON.stringify(item)}
      </Link>
    </FieldValue>
  )
}

export default CardReference;

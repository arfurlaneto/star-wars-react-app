import React, { useCallback, useEffect, useState } from 'react';
import { fetchOneFromUrl } from '../../services/api';

import { DataItem } from '../../models/DataItem';

import { FieldValue } from './styles'

interface CardReferenceProps {
  url: string;
}

const CardReference: React.FC<CardReferenceProps> = ({ url }) => {
  const [item, setItem] = useState<DataItem>()

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
      {item.name || item.title || JSON.stringify(item)}
    </FieldValue>
  )
}

export default CardReference;

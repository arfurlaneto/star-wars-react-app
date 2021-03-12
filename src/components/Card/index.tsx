import React from 'react';

import { DataItem } from '../../models/DataItem';
import { JsonSchema } from '../../models/JsonSchema';

import CardReference from './CardReference';

import {
  CardContainer,
  FieldContainer,
  FieldLabel,
  FieldValue,
  CardReferenceListContainer,
  CardReferenceListTitle,
  CardReferenceListItem,
  CardReferenceListEmptyText,
} from './styles';

interface CardProps {
  schema: JsonSchema,
  item: DataItem
}

const Card : React.FC<CardProps> = ({ schema, item }) => {
  return <CardContainer>
    {Object.keys(item).map((key: string) => {
      const metadata = schema.properties[key];
      const value = item[key];

      if (key === 'url') {
        return <React.Fragment key={key}></React.Fragment >
      }

      if (metadata.type === 'string'  && !metadata.format && value && (value as string).startsWith("http://")) {
        const label = key.replace(/_/g, ' ');
        return(
          <FieldContainer title={metadata.description} key={key}>
            <FieldLabel>{label}</FieldLabel>
            <CardReference url={value as string} />
          </FieldContainer>
        );
      } else if (metadata.type === 'string' && !metadata.format) {
        const label = key.replace(/_/g, ' ');
        return(
          <FieldContainer title={metadata.description} key={key}>
            <FieldLabel>{label}</FieldLabel>
            <FieldValue>{value}</FieldValue>
          </FieldContainer>
        );
      } else if (metadata.type === 'string' && metadata.format === 'date-time') {
        const label = key.replace(/_/g, ' ');
        const formattedValue = new Date(value as string).toLocaleString();
        return(
          <FieldContainer title={metadata.description} key={key}>
            <FieldLabel>{label}</FieldLabel>
            <FieldValue>{formattedValue}</FieldValue>
          </FieldContainer>
        );
      } else if (metadata.type === 'array') {
        const label = key.replace(/_/g, ' ');
        return (
          <CardReferenceListContainer title={metadata.description} key={key}>
            <CardReferenceListTitle>{label}</CardReferenceListTitle>
            {(value as string[]).length === 0 && (
              <CardReferenceListItem>
                <CardReferenceListEmptyText>Empty</CardReferenceListEmptyText>
              </CardReferenceListItem>
            )}
            {(value as string[]).map(link => {
              return (
                <CardReferenceListItem key={link}>
                  <CardReference url={link} />
                </CardReferenceListItem>
              )
            })}
          </CardReferenceListContainer>
        );
      }

      return <div key={key}><strong>{key} {JSON.stringify(value)}</strong></div>
    })}
  </CardContainer>;
}

export default Card;

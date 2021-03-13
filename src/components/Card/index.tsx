import React from 'react';

import { DataItem } from '../../models/DataItem';
import { JsonSchema } from '../../models/JsonSchema';

import CardReference from './CardReference';
import GoogleLink from './GoogleLink';
import WookieepediaLink from './WookieepediaLink'

import {
  CardContainer,
  CardTitleContainer,
  CardTitleText,
  ExternalLinksContainer,
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
  return <CardContainer className="component_card_container_root">

    <CardTitleContainer>
      <CardTitleText>{item.name || item.title}</CardTitleText>

      <ExternalLinksContainer>
        <WookieepediaLink
          searchTerm={item.name as string || item.title as string}
          size={28}
        />
        <GoogleLink
          searchTerm={item.name as string || item.title as string}
          size={23}
        />
      </ExternalLinksContainer>
    </CardTitleContainer>

    {Object.keys(item).map((key: string) => {
      const metadata = schema.properties[key];
      const value = item[key];

      if (key === 'url' || key === 'name' || key === 'title') {
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
      } else if (metadata.type === 'string' && metadata.format === 'date') {
        const label = key.replace(/_/g, ' ');
        const formattedValue = new Date(value as string).toLocaleDateString();
        return(
          <FieldContainer title={metadata.description} key={key}>
            <FieldLabel>{label}</FieldLabel>
            <FieldValue>{formattedValue}</FieldValue>
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
      } else if (metadata.type === 'integer') {
        const label = key.replace(/_/g, ' ');
        return(
          <FieldContainer title={metadata.description} key={key}>
            <FieldLabel>{label}</FieldLabel>
            <FieldValue>{value}</FieldValue>
          </FieldContainer>
        );
      } else if (metadata.type === 'array') {
        const label = key.replace(/_/g, ' ');
        return (
          <CardReferenceListContainer title={metadata.description} key={key}>
            <CardReferenceListTitle>{label}</CardReferenceListTitle>
            {(value as string[]).length === 0 && (
              <CardReferenceListItem>
                <CardReferenceListEmptyText>-</CardReferenceListEmptyText>
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

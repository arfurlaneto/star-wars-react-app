import styled from 'styled-components';

export const CardContainer = styled.div`
  margin: 10px;
  width: 350px;
  border: 1px solid #ddd;
  padding: 0px 10px 10px;
`

export const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -10px;
  margin-bottom: 10px;
  padding: 5px 15px;
  background-color: #ddd;
`;

export const CardTitleText = styled.div`
  font-size: large;
`;

export const ExternalLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const FieldContainer = styled.div``

export const FieldLabel = styled.span`
  text-transform: capitalize;
  margin-right: 10px;
  font-weight: 500;

  &:after {
    content: ':'
  }
`
export const FieldValue = styled.span``

export const CardReferenceListContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
`

export const CardReferenceListTitle = styled.div`
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 5px;
`
export const CardReferenceListItem = styled.div``;

export const CardReferenceListEmptyText = styled.span`
  color: #ddd;
`;

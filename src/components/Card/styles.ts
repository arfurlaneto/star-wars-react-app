import styled from 'styled-components';
import { opacify } from 'polished';

export const CardContainer = styled.div`
  margin: 10px;
  width: 350px;
  padding: 0px 10px 10px;
  border: 1px solid ${p => p.theme.textLight};
  background-color: ${p => p.theme.backgroundLight};
  color: ${p => p.theme.textLight};
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px ${p => opacify(-0.6, p.theme.textSpecial)};
`

export const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px -10px 0px;
  margin-bottom: 10px;
  padding: 5px 15px;
  background: linear-gradient(90deg, ${p => p.theme.backgroundDark} 0%, ${p => p.theme.backgroundLight} 100%);
  color: ${p => p.theme.textDark};
  border-radius: 5px;
`;

export const CardTitleText = styled.div`
  font-size: large;
`;

export const ExternalLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & svg {
    margin-left: 5px;
  }
`;

export const FieldContainer = styled.div`
  margin-bottom: 5px;
`

export const FieldLabel = styled.span`
  text-transform: capitalize;
  margin-right: 5px;
  color: ${p => p.theme.textDark};

  &:after {
    content: ':'
  }
`
export const FieldValue = styled.span`
  line-height: 1.3;
`

export const CardReferenceListContainer = styled.div`
  border: 1px solid ${p => opacify(-0.9, p.theme.textLight)};
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
`

export const CardReferenceListTitle = styled.div`
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 5px;
  color: ${p => p.theme.textDark};
`
export const CardReferenceListItem = styled.div``;

export const CardReferenceListEmptyText = styled.span`
  color: ${p => p.theme.textLight};
`;

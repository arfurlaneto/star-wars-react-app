import styled from 'styled-components';

import Masonry from 'react-masonry-component';

export const PaginatedListHeader = styled.div`
  padding: 20px;
  color: ${p => p.theme.textLight};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TitlePrimaryText = styled.div`
  font-size: xx-large;
  font-weight: bold;
  color: ${p => p.theme.textDark};
`

export const TitleSecondaryText = styled.div`
  font-size: larger;
  font-weight: 500;
  color: ${p => p.theme.textDark};
`

export const SearchForm = styled.form`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchField = styled.input`
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border: 1px solid ${p => p.theme.textLight};
  height: 30px;
  min-width: 300px;
  background: none;
  padding-left: 5px;
  padding-right: 5px;
  color: ${p => p.theme.textLight};

  &:disabled {
    opacity: 0.2;
  }
`

export const SearchButton = styled.button`
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid${p => p.theme.textLight};
  height: 30px;
  padding-right: 10px;
  padding-left: 10px;
  background: none;
  color: ${p => p.theme.textLight};

  &:disabled {
    opacity: 0.2;
  }
`

export const PaginationController = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PaginationPrevButton = styled.button`
  margin-right: 20px;
  width: 150px;
  height: 30px;
  background: none;
  border: 1px solid ${p => p.theme.textLight};
  color: ${p => p.theme.textLight};
  
  &:disabled {
    opacity: 0.2;
  }
`

export const PaginationNextButton = styled.button`
  margin-left: 20px;
  width: 150px;
  height: 30px;
  background: none;
  border: 1px solid ${p => p.theme.textLight};
  color: ${p => p.theme.textLight};

  &:disabled {
    opacity: 0.2;
  }
`

export const PaginationPageNumberText = styled.div`
  width: 250px;
  text-align: center;
  text-transform: uppercase;
`

export const LoadingContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadingText = styled.span`
  font-size: xx-large;
  font-weight: bold;
  color: ${p => p.theme.textLight};
`

export const NoItemsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NoItemsText = styled.span`
  font-size: xx-large;
  font-weight: bold;
  color: ${p => p.theme.textLight};
`

export const ItemsContainer = styled(Masonry)`
  margin: 50px auto;
`;

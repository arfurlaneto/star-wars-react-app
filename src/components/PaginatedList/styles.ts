import styled from 'styled-components';

export const TitleContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TitlePrimaryText = styled.div`
  font-size: xx-large;
  font-weight: bold;
`

export const TitleSecondaryText = styled.div`
  font-size: larger;
  font-weight: 500;
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
  border: 1px solid #847474;
  height: 30px;
  min-width: 300px;
`

export const SearchButton = styled.button`
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid #847474;
  height: 30px;
  padding-right: 10px;
  padding-left: 10px;
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
`

export const PaginationNextButton = styled.button`
  margin-left: 20px;
  width: 150px;
  height: 30px;
`

export const PaginationPageNumberText = styled.div`
  width: 250px;
  text-align: center;
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
`

export const ItemsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;

  & > div {
    width: 300px;
    margin-bottom: 30px;
    border-radius: 10px;
  }
`

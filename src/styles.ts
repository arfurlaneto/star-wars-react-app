import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const MenuItemText = styled.span`
  padding: 10px;
  text-transform: capitalize;

  & a {
    text-decoration: none;
    font-weight: 600;
  }
`

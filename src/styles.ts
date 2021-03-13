import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${p => p.theme.backgroundLight};
  border-bottom: 1px solid ${p => p.theme.textLight};
`

export const MenuItemText = styled.span`
  padding: 10px;
  text-transform: capitalize;

  & a {
    color: ${p => p.theme.textLight};
    font-size: large;
    text-decoration: none;
    font-weight: 600;
  }

  & a.active {
    color: ${p => p.theme.textDark};
    border-bottom: 1px solid ${p => p.theme.textDark};
  }

  & a:hover {
    color: ${p => p.theme.textSpecial};
    border-bottom: 1px solid ${p => p.theme.textSpecial};
    font-weight: 700;
  }
`

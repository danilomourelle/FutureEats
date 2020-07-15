import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 100%; 
`;
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  width: 100%;
  white-space: nowrap;  
`;
export const NavList = styled.ul`
  margin: 0 -10px;
  padding: 0 10px;
  list-style: none;
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
  width: 20px;
  }
`;
export const ListItem = styled.li`
  padding: 14px 16px;
  display: block;
  color: ${(props) => (props.isSelected ? '#5cb646' : 'black')};
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
`;
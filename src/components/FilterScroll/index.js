import React from 'react';
import { NavBar, Container, NavList, ListItem, } from './style'

export default function FilterScroll(props) {
  const restaurantType = ['Hamburguer', 'Árabe', 'Asiática', 'Mexicana', 'Baiana', 'Carnes', 'Italiana', 'Sorvetes', 'Petiscos'];
  return (
    <NavBar>
      <Container>
        <NavList>
          {
            restaurantType.map((type, index) => (
              <ListItem
                key={index}
                isSelected={props.actualValue === type}
                onClick={() => props.handleClick(type)}
              >
                {type}
              </ListItem>
            ))
          }
        </NavList>
      </Container>
    </NavBar>
  );
}

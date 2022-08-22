import React from 'react';
import './CardList.css';
import Card from '../Card/Card';


function CardList(props) {
  return (
    <div data-testid="CardList-test" className="CardList">
      {props.cards &&
        props.cards.map((card) => {
          return (
            <Card
              key={card}
              onAdd={props.onAdd}
              card={card}
            />
          );
        })}
    </div>
  );
}

export default CardList;
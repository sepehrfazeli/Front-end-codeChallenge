import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card(props) {

  function addCard() {
    props.onAdd(props.card);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      console.log('afdffa');
      addCard();
    }
  }
  
  return (
    <Link to="/information" className="Card" onClick={addCard} onKeyPress={handleKeyPress}>
      <img src={props.card.flag} alt="" />
      <div className="detail">
        <h4 className="nam">{props.card.name}</h4>
        <ul>
          <li className="pop">Population: {props.card.Population}</li>
          <li className="Reg">Region: {props.card.Region}</li>
          <li className="Cap">Capital: {props.card.Capital}</li>
        </ul>
      </div>
    </Link>
  );
}

export default Card;

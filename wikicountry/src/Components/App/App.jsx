import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Results from '../Components-Homepage/Results/Results';
import Information from '../Components-DetailPage/Information/Information';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [cardName, setCardName] = useState('');

  function addCard(card) {
    setCardName(card.name);
  }
  function changeCard(card) {
    setCardName(card);
  }
  return (
    <div className="App" data-testid="App-test">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Results onAdd={addCard} />}></Route>
          <Route path="/information" element={<Information key={cardName} onborder={x => changeCard(x)} card={cardName} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

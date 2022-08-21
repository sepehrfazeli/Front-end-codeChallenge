import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Results from '../Components-Homepage/Results/Results';
import Information from '../Components-DetailPage/Information/Information';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" data-testid="App-test">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Results />}></Route>
          <Route path="/information" element={<Information/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

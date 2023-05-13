import React from 'react';
import  './style/style.scss';
import Header from './components/Header';
import CaseProduit from './components/CaseProduit';

function App() {
  return (
    <>
      <Header/>
      <div className="caseAriane">
        <div className="filAriane">
          Consoles&nbsp;<span></span>&nbsp;
          Sony&nbsp;<span></span>&nbsp;
          PS5
        </div>
      </div>
      <CaseProduit/>
    </>
  )
}

export default App
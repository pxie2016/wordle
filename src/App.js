import React from 'react';

import { HomePage } from './features/homepage/HomePage';
import { GamePage } from './features/gamepage/GamePage';
import RulePage from './features/rulepage/RulePage';

function App() {
  return (
    <div className="App">
      <div>
        <HomePage />
      </div>
      <div>
        <GamePage />
      </div>
      <div>
        <RulePage />
      </div>
    </div>
  );
}

export default App;

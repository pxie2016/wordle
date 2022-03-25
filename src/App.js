import React from 'react';

import {HomePage} from "./features/homepage/HomePage";
import RulePage from './features/rulepage/RulePage';

function App() {
  return (
    <div className="App">
      <div>
      <HomePage />
      </div>
      <div>
      <RulePage />
      </div>
    </div>
  );
}

export default App;

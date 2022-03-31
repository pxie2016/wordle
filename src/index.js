import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { HomePage } from './features/homepage/HomePage';
import { GamePage } from './features/gamepage/GamePage';
import RulePage from './features/rulepage/RulePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage />}/>
                <Route path={"/rulepage"} element={<RulePage />}/>
                <Route path={"/gamepage"} element={<GamePage />}/>
            </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

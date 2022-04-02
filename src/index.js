import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './app/store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RulePage from "./features/rulepage/RulePage";
import {GamePageWrapper} from "./features/gamepage/GamePageWrapper";
import {GamePage} from "./features/gamepage/GamePage";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<App/>}/>
                    <Route path={"/rulepage"} element={<RulePage/>}/>
                    <Route path={"/gamepage"} element={<GamePageWrapper/>}>
                        <Route path={":difficulty"} element={<GamePage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

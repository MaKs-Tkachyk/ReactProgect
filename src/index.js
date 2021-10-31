import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store"
import { BrowserRouter } from 'react-router-dom';




let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state} dispatch={store.dispatch.bind(store)} store={store}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState())

store.subscribe(() => {
   let state = store.getState()
    renderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

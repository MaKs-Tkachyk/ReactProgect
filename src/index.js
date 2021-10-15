import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




let postsData = [
  { message: "Hi, how are you? ", likeCount: "15", id: "1" },
  { message: "It`s my first post", likeCount: "25", id: "2" },
]

let dialogs = [
  { name: "Andrey ", id: "1" },
  { name: "Max ", id: "2" },
  { name: "Sergiy ", id: "3" },
  { name: "Bogdan ", id: "4" },
]
let messages = [
  { message: "Hi ", id: "1" },
  { message: "How are you ", id: "2" },
  { message: "I`m fine ", id: "3" },
  { message: "And you ", id: "4" },
]


ReactDOM.render(
  <React.StrictMode>
    <App  postsData={postsData} dialogs={dialogs} messages={messages}  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

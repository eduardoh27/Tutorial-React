import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from './Post';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Post author="John Doe" content="This is the post content" likes={20} />
);

// const component = <h1>Hola mundo</h1>;
// root.render(component);

// root.render(<App />);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

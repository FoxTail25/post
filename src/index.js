import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/app';
import './index.css';
// import { AddPost } from './Pages/add-post/addPost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App/>
    {/* <AddPost/> */}
  </BrowserRouter>

  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';

console.log("API KEY:", process.env.REACT_APP_API_KEY);


axios.defaults.baseURL = "https://api.themoviedb.org/3";


axios.get(`/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
  .then(response => {
    console.log(response.data); // handle the response
  })
  .catch(error => {
    console.error(error); // handle the error
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  // </React.StrictMode>
);

reportWebVitals();



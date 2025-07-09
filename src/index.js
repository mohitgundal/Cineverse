// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { RouterProvider } from 'react-router-dom';
// import router from './routes';
// import axios from 'axios';
// import { Provider } from 'react-redux';
// import { store } from './store/store';

// /**setup axios */
// axios.defaults.baseURL = "https://api.themoviedb.org/3"
// // axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
// // axios.get(`/movie/top_rated?api_key=${process.env.REACT_APP_ACCESS_TOKEN}`)

// // Set the default Authorization header for all requests
// axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;

// // Now you can make requests without including the token each time
// axios.get('/movie/top_rated')
//   .then(response => {
//     // handle the response
//     console.log(response.data);
//   })
//   .catch(error => {
//     // handle the error
//     console.error(error);
//   });

// axios.get(`/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//     <Provider store={store}>
//           <RouterProvider router={router}/>
//     </Provider>
  
//   // </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


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

/** Debug: Check if the API key is loaded correctly */
console.log("API KEY:", process.env.REACT_APP_API_KEY);

/** Setup axios for TMDb API (API Key method) */
axios.defaults.baseURL = "https://api.themoviedb.org/3";
// Remove any Authorization header setup for Bearer token
// Remove any test requests using Bearer token

// Example: You can test your API key like this (optional, for debugging)
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



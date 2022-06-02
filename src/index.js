import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/ThemeContext';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';
import TopRated from './TopRated';
import ViewQ from './ViewQ';
import { Provider } from 'react-redux';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path="home-page" element={<Home />} />
            <Route path="movie-details/:movieID" element={<MovieDetails />} />
            <Route path="top-rated-page" element={<TopRated />} />
            <Route path="view-q-page" element={<ViewQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

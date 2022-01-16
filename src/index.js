import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RocketDetails from './RocketDetails/RocketDetails';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        <Route path="/" element={<ApolloProvider client={client}><App /></ApolloProvider>} />
        <Route path="/rocketDetails/:id" element={<ApolloProvider client={client}><RocketDetails /></ApolloProvider>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

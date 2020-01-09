import React from 'react';
import Home from './pages/Home/Home.js'
import { ApolloProvider } from '@apollo/client';
import client from './Queries'
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="fl w-100 ph3 ph5-ns">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;

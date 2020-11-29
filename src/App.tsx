import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home';
import Trans from './pages/transfer';
import Login from './pages/login';
import Datos from './pages/Datos';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/transfer' component={Trans} />
          <Route path='/login' component={Login} />
          <Route path='/Datos' component={Datos} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

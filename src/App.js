import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
          </Route>
          <Route path="/category/:category">
            <ItemListContainer greeting="Explora nuestra categoría de productos" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

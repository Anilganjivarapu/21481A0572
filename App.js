import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import { Container } from '@material-ui/core';

const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={ProductsList} />
          <Route path="/product/:productName" component={ProductDetails} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import MedicineList from './components/MedicineList';
import Cart from './components/Cart';
import OrderSummary from './components/OrderSummary';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/medicines" component={MedicineList} />
          <Route path="/cart" component={Cart} />
          <Route path="/order-summary" component={OrderSummary} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

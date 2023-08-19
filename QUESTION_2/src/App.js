import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterCompany from './RegisterCompany';
import Login from './Login';
import TrainsList from './TrainsList';
import TrainDetails from './TrainDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegisterCompany} />
        <Route path="/login" component={Login} />
        <Route path="/trains" exact component={TrainsList} />
        <Route path="/trains/:trainNumber" component={TrainDetails} />
      </Switch>
    </Router>
  );
};

export default App;

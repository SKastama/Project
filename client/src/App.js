import './App.css';
import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import HomePage from './views/HomePage';
import NewPet from './views/NewPet';
import OnePet from './views/OnePet';
import EditPet from './views/EditPet';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/new">
          <NewPet />
        </Route>
        <Route exact path="/pets/:id">
          <OnePet />
        </Route>
        <Route exact path="/pets/:id/edit">
          <EditPet />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

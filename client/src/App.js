import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.module.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import Detail from './components/Detail/Detail.jsx';
import CreateActivity from './components/CreateActivity/CreateActivity';
import sty from './App.module.css';
function App() {
  return (
    <>
      <div className={sty.App}>
      <Switch>
        <Route exact path={'/'}>
          <LandingPage/>
        </Route>
        <Route path={'/home'}>
          <Home/>
        </Route>
        <Route exact path={`/detail/:id`} component={Detail} />
        <Route path={'/create'} component={CreateActivity}/>
      </Switch>
      </div>
    </>
  );
}

export default App;

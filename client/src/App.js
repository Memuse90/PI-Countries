import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import Detail from './components/Detail/Detail.jsx';
import Nav from './components/Nav/Nav';
function App() {
  return (
    <>
      <div className='App'>
      <Switch>
        <Route exact path={'/'}>
          <LandingPage/>
        </Route>
        <Route path={'/home'}>
          <Home/>
        </Route>
        <Route exact path={`/detail/:id`} component={Detail} />
            {/* <Nav/>
            <Detail/>
          </Route> */}
      </Switch>
      </div>
    </>
  );
}

export default App;

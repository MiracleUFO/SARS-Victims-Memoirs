import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Memoir from './components/Memoir';
import Footer from './components/Footer';

function App() {
  return (
    <div id='wrapper'>
      <Header/>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Memoir' component={Memoir} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

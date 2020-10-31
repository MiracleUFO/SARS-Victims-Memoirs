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
      <React.StrictMode>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Memoir' component={Memoir} />
      </Switch>
      </React.StrictMode>
      <Footer/>
    </div>
  );
}

export default App;

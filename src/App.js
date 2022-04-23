
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainComponent } from './components/MainComponent';
import { Navbar } from './components/Navbar';
import {Provider} from 'react-redux';
import  store from '../src/store/store';

function App() {
  return (
    <div>
      <Provider store={store}>
      <Router>
        <Navbar/>
        <MainComponent/>
      </Router>
      </Provider>
    </div>
  );
}

export default App;

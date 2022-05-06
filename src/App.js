import React from 'react';
import Header from './components/Header';
import Section from './components/Secction';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='total-body'>
        <Header/> 
        <Section/>  
      </div> 
    </Provider>
  );
}

export default App;

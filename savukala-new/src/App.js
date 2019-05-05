import React, { Component } from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import InformationCreator from './containers/InformationCreator/InformationCreator';

class App extends Component {
  render (){
    return (
      <div className="App">
        <Layout>
          <InformationCreator>
            
          </InformationCreator>
        </Layout>
      </div>
    );
  }
}

export default App;

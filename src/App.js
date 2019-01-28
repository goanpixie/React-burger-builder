import React, { Component } from 'react';
import Layout from './components/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div>
        <h1>My burger builder</h1>
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;

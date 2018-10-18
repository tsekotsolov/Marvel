import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import MyRouter from './components/router/MyRouter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyRouter />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import Router from './components/router/Router.jsx'
import {BrowserRouter} from 'react-router-dom'


class App extends Component {
  
  state = { 
    favArray:[],
  }

  manageFavArray=(item,action)=>{
    
    let favArray=[...this.state.favArray]

    if(action==='add'){
      favArray.push(item)
      this.setState({
        favArray
      })
    }else{
      const index = favArray.indexOf(item);
        if (index > -1) {
          favArray.splice(index, 1);
        }
        this.setState({
          favArray
        })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
           <Router manageFavArray={this.manageFavArray} appState={this.state}/>  
        </div>
      </BrowserRouter>
    );
  }
}

export default App

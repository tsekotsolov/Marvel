import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import MyRouter from './components/router/MyRouter'


class App extends Component {
  
  state = { 
    favArray:[],
  }

  manageFavArray=(item,action)=>{
    
    let {favArray}=this.state

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
      <div className="App">
      <MyRouter manageFavArray={this.manageFavArray} appState={this.state}/>  
      </div>
    );
  }
}

export default App

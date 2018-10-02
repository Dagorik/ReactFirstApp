import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
// import Saludo from './Saludo'
// import Despedida from './Despedida'
import Home from './component/Home/Home'

class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
    
  }

  componentDidMount(){
    
  }

  render() {
    
    return (
      <div className="row">
        <Home/>
      </div>
    );
  }
}

export default App;

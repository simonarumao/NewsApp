
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import  News from './components/News';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";





export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <>
        <Router>
          <Navbar  />
          
          <Routes>
          <Route exact path='/about' element={ <About/>}/>
            <Route exact path='/' element={< News key="general"  pageSize={this.pageSize} country="in" apiKey="22158b5e1e0d46ad8f9f331ed7bc9bf1"  category="general"/>} />
            <Route exact path='/business' element={< News key="business" pageSize={this.pageSize} country="in" apiKey="22158b5e1e0d46ad8f9f331ed7bc9bf1" category="business" />} />
            <Route exact path='/entertainment' element={< News key="entertainment" pageSize={this.pageSize} country="in" apiKey="22158b5e1e0d46ad8f9f331ed7bc9bf1" category="entertainment" />} />
            <Route exact path='/health' element={< News key="health" pageSize={this.pageSize} country="in" apiKey="22158b5e1e0d46ad8f9f331ed7bc9bf1" category="health" />} />
            <Route exact path='/science' element={< News key="science" pageSize={this.pageSize} country="in" apiKey="22158b5e1e0d46ad8f9f331ed7bc9bf1" category="science" />} />
            <Route exact path='/sports' element={< News key="sports" pageSize={this.pageSize} country="in" apiKey="22158b5e1e0d46ad8f9f331ed7bc9bf1" category="sports" />} />
            <Route exact path='/technology' element={< News key="technology" pageSize={this.pageSize} country="in" apiKey="22158b5e1e0d46ad8f9f331ed7bc9bf1" category="technology" />} />
            <Route  exact path='/us' element={< News key="us" pageSize={this.pageSize} country="us" apiKey="22158b5e1e0d46ad8f9f331ed7bc9bf1" category="general" />  } />


            </Routes>
          </Router>
      </>
    )
  }
}

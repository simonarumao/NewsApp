
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import  News from './components/News';
import About from './components/About';
import Contact from './components/Contact';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";






export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div className='bg-lightTeal h-[100vh] '>
        <Router>
          <Navbar  />
     
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/' element={< News key="general"  pageSize={this.pageSize} country="in" apiKey={this.apiKey}  category="general"/>} />
            <Route exact path='/business' element={< News key="business" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="business" />} />
            <Route exact path='/entertainment' element={< News key="entertainment" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="entertainment" />} />
            <Route exact path='/health' element={< News key="health" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="health" />} />
            <Route exact path='/science' element={< News key="science" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="science" />} />
            <Route exact path='/sports' element={< News key="sports" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="sports" />} />
            <Route exact path='/technology' element={< News key="technology" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="technology" />} />
            <Route  exact path='/us' element={< News key="us" pageSize={this.pageSize} country="us" apiKey={this.apiKey} category="general" />  } />


            </Routes>
          </Router>
      </div>
    )
  }
}

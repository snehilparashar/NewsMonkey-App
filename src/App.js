import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import {
//   BrowserRouter,
//   RouterProvider
// } from "react-router-dom";

// const Route = BrowserRouter([
//   {
//     path: "/",
//     element: <News key="general" pageSize={15} country="in" category="general" />
//   },
//   {
//     path: "/business",
//     element: <News key="business" pageSize={15} country="in" category="business" />
//   },
//   {
//     path: "/entertainment",
//     element: <News key="business" pageSize={15} country="in" category="entertainment" />
//   },
//   {
//     path: "/general",
//     element: <News key="general" pageSize={15} country="in" category="general" />
//   },
//   {
//     path: "/health",
//     element: <News key="health" pageSize={15} country="in" category="health" />
//   },
//   {
//     path: "/science",
//     element: <News key="science" pageSize={15} country="in" category="science" />
//   },
//   {
//     path: "/sports",
//     element: <News key="sports" pageSize={15} country="in" category="sports" />
//   },
//   {
//     path: "/technology",
//     element: <News key="technology" pageSize={15} country="in" category="technology" />
//   },
  
// ])


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={15} country="in" category="entertainment" />
        {/* <RouterProvider Route={Route} /> */}
      </div>

    )
  }
}

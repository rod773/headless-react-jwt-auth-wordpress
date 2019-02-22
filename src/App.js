import React, { Component } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <div id="content" className="site-content">
          <Posts />
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

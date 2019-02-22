import React, { Component } from "react";

import Header from "./components/Header";
import Posts from "./components/Posts";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import "./App.css";

import settings from "./settings";

class App extends Component {
  componentDidMount() {
    fetch(`${settings.rest_route}wp/v2/posts`)
      .then(response => response.json())
      .then(posts => {
        console.log(posts);
      })
      .catch(error => console.error(error));
  }
  render() {
    console.log(settings.rest_route);
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

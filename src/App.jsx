import React from "react";
import "./App.css";
import ReactGA from "react-ga";
import Header from "./components/header/Header";
import Workspace from "./components/workspace/Workspace";
import PreAlphaNotice from "./components/preAlpha/PreAlphaNotice";
import Footer from "./components/footer/Footer";

class App extends React.Component {
  componentDidMount() {
    ReactGA.initialize("UA-138685124-2");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Workspace />
        <PreAlphaNotice />
        <Footer />
      </div>
    );
  }
}

export default App;
import React from "react";
import Header from "./components/Header/Header";
import Links from "./components/Links/Links";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Links />
      <Footer />
    </div>
  );
};

export default App;

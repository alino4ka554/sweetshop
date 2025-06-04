import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DessertList from "./components/DessertList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <DessertList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
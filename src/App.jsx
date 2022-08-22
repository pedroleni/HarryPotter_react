import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { HPContextProvider } from "./context/context";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Harry from "./components/Harry/Harry";
import Card from "./pages/Card/Card"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <HPContextProvider>
          
          <Header />
          <Card />
          <Harry/>
          <Routes>
            <Route/>
            <Route path="/characters" element={<Card />} />
            
            <Route/>
          </Routes>
        </HPContextProvider>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

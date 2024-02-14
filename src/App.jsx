import { useState } from "react";
import * as React from "react";
export const MyContext = React.createContext(null);
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Balanse from "./Components/Balanse.jsx";
import ChangeCode from "./Components/ChangeCode.jsx";
import Money from "./Components/IssuingMoney.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Home1 from "./Components/Homi1.jsx"

function App() {
  const [code, setCode] = useState(1234);

  return (
    <>
      <MyContext.Provider value={{code,setCode}}>
        <Router>
          <Header />
          <main className="flex-grow ">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home1" element={<Home1 />} />
              <Route path="/balanse" element={<Balanse />} />
              <Route path="/money" element={<Money />} />
              <Route path="/changecode" element={<ChangeCode />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </MyContext.Provider>
    </>
  );
}

export default App;

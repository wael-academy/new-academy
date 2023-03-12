import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Coach from "./Comp/Coaches";
import DataLanes from "./Comp/DataLanes";
import DataSwimmers from "./Comp/DataSwimmer";
import LogLanes from "./Comp/LogLanes";
import LogSwimmer from "./Comp/LogSwimmer";
import { getFirestore } from "firebase/firestore";
import Home from "./Comp/Home";


const db = getFirestore();

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login-swimmers" element={<LogSwimmer db={db} />} />
            <Route path="/login-lanes" element={<LogLanes db={db} />} />
            <Route path="/coach" element={<Coach />} />
            <Route path="/data-swimmers" element={<DataSwimmers db={db} />} />
            <Route path="/data-lanes" element={<DataLanes db={db} />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

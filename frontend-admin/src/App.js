import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import MenuAppBar from "./components/MenuAppBar/MenuAppBar.component";

function App() {
  return (
    <Router>
      <MenuAppBar />
    </Router>
  );
}

export default App;

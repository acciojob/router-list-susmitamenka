
import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./Home";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";



const App = () => {
  return (
    <div>
      <Router>
      
        <Route path="/" component={Home}></Route>
        <Route path="/Item1"  component={Item1}></Route>
        <Route path="/Item2"  component={Item2}></Route>
        <Route path="/Item3"  componen={Item3}></Route>
        
      </Router>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App

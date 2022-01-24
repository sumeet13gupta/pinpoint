import Topbar from "./topbar/Topbar";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const currentUser = true;
  return (
     <Router>
       <Topbar />
       <Home/>

     </Router>
  );
}

export default App;

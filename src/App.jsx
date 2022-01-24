
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";


function App() {
  const currentUser = true;
  return (
     <Router>
       <Topbar />
       <Single/>

     </Router>
  );
}

export default App;

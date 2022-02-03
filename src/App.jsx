
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";



function App() {
  const currentUser = true;
  return (
     <Router>
       <Topbar />
        <Settings />

     </Router>
  );
}

export default App;

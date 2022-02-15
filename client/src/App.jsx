


import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";

import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";



function App() {
  const user = false;
  return (
     <Router>
       <Topbar />
       <Routes>
         <Route exact path="/" element={ <Home />} />
         <Route exact path="/post/:postId" element={ <Single />} />
         <Route exact path="/write" element={ user ? <Write /> : <Register/>} />
         <Route exact path="/register" element={ user ? <Home/> : <Register />} />
         <Route exact path="/settings" element={ <Settings />} />
         <Route exact path="/login" element={ user ? <Home/> : <Login />} />
          
       </Routes>
        

     </Router>
  );
}

export default App;

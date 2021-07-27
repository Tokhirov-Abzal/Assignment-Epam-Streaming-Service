import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.scss";

// Components
import Navbar from "./Components/Navbar";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import SinglePage from "./pages/Singlepage";

function App() {
  return (
    <Router className="App">
      <Navbar />
      <div className="Container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/singleshow/:id" component={SinglePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

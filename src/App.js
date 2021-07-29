import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

// Components
import Navbar from "./Components/Navbar";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Bookmark from "./pages/Bookmark";

// Context
import HomeContext from "./context/home/homeContext";

function App() {
  const [favouriteList, setFavouriteList] = useState([]);
  return (
    <HomeContext.Provider value={{ favouriteList, setFavouriteList }}>
      <Router className="App">
        <Navbar />
        <div className="Container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/bookmark" component={Bookmark} />
          </Switch>
        </div>
      </Router>
    </HomeContext.Provider>
  );
}

export default App;

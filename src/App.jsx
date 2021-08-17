import { Switch, Route } from "react-router-dom";
import "./App.css";

//  pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

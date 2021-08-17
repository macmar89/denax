import { Switch, Route } from "react-router-dom";
import { createContext } from "react";

//  pages
import TaskOne from "./pages/TaskOne";
import TaskTwo from "./pages/TaskTwo";
import TaksThree from "./pages/TaskThree";
import NavbarMenu from "./components/global/NavbarMenu";

export const RowsContext = createContext(null);
export const NumberOfSeats = createContext(null);

function App() {
  return (
    <div className="App">
      <NumberOfSeats.Provider value={20}>
        <RowsContext.Provider value={10}>
          <NavbarMenu />
          <Switch>
            <Route path="/" component={TaskOne} exact />
            <Route path="/one" component={TaskOne} exact />
            <Route path="/two" component={TaskTwo} />
            <Route path="/three" component={TaksThree} />
          </Switch>
        </RowsContext.Provider>
      </NumberOfSeats.Provider>
    </div>
  );
}

export default App;

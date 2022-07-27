import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Landing from './components/Landing';
import CreateVideogame from './components/CreateVideogame';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/videogame">
          <CreateVideogame />
        </Route>
        <Route path="/home/:id">
          <Detail />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

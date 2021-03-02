import { Route, Switch } from 'react-router-dom';
import './App.css';
import Result from './components/result/result';
import SearchBar from './components/searchbar/searchbar';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SearchBar />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

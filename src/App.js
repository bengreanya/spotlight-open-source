import { Button } from '@mui/material';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Charts from './Charts.js';
import TableComp from './TableComp.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Button variant="contained">
          <Link to="/table">Table</Link>
        </Button>
        <Button variant="contained">
          <Link to="/charts">Charts</Link>
        </Button>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Library</h1>
          <TableComp />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <Charts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

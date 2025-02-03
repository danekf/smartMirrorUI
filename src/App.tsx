import './App.css'

import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import Planner from './pages/Planner/Planner';

/* DEV - Routing Refresher :
https://reactrouter.com/start/library/routing */

const App = () => {

  return (
    <div className="app">
      <Routes >
        <Route index element={ <Dashboard />} />

        <Route path='/planner' element={ <Planner />} />


      </Routes>
    </div>
  );
};

export default App;

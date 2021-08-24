import './App.css';

import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import HeaderDashboard from './components/HeaderDashboard'
import Sidebar from './components/Sidebar'

import Spaces from './components/spaces/Spaces'
import RoomDetails from './components/roomDetails/RoomDetails'
import Summary from './components/summary/Summary'
import Analytics from './components/analytics/Analytics'
import Buildings from './components/buildings/Buildings'

function App() {

    // checks if the user wants dark mode
    useEffect(() => {
        const json = localStorage.getItem("site-dark-mode");
        const prefersDark = JSON.parse(json);
    
        if (prefersDark) {
            document.body.classList.add("dark");
        }
    
    }, []);

  return (
    <div className = 'dashboard'>
        <HeaderDashboard />

        <Router>
            <div className = 'dashboard__sidebar'>
                <Sidebar />
            </div>

            <div className= 'dashboard__body'>
                <Switch>
                    <Redirect exact from='/dashboard' to='/dashboard/summary' />
                    <Route path='/dashboard/summary' component = {Summary}/>
                    <Route path='/dashboard/analytics' component = {Analytics}/>

                    <Route path='/dashboard/spaces' exact component = {Spaces}/>
                    <Route path='/dashboard/spaces/:room' component = {RoomDetails}/>

                    <Route path='/dashboard/buildings' exact component = {Buildings}/>
                </Switch>
            </div>
        </Router>       
    </div>
  );
}

export default App;

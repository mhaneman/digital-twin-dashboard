import './Dashboard.css'

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import HeaderDashboard from './HeaderDashboard'
import Sidebar from './Sidebar'

import BodyDefault from './BodyDefault'

import Spaces from './spaces/Spaces'
import RoomDetails from './roomDetails/RoomDetails'

import Summary from './summary/Summary'

import Analytics from './analytics/Analytics'

import Buildings from './buildings/Buildings'



function Dashboard() {
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
    
    )
}

export default Dashboard

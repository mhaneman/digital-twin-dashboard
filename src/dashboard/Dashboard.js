import './Dashboard.css'

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeaderDashboard from './HeaderDashboard'
import Sidebar from './Sidebar'

import BodyDefault from './BodyDefault'
import Spaces from './spaces/Spaces'
import Summary from './summary/Summary'
import Analytics from './analytics/Analytics'
import RoomDetails from './roomDetails/RoomDetails'


function Dashboard() {
    return (
        <div className = 'dashboard'>
            <HeaderDashboard />
            <Router>
                <div className= 'dashboard__body'>
                    <Sidebar />

                    <Switch>
                        <Route path='/dashboard/' exact component = {BodyDefault}/>
                        <Route path='/dashboard/summary' component = {Summary}/>
                        <Route path='/dashboard/analytics' component = {Analytics}/>

                        <Route path='/dashboard/spaces' exact component = {Spaces}/>
                        <Route path='/dashboard/spaces/:room' component = {RoomDetails}/>

                    </Switch>
                </div>
            </Router>
                
            </div>
    )
}

export default Dashboard
import "./HeaderDashboard.css";

import React from 'react';
import { Link } from 'react-router-dom'

import { Avatar, IconButton } from "@material-ui/core";

import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Logo from './logo.png';



function headerDashboard() {
    return (
        <div className="headerDashboard">
            <div className="headerDashboard__left">
                <h3>Campus Smart City</h3>
            </div>

            <div className="headerDashboard__right">
                <div className="headerDashboard__info">
                    {/* <Avatar src={user.photoURL}/> */}
                    <h4>Michael Haneman</h4>
                </div>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default headerDashboard

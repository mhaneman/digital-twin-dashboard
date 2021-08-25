import './Sidebar.css'

import React from 'react'

import { Link } from 'react-router-dom'
import { Avatar } from "@material-ui/core";

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import NoteIcon from '@material-ui/icons/Note';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BusinessIcon from '@material-ui/icons/Business';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarItem Icon={NoteIcon} title='Summary' link = '/dashboard/summary' />

            <SidebarItem Icon={MeetingRoomIcon} title='Spaces' link = '/dashboard/spaces' />

            <SidebarItem Icon={AssessmentIcon} title='Analytics' link = '/dashboard/analytics' />

            <SidebarItem Icon={BusinessIcon} title='Buildings' link='/dashboard/buildings'/>
        </div>
    )
}

const SidebarItem = ({ Icon, title, link}) => {
    return (
        <Link className = "link" to = {link} >
            <div className="sidebarItem">
                {Icon && <Icon />}
                <h4>{title}</h4>
            </div>
        </Link>
    )
}

export default Sidebar
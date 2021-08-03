import React from 'react'
import './Sidebar.css'
import SidebarIdtem from './SidebarItem'

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import NoteIcon from '@material-ui/icons/Note';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LiveTvIcon from '@material-ui/icons/LiveTv';


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarIdtem Icon={NoteIcon} title='Summary' link = '/dashboard/summary' />
            <SidebarIdtem Icon={MeetingRoomIcon} title='Spaces' link = '/dashboard/spaces' />
            <SidebarIdtem Icon={AssessmentIcon} title='Analytics' link = '/dashboard/analytics' />
            <SidebarIdtem Icon={LiveTvIcon} title='Live' link='/dashboard/'/>
        </div>
    )
}

export default Sidebar
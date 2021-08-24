import React from 'react'
import './Sidebar.css'
import SidebarIdtem from './SidebarItem'

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import NoteIcon from '@material-ui/icons/Note';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BusinessIcon from '@material-ui/icons/Business';


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarIdtem Icon={NoteIcon} title='Summary' link = '/dashboard/summary' />

            <SidebarIdtem Icon={MeetingRoomIcon} title='Spaces' link = '/dashboard/spaces' />

            <SidebarIdtem Icon={AssessmentIcon} title='Analytics' link = '/dashboard/analytics' />

            <SidebarIdtem Icon={BusinessIcon} title='Buildings' link='/dashboard/buildings'/>
        </div>
    )
}

export default Sidebar
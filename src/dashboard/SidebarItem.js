import './SidebarItem.css'

import React from 'react'
import { Link } from 'react-router-dom'

import { Avatar } from "@material-ui/core";

function SidebarItem({ src, Icon, title, link}) {
    return (
        <Link className = "link" to = {link} >
            <div className="sidebarItem">
                {src && <Avatar src={src} />}
                {Icon && <Icon />}


                    <h4>{title}</h4>
                
            </div>
        </Link>
    )
}

export default SidebarItem
import "./HeaderDashboard.css";

import useDetectClickOut from "./useDetectClickOut";
import DarkModeSwitch from "./DarkModeSwitch"

import React, { forwardRef } from 'react';

import { IconButton } from "@material-ui/core";

import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function HeaderDashboard() {

    const { show, nodeRef, triggerRef } = useDetectClickOut(false);

    return (
        <div className="headerDashboard">

            <div className="headerDashboard__left">
                <h3>Campus Smart City</h3>
            </div>

            <div className="headerDashboard__right">

                <h4>Michael Haneman</h4>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton ref = {triggerRef} className = {show ? `rotation` : null} >
                    <ExpandMoreIcon />
                </IconButton>
                

                {
                    show && <DropdownMenu ref = {nodeRef} />
                }

            </div>
        </div>
    );
}

const DropdownMenu = forwardRef((props, ref) => {

    return (
        <div className="dropdownMenu" ref = {ref} >        
            <DarkModeSwitch />
        </div>
    );
});

export default HeaderDashboard

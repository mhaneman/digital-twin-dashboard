import React, {useState, useEffect }from "react";

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const GreenSwitch = withStyles({
    switchBase: {
      color: '#77c591',
      '&$checked': {
        color: '#77c591',
      },
      '&$checked + $track': {
        backgroundColor: '#77c591',
      },
    },
    checked: {},
    track: {},
  })(Switch);

const DarkModeSwitch = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const json = localStorage.getItem("site-dark-mode");
        const currentMode = JSON.parse(json);
        if (currentMode) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        const json = JSON.stringify(darkMode);
        localStorage.setItem("site-dark-mode", json);
    }, [darkMode]);

  return (
    <FormControlLabel
      value = "end"
      control = {
        <GreenSwitch 
          color="primary"
          checked={darkMode}
          onChange = {() => setDarkMode(!darkMode)}  
        />
      }

      label = "enable dark mode"
      labelPlacement = "end"
    />
  );
};

export default DarkModeSwitch;
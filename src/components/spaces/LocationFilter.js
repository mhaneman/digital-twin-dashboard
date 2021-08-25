import './LocationFilter.css'

import { FormGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const GreenSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  const GreenCheckbox = withStyles({
    root: {
        color: '#52af77',
        '&$checked': {
            color: '#52af77',
        },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

function LocationFilter({checkboxState, setCheckboxState, sliderPercentageState, setSliderPercentageState, sliderLocationState, setSliderLocationState}) {

    // handle checkbox being clicked
    const handleCheckboxChange = (event) => {
        setCheckboxState({ ...checkboxState, [event.target.name]: event.target.checked });
    };

    // handle change in slider value
    const handlePercentageSliderChange = (event, newValue) => {
        console.log(newValue);
        setSliderPercentageState(newValue);
    };

    const handleLocationSliderChange = (event, newValue) => {
        setSliderLocationState(newValue);
    };

    return (
        <div className='locationFilter'>
            <div className='locationFilter__left'>
                <FormControlLabel
                    control={<GreenCheckbox checked={checkboxState.filters} onChange={handleCheckboxChange} name="filters" />}
                    label="Dashboard Filters" />
            </div>

            { checkboxState.filters &&
                <div className='locationFilter__center'>
                    <Typography id='green-slider'gutterBottom>
                        Minimum Location Occupancy Percent</Typography>
                    <GreenSlider 
                        value={sliderPercentageState}
                        onChange = {handlePercentageSliderChange}
                        valueLabelDisplay="auto" 
                        aria-label="green-slider" 
                    />

                    <Typography id="range-slider" gutterBottom>
                        Current Number of People
                    </Typography>
                    <GreenSlider
                        value={sliderLocationState}
                        onChange={handleLocationSliderChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                </div> 
            }

            <div className='locationFilter__right'>
            <FormControlLabel
                control={<GreenCheckbox checked={checkboxState.developer_options} onChange={handleCheckboxChange} name="developer_options" />}
                label="Developer Options" />

            { checkboxState.developer_options &&
                <FormGroup column="true">
                    <FormControlLabel
                        control={<GreenCheckbox checked={checkboxState.linear_data} onChange={handleCheckboxChange} name="linear_data" />}
                        label="Linear Data" />

                    <FormControlLabel
                        control={<GreenCheckbox checked={checkboxState.random_data} onChange={handleCheckboxChange} name="random_data" />}
                        label="Random Data" />
                </FormGroup>
            }

            </div>  
        </div>
    )
}

export default LocationFilter

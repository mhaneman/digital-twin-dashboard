import './RoomFilter.css'

import FormGroup from '@material-ui/core/FormGroup';
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

function RoomFilter({checkboxState, setCheckboxState, sliderPercentageState, setSliderPercentageState, sliderRoomState, setSliderRoomState}) {

    // handle checkbox being clicked
    const handleCheckboxChange = (event) => {
        setCheckboxState({ ...checkboxState, [event.target.name]: event.target.checked });
    };

    // handle change in slider value
    const handlePercentageSliderChange = (event, newValue) => {
        console.log(newValue);
        setSliderPercentageState(newValue);
    };

    const handleRoomSliderChange = (event, newValue) => {
        setSliderRoomState(newValue);
    };

    return (
        <div className='roomFilter'>
            <div className='roomFilter__left'>
                <FormControlLabel
                    control={<Checkbox checked={checkboxState.filters} onChange={handleCheckboxChange} name="filters" color="white" />}
                    label="Dashboard Filters" />
            </div>

            { checkboxState.filters &&
                <div className='roomFilter__center'>
                    <Typography id='green-slider'gutterBottom>
                        Minimum Room Occupancy Percent</Typography>
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
                        value={sliderRoomState}
                        onChange={handleRoomSliderChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                </div> 
            }

            <div className='roomFilter__right'>
            <FormControlLabel
                control={<Checkbox checked={checkboxState.developer_options} onChange={handleCheckboxChange} name="developer_options" color="white" />}
                label="Developer Options" />

            { checkboxState.developer_options &&
                <FormGroup column>
                    <FormControlLabel
                        control={<Checkbox checked={checkboxState.linear_data} onChange={handleCheckboxChange} name="linear_data" color="white" />}
                        label="Linear Data" />

                    <FormControlLabel
                        control={<Checkbox checked={checkboxState.random_data} onChange={handleCheckboxChange} name="random_data" color="white" />}
                        label="Random Data" />
                </FormGroup>
            }

            </div>  
        </div>
    )
}

export default RoomFilter

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function BasicSelect({ numArray, onChange, defaultValue }) {
    const [qty, setQty] = useState(defaultValue);
    const [chooseMore, setChooseMore] = useState(defaultValue >= 10 ? true : false);
    const [onFocus, setOnFocus] = useState(false);
    const [haveUpdated, setHaveUpdated] = useState('');
    const [inActive, setInActive] = useState('')

    const handleChange = (e) => {
        onChange(e.target.value);
        setQty(e.target.value);
        if (e.target.value >= 10) {
            setChooseMore(true);
        }
    }

    const handleUpdate = () => {
        onChange(qty);
        setHaveUpdated('Got it!');
        setOnFocus(false);
        setTimeout(() => {
            setInActive('inActive');
        }, 1000)
    }

    return (
        !chooseMore ?
        <Box sx={{ maxWidth: 80 }}>
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Qty</InputLabel>
                <Select
                    sx={{height: 40}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={qty}
                    label="Qty"
                    onChange={handleChange}
                >
                    {numArray.map((ele, index) => {
                        if (ele !== 10) {
                            return <MenuItem value={ele} key={index} >{ele}</MenuItem>
                        } else {
                            return <MenuItem value={ele} key={index} >{`${ele}+`}</MenuItem>
                        }
                    } )}
                </Select>
            </FormControl>
        </Box>
        : <div className='inputMore'>
            <div>
                <input
                className='inputMore-inputBar'
                onChange={(e) => setQty(e.target.value)}
                value={qty}
                onFocus={() => {
                    setOnFocus(true);
                    setHaveUpdated(false);
                    setInActive('');
                }}
                />
            </div>
            <div>
                {onFocus ? <Button
                sx={{position: "absolute", 
                    fontSize:"12px",
                    bottom: "-70%"
                }}
                variant="outlined"
                color="error"
                onClick={handleUpdate}>Update</Button> : <span className={`updateQtyInfo ${inActive}`}>{haveUpdated}</span>}
            </div>
        </div>
    );
}

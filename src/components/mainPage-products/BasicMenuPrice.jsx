import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Checkbox } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// This component is different from BasicMenuGeneral because we are using an array of Price ranges in textContent. So it may not be able to applied to other situations.(which usually we only need a string array.)
// And it is hard to simply pull Checkbox out since we are defining state on Checkbox in this components. So for simplicity, we create two separate Menu JSX components even though they looks pretty much the same.

// For more info: see ROW 62!

export default function BasicMenuPrice({ text, ListInfo, dispatchAction }) {
    const [checkBoxList, setCheckBoxList] = React.useState(Array(ListInfo.length).fill(false));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleCheckBoxClick = (e) => {
        const index = e.currentTarget.dataset.index;
        //transfer [index, ListInfo[index]] to father SearchTop,   1,[500,1000]
        dispatchAction([index, ListInfo[index]])
        setCheckBoxList(prev => {
            const state = [...prev];
            state[index] === false ? state[index] = true : state[index] = false;
            return state;
        })
    }


    return (
      <>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ border:1, px:2, mt:1 }}
          color="error"
          endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
        >
          {text}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {ListInfo.map((ele, index) => 
              <MenuItem key={index} onClick={handleCheckBoxClick} data-index={index} >
                  <Checkbox size="small"  checked={checkBoxList[index]}/>
                  {index !== ListInfo.length - 1 ? `$${ele[0]}-$${ele[1]}` : `Above $${ele[0]}`}
              </MenuItem>)} 
        </Menu>
      </>
    );
}
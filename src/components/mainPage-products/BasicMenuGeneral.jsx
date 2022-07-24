import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Checkbox } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function BasicMenuGeneral({ text, ListInfo, dispatchAction }) {
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
                      {`${ele}`}
              </MenuItem>)} 
        </Menu>
      </>
    );
}
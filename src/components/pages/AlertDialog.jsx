import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useMakeOrderMutation } from '../../features/furnitureApiSlice.js';
import { Payment } from './Payment.jsx';

export default function AlertDialog() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [canRenderCheckoutIcon, setCanRenderCheckoutIcon] = useState(false)
    const [ makeOrder ] = useMakeOrderMutation();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleYes = () => {
        navigate('/login');
    };

    const handleClose = () => {
        setOpen(false);
    };

    const displayCheckout = async () => {
        try {
            const response = await makeOrder({
                "taxRate": 1.13,
                "isActive": true,
                "isDelete": false,
                "orderItems": [
                    {
                        "quantity": 2,
                        "product": 1,
                        "profileItems": [
                            13,
                            2,
                            10
                        ]
                    },
                    {
                        "quantity": 3,
                        "product": 3,
                        "profileItems": [
                            20
                        ]
                    }
                ]
            })

            if (response.data.code !== 0) {
                window.alert('some of your choosen products might not available any more!');
            } else {
                setCanRenderCheckoutIcon(true)
            }

        } catch (e) {  // get status from backend
           handleClickOpen(); 
        }

    }

    return (
        !canRenderCheckoutIcon ?
        <div>
            <Button variant="outlined" onClick={displayCheckout} color="error">
                Checkout
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"You need to login first!"}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Turn to login page now?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleYes}>Yes</Button>
                    <Button onClick={handleClose} autoFocus>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        : <Payment /> 
    );
}
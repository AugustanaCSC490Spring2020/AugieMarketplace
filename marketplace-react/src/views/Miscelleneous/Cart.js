import { IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { default as React } from 'react';

export default function Cart(props) {
    return (
        <div>
            <IconButton color="inherit">
                <ShoppingCartIcon />
            </IconButton>
        </div>
    )
}
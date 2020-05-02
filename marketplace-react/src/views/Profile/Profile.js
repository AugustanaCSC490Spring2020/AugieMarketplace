import { IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { default as React } from 'react';

export default function Profile(props) {
    return (
        <div>
            <IconButton color="inherit">
                <PersonIcon />
            </IconButton>
        </div>
    )
}
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import { default as React } from 'react';

export default function SignOut(props) {
    return (
        <div>
            <ListItem button>
                <ListItemIcon>
                    <ExitToApp />
                </ListItemIcon>
                <ListItemText primary="Sign Out" />
            </ListItem>
        </div>
    )
}
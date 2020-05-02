import { default as React } from 'react';
import { Container, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';

export default function HelpView() {
    return (
        <div>
            <ListItem button>
                <ListItemIcon>
                    <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="Help" />
            </ListItem>
        </div>
    )
}
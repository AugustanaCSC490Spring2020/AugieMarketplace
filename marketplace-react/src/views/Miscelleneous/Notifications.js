import { default as React} from 'react';
import { Container, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications'

export default function NotificationsView(props) {
    return (
        <div>
            <ListItem button>
                <ListItemIcon>
                    <NotificationsIcon />
                </ListItemIcon>
                <ListItemText primary="Notifications" />
            </ListItem>
        </div>
    )
}
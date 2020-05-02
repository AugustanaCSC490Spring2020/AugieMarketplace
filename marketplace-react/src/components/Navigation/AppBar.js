import { AppBar, Box, Container, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import { ChevronLeft, InsertInvitation, Menu } from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import clsx from 'clsx';
import { default as React } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { CopyrightFooter } from '..';
import { Cart, CreatePostDialogue, Profile, SignOut } from '../../views';
import { useStyles } from './MainStyles';

export default function AppBar(props) {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="absolute" className={clsx(classes.appBar, props.open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={props.handleDrawerOpen}
                            className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}
                        >
                            <Menu />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Augie MarketPlace
                     </Typography>
                        {/* Add if statement */}
                        <div>
                            <SearchBar
                                query={props.query}
                                setQuery={props.setQuery}
                            />
                        </div>
                        {/* Add Nav for this as well ... sigh 
                            No ... move Profile to sidebar
                            And Cart to the Item View*/}
                        <Profile />
                        <Cart />
                    </Toolbar>
                </AppBar>
        </div>
    )
}
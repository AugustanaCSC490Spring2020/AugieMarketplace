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
import { useStyles } from './styles';

export default function SideBar(props) {

    const classes = useStyles();
    return (
        <div>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
                }}
                open={props.open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={props.handleDrawerClose}>
                        <ChevronLeft />
                    </IconButton>
                </div>

                <Divider />
                <List>
                    <NavLink
                        to="/dashboard"
                        className="dashboard"
                        activeClassName="active">
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </NavLink>

                    <NavLink
                        to="/create"
                        className="createPost"
                        activeClassName="active">
                        <CreatePostDialogue
                            createPost={props.createPost}
                        />
                    </NavLink>

                    <NavLink
                        to="/notifications"
                        className="notifications"
                        activeClassName="active">
                        <ListItem button>
                            <ListItemIcon>
                                <NotificationsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Notifications" />
                        </ListItem>
                    </NavLink>
                </List>

                <Divider />
                <List>
                    <NavLink
                        to="/help"
                        className="help"
                        activeClassName="active">
                        <ListItem button>
                            <ListItemIcon>
                                <HelpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Help" />
                        </ListItem>
                    </NavLink>

                    <NavLink
                        to="/settings"
                        className="settings"
                        activeClassName="active">
                        <ListItem button>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItem>
                    </NavLink>

                    <SignOut />
                </List>
            </Drawer>
        </div>
    );
}
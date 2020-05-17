import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard';
import clsx from 'clsx';
import { default as React } from 'react';
import { NavLink } from 'react-router-dom';
import { CreatePostDialogue } from '../../views';
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
                        activeClassName="active"
                        className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText className="link"
                                primary="Dashboard" />
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

                </List>
            </Drawer>
        </div>
    );
}
import { AppBar, FormControl, IconButton, Input, InputAdornment, Toolbar, Typography } from '@material-ui/core';
import { Menu, Search } from '@material-ui/icons';
import clsx from 'clsx';
import { default as React } from 'react';
import { Cart, Profile } from '../../views';
import { useStyles } from './styles';

function SearchBar(props) {
    return (
        <FormControl>
            <Input
                endAdornment={
                    <InputAdornment
                        position="end">
                        <IconButton>
                            <Search style={{ color: 'white' }} />
                        </IconButton>
                    </InputAdornment>
                }
                value={props.query}
                onChange={e => props.setQuery(e.target.value)}
            />
        </FormControl>
    );
}

export default function MenuBar(props) {
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
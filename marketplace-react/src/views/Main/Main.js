import { AppBar, Box, Container, CssBaseline, FormControl, IconButton, Input, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { default as React } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { CopyrightFooter } from '../../components';
import SideBar from '../../components/Navigation/SideBar';
import routes from "../../routes";
import { useStyles } from './styles';

//cite source
const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
            return (
                <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}
                />
            );
            return null;
        })}
        <Redirect from="/" to="/dashboard" />
    </Switch>
);

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

export default function Main(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline />

                <AppBar 
                    open={open}
                    query={props.query}
                    setQuery={props.setQuery}
                    handleDrawerOpen={handleDrawerOpen}
                />
                <SideBar
                    open={open}
                    handleDrawerClose={handleDrawerClose}
                />
                
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>

                        {switchRoutes}

                        <Box pt={4}>
                            <CopyrightFooter />
                        </Box>
                    </Container>
                </main>
            </div>
        </Router>
    );
}
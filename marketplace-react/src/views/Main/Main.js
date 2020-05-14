import { Box, Container, CssBaseline } from '@material-ui/core';
import { default as React } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { CopyrightFooter } from '../../components';
import MenuBar from '../../components/Navigation/MenuBar';
import SideBar from '../../components/Navigation/SideBar';
import { useStyles } from "../../components/Navigation/styles";
import routes from "../../routes";
import { Dashboard } from '@material-ui/icons';
import DashboardView from '../Dashboard/Dashboard';
import PrivateRoute from '../utils/PrivateRoute'
//cite source
const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
            return (
                <PrivateRoute
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}
                />
            );
        })}
        <Redirect from="/" to="/dashboard" />
    </Switch>
);

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
                <SideBar
                    open={open}
                    handleDrawerClose={handleDrawerClose}
                />
            </div>

            <MenuBar
                open={open}
                query={props.query}
                setQuery={props.setQuery}
                handleDrawerOpen={handleDrawerOpen}
            />

            <div className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                        {switchRoutes}
                    <Box pt={4}>
                        <CopyrightFooter />
                    </Box>
                </Container>
            </div>

        </Router >
    );
}
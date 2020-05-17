import { signInWithGoogle, auth } from "../../firebase/firebase";
import React, { useState, useEffect, Image } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://media-exp1.licdn.com/dms/image/C561BAQEECA8nKUOrgg/company-background_10000/0?e=2159024400&v=beta&t=Hbknoxy5g1jk-Ql6qb0DV-qrCOZ__2BLxxY_Y-x6dlU)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    submit: {
      margin: theme.spacing(3, 0, 0),
    },
  }));

export default function Login(props) {
    const [idToken, setIdToken] = useState(null)
    
    const dispatch = useDispatch();
    const classes = useStyles();

    if(idToken) {
      dispatch(login(idToken))
    }

    useEffect(() => {

        auth.onAuthStateChanged(async nextUser => {
            console.log("currentUser changed to:", nextUser)
            

            if (auth.currentUser) {
                const idToken = await auth.currentUser.getIdToken()
                setIdToken(idToken)
                
            } else {
                setIdToken(null)
            }

            console.log("idToken changed to:", idToken)
        })
    }, [idToken])

    return (
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <p align="center"><h2>{"Please sign in with your Augustana Google Account"}</h2></p>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => signInWithGoogle()}
              >
                {"Sign In"}
            </Button>
          </div>
        </Grid>
      </Grid>
    );
}
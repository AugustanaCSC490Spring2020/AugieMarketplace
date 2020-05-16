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
<<<<<<< HEAD
import history from '../../utils/history'
import {useLocation} from 'react-router-dom';
=======
>>>>>>> 75db6c9aa84d5d4711fb555733e5750b2cd099e5

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
    let location = useLocation();

    if(idToken) {
      dispatch(login(idToken))
    }

    if(idToken) {
      dispatch(login(idToken))
    }

    function onSubmit() {
      
      if (auth.currentUser) {
        signOut()
      } else {
        signIn();
        history.push('/dashboard');
      }

      // fakeAuth.authenticate(() => {
      //   history.replace(from);
      // });
      //check if it's an augustana email and if not give error
      //store in redux that we are logged in   
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
<<<<<<< HEAD
            <p align="center"><h2>{auth.currentUser ? auth.currentUser.displayName + " is signed in" : "Please sign in with your Augustana Google Account"}</h2></p>
=======
            <p align="center"><h2>{"Please sign in with your Augustana Google Account"}</h2></p>
>>>>>>> 75db6c9aa84d5d4711fb555733e5750b2cd099e5
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
<<<<<<< HEAD
                onClick={onSubmit}
              >
                {auth.currentUser ? "Sign Out" : "Sign In"}
            </Button>

            {/* <button onClick={signIn}>Sign in with Google</button>
            <button onClick={signOut}>Sign me out</button>

            <p>The ID token is:</p>
            <code>{auth.currentUser ? idToken : "Please sign in"}</code> */}
=======
                onClick={() => signInWithGoogle()}
              >
                {"Sign In"}
            </Button>
>>>>>>> 75db6c9aa84d5d4711fb555733e5750b2cd099e5
          </div>
        </Grid>
      </Grid>
    );
}
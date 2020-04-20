import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { default as React } from 'react';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Team Oriole | '}
      <Link color="inherit" href="https://github.com/AugustanaCSC490Spring2020/AugieMarketplace">
        GitHub
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: 'fixed',
//     left: 0,
//     bottom: 0,
//     width: '100%',
//     padding: theme.spacing(3, 2),
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '100vh',
  },
  footer: {
    // padding: theme.spacing(3, 2),
    // marginTop: 'auto',
  },
}));

export default function CopyrightFooter() {
  // const classes = useStyles();

  // return (
  //   <div className={classes.root}>
  //     <CssBaseline />

  //     <footer>
  //       <Container maxWidth="sm">
  //         <Copyright />
  //       </Container>
  //     </footer>
  //   </div>
  // );

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Copyright />
      </Container>
    </div>
  );
}
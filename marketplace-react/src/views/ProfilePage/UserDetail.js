import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
});

export default function UserDetail(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.imageTitle}
        />
        <CardContent>
          <Typography component="h2" variant="h5">
              {props.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
              First Joined: {props.dayJoined}
              </Typography>
              <Typography variant="subtitle1" paragraph>
              {props.description}
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );


  //   <Card className={classes.card}>
  //       <div className={classes.cardDetails}>
  //       <CardActionArea>
  //       <Hidden xsDown>
  //       <CardMedia className={classes.cardMedia} image={props.image} title={props.imageTitle} />
  //       </Hidden>
  //         <CardContent>
  //             <Typography component="h2" variant="h5">
  //             {props.name}
  //             </Typography>
  //             <Typography variant="subtitle1" color="textSecondary">
  //             First Joined: {props.dayJoined}
  //             </Typography>
  //             <Typography variant="subtitle1" paragraph>
  //             {props.description}
  //             </Typography>
  //         </CardContent>
  //       </CardActionArea>
  //       <CardActions>
  //         <Button size="small" color="primary">
  //           Edit
  //         </Button>
  //       </CardActions>
  //       </div>
  //       <Hidden xsDown>
  //       <CardMedia className={classes.cardMedia} image={props.image} title={props.imageTitle} />
  //       </Hidden>
  //   </Card>
  // );
}

UserDetail.propTypes = {
  post: PropTypes.object,
};
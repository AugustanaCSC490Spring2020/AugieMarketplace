import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 700,
    },
    title: {
      marginTop: theme.spacing(2),
    },
}));

export default function FormConfirm(props) {
  const classes = useStyles();
  return (
      <React.Fragment>
          <Typography variant="h6" gutterBottom>
          Item Review
          </Typography>
          <List disablePadding>
              <ListItem className={classes.listItem} key={props.itemName}>
                  <ListItemText primary={props.itemName} secondary={props.itemDes} />
                  <Typography className={classes.total} variant="body2">${props.itemPrice}</Typography>
              </ListItem>
              <Typography variant="body2">Item Type: {props.itemType}</Typography>
          </List>
      </React.Fragment>
  );
}
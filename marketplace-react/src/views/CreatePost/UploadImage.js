import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
    imageIcon: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 100
    },
  }));
  
export default function UploadImage() {
    const classes = useStyles();

    return (
        <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Upload an image
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <ImageIcon className={classes.imageIcon}></ImageIcon>
            </Grid>
            <Grid item xs={12}>
            <div className={classes.root}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Upload
                    </Button>
                </label>
                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                    </IconButton>
                </label>
            </div>
            </Grid>
        </Grid>
        </React.Fragment>
    );
}
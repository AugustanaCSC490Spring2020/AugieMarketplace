import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ImageIcon from '@material-ui/icons/Image';
import ImageUploader from 'react-images-upload';

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

export default function FormImage(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Upload an image
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            {props.image == null
                ? <ImageIcon className={classes.imageIcon}></ImageIcon>
                : <img alt="preview" src={props.imageURL} style={{maxHeight: "400px",maxWidth: "400px"}}/>
             }
                
            </Grid>
            <Grid item xs={12}>
            <div className={classes.root}>
                {/* <ImageUploader
                    withIcon={true}
                    name='image'
                    buttonText='Choose image'
                    onChange={props.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    singleImage={true}
                    withPreview={true}
                /> */}
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    type="file"
                    onChange={props.uploadPicture}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Upload
                    </Button>
                </label>
                <Grid item xs={12}>
                    
                </Grid>
                
                {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                    </IconButton>
                </label> */}
            </div>
            </Grid>
        </Grid>
        </React.Fragment>
    );
}
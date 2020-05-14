import { default as React } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Container, makeStyles, Grid, ButtonBase } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles(theme => ({
    root: {
        padding: "20px",
        align: "center"
    },
    sideGallery: {

    },
    mainImage: {
        //alignItems: "center",
        //display: "flex",
        //justifyContent: "center"
    },
    mainImageButton: {
        bottom: "50%"
    },
    itemDetails: {
        height: '50px'
    },
    galleryImage: {
        margin: 'auto',
        display: 'block',
        height: '50px'
    },
    displayedImage: {
        width: '500px'
    }
}));

// "MockImages/" + props.imgs[0] + ".jpg"
const images = ["avocet", "true-macaws", "grey-parrot", "cockatiel"]
export default function ItemDetails() {
    const classes = useStyles();
    const [currImage, setCurrImage] = React.useState(0);
    const [isMouseOver, setIsMouseOver] = React.useState(false);

    const displayImage = (index) => {
        setCurrImage(index)
    }

    const scrollImage = (direction) => {
        let newIndex = currImage + direction;
        if (newIndex < 0) {
            setCurrImage(images.length - 1)
        } else if (newIndex >= images.length) {
            setCurrImage(0)
        } else {
            setCurrImage(newIndex)
        }
    }

    const getIcon = () => {
        return (isMouseOver) ? (<FavoriteIcon />) : (<FavoriteBorderIcon />)
    }

    const addToFavorites = () => {

    }

    return (
        <Container className={classes.root}>
            <Grid container spacing={2}>
                <Grid item className={classes.sideGallery}>
                    <Grid container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={1}>
                        {images.map((img, index) => (
                            <Grid item key={img} >
                                <ButtonBase className={classes.image} onClick={() => displayImage(index)}>
                                    <img className={classes.galleryImage} src={"MockImages/" + img + ".jpg"} />
                                </ButtonBase>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid item direction="column" className={classes.mainImage}>
                   
                        <IconButton onClick={() => scrollImage(-1)} className={classes.mainImageButton}>
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                        <img className={classes.displayedImage} alt="currImage" src={"MockImages/" + images[currImage] + ".jpg"} />
                        <IconButton onClick={() => scrollImage(1)} className={classes.mainImageButton}>
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    
                </Grid>

                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                I, Robot by Isaac Asimov
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                danielleosazuwa16@augustana.edu
                            </Typography>
                            <Typography variant="subtitle1">$19.00</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Description Description Description Description Description
                                Description Description Description Description Description
                                Description Description Description Description Description
                                Description Description Description Description Description
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <IconButton onClick={() => addToFavorites()} onMouseOver={() => setIsMouseOver(true)} onMouseOut={() => setIsMouseOver(false)}>
                            {getIcon()}
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}


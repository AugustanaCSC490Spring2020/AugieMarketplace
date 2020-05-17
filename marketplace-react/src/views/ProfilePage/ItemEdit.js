import { Button, ButtonBase, Dialog, DialogActions, DialogContent, DialogTitle, Grid, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { default as React } from 'react';

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

//a mess
export default function ItemEdit(props) {

    const classes = useStyles();
    let images = props.item.imgs;
    const [name, setName] = React.useState(props.item.name);
    const [price, setPrice] = React.useState(props.item.price);
    const [description, setDescription] = React.useState(props.item.description);
    const [tag, setTag] = React.useState(props.item.tags[0]);
    const [currImage, setCurrImage] = React.useState(0);

    const handleSubmit = () => {
        props.onSubmit(name, price, new Date(), description, tag)
    }

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

    return (
        <Dialog fullWidth={true} maxWidth={'xl'} className={classes.root} onClose={() => props.onClose()} open={props.open}>
            <DialogTitle id="simple-dialog-title">Edit</DialogTitle>
            <DialogContent>
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

                    <Grid item className={classes.mainImage}>

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
                                    {props.item.name}
                                </Typography>

                                <Typography variant="body2" gutterBottom>
                                    {props.item.email}
                                </Typography>
                                <Typography variant="subtitle1">${props.item.price}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {props.item.description}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Typography>Tags</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button onClick={() => props.onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => handleSubmit} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>
    )
}
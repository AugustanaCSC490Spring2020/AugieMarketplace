import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { default as React } from 'react';
import ItemDetails from '../views/ItemDetails/ItemDetails';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        position: "relative"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    overlay: {
        position: 'absolute',
        bottom: '90px',
        right: '10px',
        color: 'black',
        backgroundColor: 'white'
    }
});

export default function ItemCard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => handleClickOpen}>

                <CardMedia
                    className={classes.media}
                    image={"MockImages/" + props.imgs[0] + ".jpg"}
                    title={props.name}
                ></CardMedia>

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {"$" + props.price}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <ItemDetails
                open={open}
                handleClose={handleClose}
            />

            {/* <IconButton className={classes.overlay}>
                    <Favorite />
                </IconButton> */}

        </Card>
    );
}
import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { default as React } from 'react';

const useStyles = makeStyles({
    root: {
        position: "relative",
        width: '300px'
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
    },
});

export default function ItemCard(props) {
    const classes = useStyles();

    const viewItem = () => {
        //add route
    }

    return (
        <Container>
            <Card className={classes.root}>
                <CardActionArea onClick={() => viewItem()}>

                    <CardMedia
                        className={classes.media}
                        image={"MockImages/" + props.imgs[0] + ".jpg"}
                        title={props.name}
                    />

                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {"$" + props.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
               
                {/* <IconButton className={classes.overlay}>
                    <Favorite />
                </IconButton> */}

            </Card>


        </Container>
    );
}
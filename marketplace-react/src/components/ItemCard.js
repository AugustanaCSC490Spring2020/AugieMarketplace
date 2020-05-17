import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { default as React } from 'react';
import history from '../utils/history'

const defaultImgLink = 'https://image.flaticon.com/icons/png/512/65/65686.png'

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
    const { id, name, user, price, imgs } = props
    console.log(id)

    const pushToViewItem = () => history.push(`./items/${id}`);

    return (
        <Container>
            <Card className={classes.root}>
                <CardActionArea onClick={pushToViewItem}>

                    <CardMedia
                        className={classes.media}
                        image={imgs ? (imgs.length > 0 ? imgs[0] : defaultImgLink) : defaultImgLink}
                        title={name}
                    />

                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {"$" + price}
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
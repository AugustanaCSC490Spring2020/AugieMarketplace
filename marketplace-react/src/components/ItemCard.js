import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { default as React } from 'react';
import history from '../utils/history'
import { getItemByIDFromStore } from '../redux/actions/items'
import { useDispatch } from "react-redux";

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
    const dispatch = useDispatch()
    const { item } = props
    const { itemId, name, price, imageUrl } = item

    const pushToViewItem = () => {
        dispatch(getItemByIDFromStore(item))
        history.push(`./items/${itemId}`); 
    }

    return (
        <Container>
            <Card className={classes.root}>
                <CardActionArea onClick={pushToViewItem}>

                    <CardMedia
                        className={classes.media}
                        image={imageUrl ? (imageUrl.length > 0 ? imageUrl[0] : defaultImgLink) : defaultImgLink}
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
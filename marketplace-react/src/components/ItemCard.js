import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { blue } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        position: 'relative',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: blue[500],
    },
    overlay: {
        position: 'absolute',
        bottom: '90px',
        right: '10px',
        color: 'black',
        backgroundColor: 'white'
    }
}));

export default function ItemCard(props) {
    const classes = useStyles();
    const { name, user, price } = props;

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="mockImage.jpg"
            >
            </CardMedia>
            <IconButton className={classes.overlay}>
                <FavoriteIcon />
            </IconButton>

            {/* <CardHeader
                avatar={
                    <Avatar>{user.name.charAt(0)}</Avatar>
                }
                title={name}
                subheader={price}
            /> */}

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" >{name}</Typography>
                <Typography variant="body2" color="textSecondary" component="p" >{price}</Typography>
            </CardContent>

        </Card>
    );
}
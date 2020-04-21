import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { blue } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        position: 'relative',
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
    cardContent: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        //backgroundColor: 'rgba(245, 245, 245, 0.4)'
    },
    icon: {
        color: 'white',
    },
}));

export default function ItemCard(props) {
    const classes = useStyles();
    const { name, user, price } = props;

    return (
        <Card className={classes.root}>
            <GridListTileBar
                title={name}
                titlePosition="top"
                actionIcon={
                    <IconButton aria-label={`star ${name}`} className={classes.icon}>
                        <FavoriteIcon />
                    </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
            />
            {/* <CardContent className={classes.cardContent}>
                <Typography variant="body2" color="textSecondary" component="p" >{name}</Typography>
                <Typography variant="body2" color="textSecondary" component="p" >{price}</Typography>
            </CardContent> */}

            <CardMedia
                className={classes.media}
                image="mockImage.jpg"
            >
            </CardMedia>
        </Card>
    );
}
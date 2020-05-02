// import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { Favorite } from '@material-ui/icons';
// import React from 'react';

// const useStyles = makeStyles(theme => ({
//     root: {
//         maxWidth: 345,
//         position: 'relative',
//     },
//     media: {
//         height: 0,
//        // paddingTop: '56.25%', // 16:9
//     },
//     overlay: {
//         position: 'absolute',
//         bottom: '90px',
//         right: '10px',
//         color: 'black',
//         backgroundColor: 'white'
//     },
//     cardContent: {
//         background:
//             'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
//             'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//         //backgroundColor: 'rgba(245, 245, 245, 0.4)'
//     },
//     icon: {
//         color: 'white',
//     },
// }));

// export default function ItemCard(props) {
//     const classes = useStyles();
//     const { name, user, price, imgs } = props;

//     return (
//         // <Card className={classes.root}>
//         //     <GridListTileBar
//         //         title={name}
//         //         titlePosition="top"
//         //         actionIcon={
//         //             <IconButton aria-label={`star ${name}`} className={classes.icon}>
//         //                 <FavoriteIcon />
//         //             </IconButton>
//         //         }
//         //         actionPosition="left"
//         //         className={classes.titleBar}
//         //     />

//         //     <CardMedia
//         //         className={classes.media}
//         //         image={"MockImages/" + imgs[0] + ".jpg"}
//         //     >
//         //     </CardMedia>
//         // </Card>

//         <Card>
//             <CardMedia
//                 className={classes.media}
//                 image={"MockImages/" + imgs[0] + ".jpg"}
//             />

//             <CardContent>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                     {name}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                     {"$"+price}
//                 </Typography>
//             </CardContent>

//             <CardActions>
//                 <IconButton>
//                     <Favorite/>
//                 </IconButton>
//             </CardActions>
//         </Card>

//     );
// }


import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite } from '@material-ui/icons';
import { default as React } from 'react';

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

    const displayCard = () => {

    }
    
    return (
        <Card className={classes.root}>
            <CardActionArea onClick={displayCard()}>

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

            {/* <IconButton className={classes.overlay}>
                    <Favorite />
                </IconButton> */}

        </Card>
    );
}
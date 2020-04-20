import { makeStyles } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';
import {
    Button,
    Input,
    Container,
    CardContent,
    Card,
    TableRow,
    TableFooter,
    Typography
} from '@material-ui/core';

import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    imageIcon: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 100
    },
    choosePictureButton: {
        marginRight: 36,

    },
    takePictureButton: {
        marginRight: 36,
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    contentHeader: {
        display: 'flex',
        alignItems: 'center',
    },
    logoImage: {
    },
    contentBody: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
    },
    form: {
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 125,
        flexBasis: 700,
    },
}));

const CreatePost = () => {
    const classes = useStyles();
    const [imageFile, setImageFile] = useState([]);

    const handleChooseButton = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImageFile(event.target.files[0]);
          }
    };

    return (
        <>
            <div className={classes.content}>
                <Container className={classes.content} >
                    <Card>
                    <TableRow>
                        <div className={classes.title}>
                            <Typography variant='h6'>Add a picture of your item</Typography>
                        </div>
                    </TableRow>
                    <TableRow>
                        <Typography variant="p">
                            You will be prompted to add more information about this item in the next page.
                        </Typography>
                    </TableRow>
                    <CardContent>
                        <TableRow>
                            <ImageIcon className={classes.imageIcon}></ImageIcon>
            
                        </TableRow>
                    </CardContent>
                    <TableFooter>
                        <Input
                            className={classes.choosePictureButton}
                            color="primary"
                            size="large"
                            type="file"
                            onClick = {handleChooseButton}
                            variant="contained">Choose a photo</Input>
                        <Button
                            className={classes.takePictureButton}
                            color="primary"
                            size="large"
                            type="submit"
                            variant="contained">Take a photo</Button>
                    </TableFooter>
                    </Card>
                </Container>
            </div>
        </>
    );
};

export default CreatePost;
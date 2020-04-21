import { Container, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { default as React } from 'react';

const tags: String[] = [
    'books',
    'furniture',
    //add tags here
];

const tagStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        borderRadius: '12px'
    },
}));


export default function Tags(props) {
    const classes = tagStyles();

    return (
        <Container align="center">
            <Button variant="contained" size="small" color="primary" className={classes.margin}>
                books
        </Button>
            <Button variant="contained" size="small" color="primary" className={classes.margin}>
                furniture
        </Button>

        </Container>
    );
}

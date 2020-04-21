import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { default as React } from 'react';
import { MockItems as rows } from '../data/mockData';
import ItemCard from './ItemCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function ItemGrid() {
    const classes = useStyles();

    const card = (
        <Grid spacing={1}>
            <ItemCard name={rows[0].name}
                user={rows[0].user}
                price={rows[0].price} />
        </Grid>
    )

    let cards = [card];

    function FormRow(props) {
        
        for (let i = 0; i < props.col-1; i++) {
            cards.push(card)
        }

        console.log(cards.length)
        return (
            <React.Fragment>
                {cards}
            </React.Fragment>
        )
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item spacing={1}>
                    <FormRow col={3} />
                </Grid>
                <Grid container item spacing={1}>
                    <FormRow col={3} />
                </Grid>
            </Grid>
        </div>
    );
}
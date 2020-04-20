import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { default as React } from 'react';
import { MockItems as rows } from '../data/mockData';
import ItemCard from './ItemCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    trans: {
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        color: 'rgba(0,0,0,0.0)'
    },
}));

export default function GridTable() {
    const classes = useStyles();

    return (
        <TableContainer  className={classes.trans}  component={Paper}>
            <Table >
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id} >
                            <TableCell component='th' scope='row' align="right">
                                <ItemCard
                                    name={row.name}
                                    user={row.user}
                                    datePosted={row.datePosted}
                                />
                            </TableCell>
                            <TableCell>
                                <ItemCard
                                    name={row.name}
                                    user={row.user}
                                    datePosted={row.datePosted}
                                />
                            </TableCell>
                            <TableCell>
                                <ItemCard
                                    name={row.name}
                                    user={row.user}
                                    datePosted={row.datePosted}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
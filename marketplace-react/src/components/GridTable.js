import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination'
import { default as React } from 'react';
import MockItems from '../data/mockData';
import { Item } from '../data/marketplace';
import ItemCard from './ItemCard';
import TablePaginationActions from './TablePaginationActions'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import Container from '@material-ui/core/Container';
import shortid from 'shortid';

const useStyles = makeStyles(theme => ({
    trans: {
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        color: 'rgba(0,0,0,0.0)'
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
}));

export default function GridTable(props) {
    const classes = useStyles();
    const data = props;
    let rows = data.rows;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    console.log(rows);

    return (
        <TableContainer className={classes.trans} component={Paper}>
            <Table>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row[0].id} style={{ borderStyle: 'none' }}>
                            {row.map(cell => (
                                <TableCell component='th' scope='row' style={{ borderStyle: 'none' }}>
                                    <ItemCard
                                        name={cell.name}
                                        user={cell.user}
                                        price={cell.price}
                                        imgs={cell.imgs}
                                    />
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
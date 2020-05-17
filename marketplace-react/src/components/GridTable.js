import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { default as React } from 'react';
import ItemCard from './ItemCard';
import TablePaginationActions from './TablePaginationActions';

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
    const [rowsPerPage, setRowsPerPage] = React.useState(3);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer className={classes.trans} component={Paper} >
            <Table>
                <TableBody>
                    {/* each row will have 3 ItemCards */}
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map(row => (
                        <TableRow key={row[0].id} style={{ borderStyle: 'none' }}>
                            {/* each cell is an ItemCard */}
                            {row.map((cell, index) => (
                                <TableCell key={index} component='th' scope='row' style={{ borderStyle: 'none' }}>
                                    <ItemCard
                                        key={cell.itemId}
                                        id={cell.itemId}
                                        name={cell.name}
                                        user={cell.user}
                                        price={cell.price}
                                        imgs={cell.imgs}
                                    />
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[3, 10, 15, { label: 'All', value: -1 }]}
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
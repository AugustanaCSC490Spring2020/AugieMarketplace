import { createStyles, IconButton, makeStyles, Paper, Table, TableBody, Typography, TableCell, TableContainer, TableFooter, TablePagination, TableRow } from '@material-ui/core';
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { DeleteOutline, MailOutline } from '@material-ui/icons';
import { default as React } from 'react';
import { MockItems } from '../../data/mockData';
import TablePaginationActions from '../../components/TablePaginationActions';

const likedItems = [MockItems[0], MockItems[1], MockItems[2], MockItems[3], MockItems[4]];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexShrink: 0,
            marginLeft: theme.spacing(2.5),
        },
    }),
);

const headerStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}


export default function Cart(props) {
    const classes = Object.assign({}, useStyles(), headerStyles());

    const [page, setPage] = React.useState(0);

    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, likedItems.length - page * rowsPerPage);

    const [order, setOrder] = React.useState('desc');

    const [orderBy, setOrderBy] = React.useState('count');

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    const createSortHandler = property => event => {
        handleRequestSort(event, property);
    };

    return (
        <TableContainer component={Paper} className={classes.container} styles={{ padding: 1 }}>
            <Table stickyHeader aria-label="sticky table" className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={6}>
                            <Typography variant="h6">Your Favorites</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell
                            sortDirection={orderBy === "name" ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy === "name"}
                                direction={orderBy === "name" ? order : 'asc'}
                                onClick={createSortHandler("name")}
                            >
                                Name
                                {orderBy === "name" ? (
                                    <span className={classes.visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </span>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>

                        <TableCell
                            sortDirection={orderBy === "price" ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy === "price"}
                                direction={orderBy === "price" ? order : 'asc'}
                                onClick={createSortHandler("price")}
                            >
                                Price
                                {orderBy === "price" ? (
                                    <span className={classes.visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </span>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>

                        <TableCell>Contact Poster</TableCell>
                        <TableCell>Delete</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody style={{ borderStyle: 'none' }}>
                    {stableSort(likedItems, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, key) => {
                            return (
                                <TableRow key={key}>
                                    <TableCell>
                                        <img
                                            width='auto' height='40' src={"MockImages/" + row.imgs[0] + ".jpg"} alt={row.name} />
                                    </TableCell>
                                    <TableCell component="th" scope="row" padding="none">
                                        {row.name}
                                    </TableCell>
                                    <TableCell component="th" scope="row" padding="none">
                                        {"$" + row.price}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => props.sendEmail(row)}>
                                            <MailOutline />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => props.deleteFavorite(row)}>
                                            <DeleteOutline />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow >
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={4}
                            count={likedItems.length}
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
    )
}
import { Box, IconButton, CssBaseline, Grid, TableHead, TableSortLabel, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DeleteOutline, Edit, MailOutline } from '@material-ui/icons';
import React from 'react';
import TablePaginationActions from '../../components/TablePaginationActions';
import { MockItems } from '../../data/mockData';
import UserDetail from './UserDetail';
import ItemEdit from './ItemEdit'

const userItems = [MockItems[0], MockItems[1], MockItems[2], MockItems[3], MockItems[4]];

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
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

export default function Profile() {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, userItems.length - page * rowsPerPage);

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

  const [open, setOpen] = React.useState(false);

  //won't handle editing images in this sprint

  const openDialogue = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleSubmit = (name, price, datePosted, description, tag) => {
    //backend call
    setOpen(false)
  }

  const deleteItem = (row) => {

  }

  return (
    <React.Fragment>
      <CssBaseline />

      <Grid container>
        <Grid item>
          <Box
            display="flex"
            justifyContent="center"
            p={1}
            m={1}
          >
            <UserDetail
              name="Son Nguyen"
              dayJoined="May 11, 2020"
              description="I am a senior"
              image="https://www.w3schools.com/howto/img_avatar.png"
              imageTitle="Avatar"
            />
          </Box>
        </Grid>

        <Grid item>
          <TableContainer component={Paper} className={classes.container} styles={{ padding: 1 }}>
            <Table stickyHeader aria-label="sticky table" className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={6}>
                    <Typography variant="h6">Current Postings</Typography>
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
                    > Price
                                {orderBy === "price" ? (
                        <span className={classes.visuallyHidden}>
                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </span>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>

                  <TableCell>Edit Posting</TableCell>
                  <TableCell>Delete</TableCell>


                </TableRow>
              </TableHead>
              <TableBody style={{ borderStyle: 'none' }}>
                {stableSort(userItems, getComparator(order, orderBy))
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
                          <IconButton onClick={() => openDialogue()}>
                            <Edit />
                          </IconButton>
                          <ItemEdit
                            open={open}
                            item={row}
                            onClose={handleClose}
                            onSubmit={handleSubmit}
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={() => deleteItem(row)}>
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
                    count={userItems.length}
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
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
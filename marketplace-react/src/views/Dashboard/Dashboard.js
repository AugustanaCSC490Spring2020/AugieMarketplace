import {
  Container,
  Divider,
  CircularProgress,
  Fab,
  Tooltip,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Create } from "@material-ui/icons";
import { default as React } from "react";

import { Filters, GridTable } from "../../components";

import { useSelector, useDispatch } from "react-redux";
import { selectItems, selectItemsLoading } from "../../redux/reducers";

const useStyles = makeStyles({
  createIconFab: {
    // left: '100%',
    margin: 0,
    top: "auto",
    left: "92%",
    bottom: 20,
    position: "fixed",
  },
});
/**
 *
 * @param {*} data
 * @param {*} numCol
 */
function prepareData(data, numCol): [] {
  let rows = [],
    cells;

  for (let i = 0; i < data.length; i += numCol) {
    cells = [];
    for (let j = 0; i + j < data.length && j < numCol; j++) {
      cells.push(JSON.parse(JSON.stringify(data[i + j])));
    }
    rows.push(cells);
  }

  return rows;
}

export default function DashboardView(props) {
  const items = useSelector(selectItems);
  const itemsLoading = useSelector(selectItemsLoading);
  return (
    <Container>
      <Filters align="center" />
      <Divider />
      {itemsLoading ? (
        <Container className="mh-100">
          <div className="mh-100 justify-content-center align-items-center text-center">
            <CircularProgress size="lg" color="primary" />
            <p style={{ paddingLeft: "20px" }}>Loading Items...</p>
          </div>
        </Container>
      ) : (
        <GridTable rows={prepareData(items, 3)} />
      )}
      <Fab className={classes.createIconFab} aria-label="create-post">
        <Tooltip title="Create New Post">
          <IconButton>
            <Create />
          </IconButton>
        </Tooltip>
      </Fab>
    </Container>
  );
}

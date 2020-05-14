import { Container, Divider, CircularProgress } from "@material-ui/core";
import { default as React } from "react";
import { Filters, GridTable } from "../../components";

import { useSelector, useDispatch } from "react-redux";
import { selectItems, selectItemsLoading } from "../../redux/reducers";


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
    </Container>
  );
};

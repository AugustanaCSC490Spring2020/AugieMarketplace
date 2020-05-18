import { CircularProgress, Container, Divider } from '@material-ui/core';
import { default as React } from 'react';
import { useSelector } from "react-redux";
import { Filters, GridTable } from '../../components';
import { selectItems, selectItemsLoading } from "../../redux/reducers";
import CreatePostDialogue from '../CreatePost/CreatePostDialogue';
import { useLocation } from 'react-router-dom'
import Profile from '../ProfilePage/Profile';
import orderBy from 'lodash/orderBy'

/**
 * returns an array that represents the tabledata 'numCol' items per row
 * @param {our array of items} data 
 * @param {number of items per column} numCol 
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
    let query = "";

    const filterer = () => {
        let ret = orderBy(
            query ? items.filter(x =>
                x["name"].toLowerCase().includes(query.toLowerCase())
            ) : items);
        console.log(ret);
        return ret;
    }
    return (
        <Container>
            <Profile/>
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
                    <GridTable rows={prepareData(filterer(), 3)} />
                )}
        </Container>
    );
}

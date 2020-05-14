import { Container, Divider, Fab, Tooltip, IconButton, makeStyles } from '@material-ui/core';
import { default as React } from 'react';
import { Filters, GridTable } from '../../components';
import { MockItems } from '../../data/mockData'
import { Create } from '@material-ui/icons';

const useStyles = makeStyles({
    createIconFab: {
        // left: '100%',
        margin: 0,
        top: 'auto',
        left: '92%',
        bottom: 20,
        position: 'fixed',
    }
})
/**
 * 
 * @param {*} data 
 * @param {*} numCol 
 */
function prepareData(data, numCol): [] {
    let rows = [], cells;

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
    const classes = useStyles();
    const data = MockItems;
    return (
        <Container>
            <Filters align="center" />
            <Divider />
            <GridTable
                rows={prepareData(data, 3)}
            />

            {/* onclick link to createpost */}
            <Fab className={classes.createIconFab} aria-label="create-post">
                <Tooltip title="Create New Post">
                    <IconButton>
                        <Create/>
                    </IconButton>
                </Tooltip>
            </Fab>
        </Container>
    )
}
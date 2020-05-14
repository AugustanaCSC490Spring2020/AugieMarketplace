import { Container, Divider } from '@material-ui/core';
import { default as React } from 'react';
import { Filters, GridTable } from '../../components';
import { MockItems } from '../../data/mockData'

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
    const data = MockItems;
    return (
        <Container>
            <Filters align="center" />
            <Divider />
            <GridTable
                rows={prepareData(data, 3)}
            />
        </Container>
    )
}
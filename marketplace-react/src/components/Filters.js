import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { default as React } from 'react';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        // marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

//TODO: Add favorites
const sortTypes = [
    "What's new",
    "Price High to Low",
    "Price Low to High",
];

const productTypes = [
    "Textbook",
    "Furniture",
    "Housing",
    "Apparel",
    "Other"
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function Filters(props) {
    const classes = useStyles();
    const theme = useTheme();

    const [sortType, setSortType] = React.useState("");
    const [productType, setProductType] = React.useState("");

    const handleSort = (event) => {
        setSortType(event.target.value);
        if (sortType == "What's new") {
            props.sortNew()
        } else if (sortType == "Price High to Low") {
            props.sortDescending()
        } else {
            props.sortAscending()
        }
    }

    const handleChangeProductType = (event) => {
        setProductType(event.target.value);
    }

    return (
        <div align="center">
            {/* Sort What's new, Price High to Low, Price Low to High*/}
            <FormControl className={classes.formControl}>
                <InputLabel>Sort</InputLabel>
                <Select
                    value={sortType}
                    onChange={handleSort}
                    MenuProps={MenuProps}
                >
                    {sortTypes.map((type) => (
                        <MenuItem key={type} value={type} style={getStyles(type, sortTypes, theme)}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Type: Furniture, Books, Sublet, */}
            <FormControl className={classes.formControl}>
                <InputLabel>Product Type</InputLabel>
                <Select
                    value={productType}
                    onChange={handleChangeProductType}
                    MenuProps={MenuProps}
                    onMouseLeave={(e) => {e.currentTarget.focus=false}}
                >
                    {productTypes.map((p) => (
                        <MenuItem key={p} value={p} style={getStyles(p, productTypes, theme)}>
                            {p}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
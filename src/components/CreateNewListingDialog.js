import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Grid, IconButton, ListItem, ListItemText, ListItemIcon, TextField } from '@material-ui/core';
import { AddIcon, CloseIcon, DoneIcon } from '@material-ui/icons/Done';
import { default as React } from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
    }),
);

export default function CreateNewListingDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [inputValid, setInputValid] = React.useState(false);

    let name, user, datePosted, description;
    //TODO: tags

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        //function to create new Item
        setOpen(false);
    }

    return (
        <div>
            <ListItem button onClick={handleClickOpen}>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="New Posting" />
            </ListItem>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id='form-dialog-title'>Create New Posting</DialogTitle>
                <DialogContent>
                    <form className={classes.root} noValidate autoComplete="off">
                        <Grid item>
                            <TextField required id="plan-name" label="Plan Name" defaultValue="" />
                        </Grid>

                        <Grid>

                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose} color="primary">Cancel</Button>
                    <Button variant="contained" onClick={handleClose} color="primary">Create</Button>

                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    <IconButton disabled={inputValid} onClick={handleSubmit}>
                        <DoneIcon />
                    </IconButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
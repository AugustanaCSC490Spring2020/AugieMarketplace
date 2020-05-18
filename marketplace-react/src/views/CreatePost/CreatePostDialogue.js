import { Button, Dialog, DialogContent, Divider, IconButton, Typography, Tooltip } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import { Create } from '@material-ui/icons';
import { default as React } from 'react';
import Review from './Review';
import UpdateInfo from './UpdateInfo';
import UploadImage from './UploadImage';

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    dialog: {
        fullWidth: true,
        maxWidth: 'md'
    },
    createIconFab: {
        margin: 0,
        top: 'auto',
        left: '92%',
        bottom: 20,
        position: 'fixed',
    }
}));

const steps = ['Upload an image', "Update item's information", 'Review your item'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <UploadImage />;
        case 1:
            return <UpdateInfo />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

export default function CreatePostDialogue(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');

    const [name, setName] = React.useState("");
    const [user, setUser] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [description, setDescription] = React.useState("");
    const [img, setImg] = React.useState("");
    let tags = [];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleSubmit = () => {
        props.createPost(name, user, price, description, tags, img);
        setOpen(false);
    }

    const [imageFile, setImageFile] = React.useState([]);

    const handleChooseButton = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImageFile(event.target.files[0]);
        }
    };

    return (
        <div>
            {/* onclick link to createpost */}
            {/* <Fab className={classes.createIconFab} onClick={handleClickOpen} aria-label="create-post">
                <Tooltip title="Create New Post">
                        <Create/>
                </Tooltip>
            </Fab> */}

            <Tooltip title="Create New Post">
                <IconButton color="inherit" onClick={handleClickOpen}>
                    <Create />
                </IconButton>
            </Tooltip>

            <Dialog open={open}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                onClose={handleClose}
                className={classes.dialog}>
                {/* <DialogTitle>
                    <Typography>New Posting?</Typography>
                </DialogTitle>

                <DialogContent>
                    <form className={classes.root} noValidate autoComplete="off">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="price"
                                    name="price"
                                    label="Price"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="itemType" label="Type" value="Other" select>
                                    <MenuItem value="Textbook">Textbook</MenuItem>
                                    <MenuItem value="Dorm Accessories">Dorm Accessories</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid>
                                <Input
                                    className={classes.choosePictureButton}
                                    color="primary"
                                    size="large"
                                    type="file"
                                    onClick={handleChooseButton}
                                    variant="contained">Choose a photo</Input>
                                
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="itemName"
                                    name="itemName"
                                    label="Name of Item"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="description"
                                    name="description"
                                    label="Description"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </form> */}

                <DialogContent>
                    <main
                        className={classes.layout}
                    // style={{ borderStyle: 'none' }}
                    >
                        <Paper className={classes.paper}>
                            <Typography component="h1" variant="h4" align="center">
                                Post an item</Typography>
                            <Divider />
                            <Stepper activeStep={activeStep} className={classes.stepper}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <React.Fragment>
                                {activeStep === steps.length ? (
                                    <React.Fragment>
                                        <Typography variant="h5" gutterBottom>
                                            Your item has been posted successfully.</Typography>
                                    </React.Fragment>
                                ) : (
                                        <React.Fragment>
                                            {getStepContent(activeStep)}
                                            <div className={classes.buttons}>
                                                {activeStep !== 0 && (
                                                    <Button onClick={handleBack} className={classes.button}>
                                                        Back
                                                    </Button>
                                                )}
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleNext}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Post your item' : 'Next'}
                                                </Button>
                                            </div>
                                        </React.Fragment>
                                    )}
                            </React.Fragment>
                        </Paper>
                    </main>
                </DialogContent>

                {/* <DialogActions>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    <IconButton onClick={handleSubmit}>
                        <DoneIcon />
                    </IconButton>
                </DialogActions> */}
            </Dialog>
        </div>
    );
}
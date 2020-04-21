import { Dialog, DialogContent, DialogTitle, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
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
export default function CreatePlanDialog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);

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


    return (
        <div>
            <ListItem button onClick={handleClickOpen}>
                <ListItemIcon>
                    <CreateIcon />
                </ListItemIcon>
                <ListItemText primary="New Post" />
            </ListItem>
            <Dialog open={open} onClose={handleClose} className={classes.dialog}>
                <DialogContent>
                    <main
                        className={classes.layout}
                    // style={{ borderStyle: 'none' }}
                    >
                        <Paper>
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
            </Dialog>
        </div>
    );
}
import React, { Component } from 'react';
import FormImage from './FormImage';
import FormDetail from './FormDetail';
import FormConfirm from './FormConfirm';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const styles = theme => ({
    appBar: {
      position: 'relative',
    },
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
  })
  
class PostItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      image: null,
      imageURL: null,
      itemPrice: null,
      itemType: null,
      itenName: null,
      itemDes: null,
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

  uploadPicture = event => {
    this.setState({
        image: event.target.files[0],
        imageURL: URL.createObjectURL(event.target.files[0]),
    });
}

  handleSubmit = event => {
    event.preventDefault()
    const { image, imageURL, itemPrice, itemType, itemName, itemDes } = this.state
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 3? 4: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
    if(currentStep === 4){
      axios({
        method: 'delete',     //HTTP method
     url:`https://20200514t221321-dot-augiemarketplace-276519.uc.r.appspot.com/post/item?userId=crossorigin`,
        // headers: {'Authorization': 'Bearer'}, 
        data: { // This is the body part fill out with the props
          name: this.state.itemName,
          description: this.state.itemDes,
          price: this.state.itemPrice,
          email: "sonnguyen16@augustana.edu",
          isAvailable: true,
        }
      }).then(response => {
   // if item is posted do smthg 
        if (response.status === 200) {
   }
      }).catch(error => {
        console.log(error);
      });
    }
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  getStepContent(step) {
    switch (step) {
        case 1:
          return (
            <FormImage
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              uploadPicture={this.uploadPicture}
              image={this.state.image}
              imageURL={this.state.imageURL}
            />
          );
        case 2:
          return (
            <FormDetail
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              image={this.state.image}
              imageURL={this.state.imageURL}
              itemName={this.state.itemName}
              itemPrice={this.state.itemPrice}
              itemType={this.state.itemType}
              itemDes={this.state.itemDes}
            />
          );
        case 3:
          return (
            <FormConfirm
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              image={this.state.image}
              imageURL={this.state.imageURL}
              itemName={this.state.itemName}
              itemPrice={this.state.itemPrice}
              itemType={this.state.itemType}
              itemDes={this.state.itemDes}
            />
          );
        default:
          throw new Error('Unknown step');
    }
  }

  render() {
    const { classes } = this.props;
    const steps = ['Upload an image', "Update item's information", 'Review your item'];

    return (
        <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Post an item
            </Typography>
            <Stepper activeStep={this.state.currentStep - 1} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {this.state.currentStep === steps.length + 1 ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Your item has been posted successfully.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(this.state.currentStep)}
                  <div className={classes.buttons}>
                    {this.state.currentStep !== 1 && (
                      <Button onClick={this._prev} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this._next}
                      className={classes.button}
                      disabled={(this.state.image==null && this.state.currentStep===1) ||
                                ((this.state.itemName==null ||
                                this.state.itemType==null ||
                                this.state.itemPrice==null||
                                this.state.itemDes==null) && this.state.currentStep===2)}
                    >
                      {this.state.currentStep === steps.length ? 'Post your item' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(PostItemForm);
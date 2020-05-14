import { Button, CardContent, FormControl, FormHelperText, Input, InputAdornment, InputLabel, Select, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageIcon from '@material-ui/icons/Image';
import clsx from 'clsx';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageIcon: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 100,
    margin: 0,
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  inputField: {
    width: '25ch',
  },
  textField: {
    width: '35ch',
  },
  submitButton: {
    marginRight: 36,
  },
}));

export default function CreatePostForm() {
  const classes = useStyles();
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [nameOfItem, setNameOfItem] = useState('');
  const [type, setType] = useState('');

  const handleChange = (prop) => (event) => {
    if (prop === 'price') setPrice(event.target.value);
    if (prop === 'nameOfItem') setNameOfItem(event.target.value);
    if (prop === 'type') setType(event.target.value);
    if (prop === 'description') setDescription(event.target.value);
  };

  const handleSubmit = () => {
    console.log("price : " + price);
    console.log("nameOfItem : " + nameOfItem);
    console.log("type : " + type);
    console.log("description : " + description);
  };

  return (
    <>
      <CardContent>
        <TableRow>
          <ImageIcon className={classes.imageIcon}></ImageIcon>
        </TableRow>
      </CardContent>
      <div className={classes.root}>
        <FormControl required className={classes.margin}>
          <InputLabel>Price</InputLabel>
          <Input
            required={true}
            onChange={handleChange('price')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
        <FormControl required className={classes.margin}>
          <InputLabel>Name Of Item</InputLabel>
          <Input
            required={true}
            onChange={handleChange('nameOfItem')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl required className={classes.margin}>
          <InputLabel>Type</InputLabel>
          <Select
            native
            onChange={handleChange('type')}
          >
            <option aria-label="None" value="" />
            <option value={'textbook'}>TextBook</option>
            <option value={'dormAccessories'}>Dorm Accessories</option>
            <option value={'other'}>Other</option>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      <div className={classes.root}>
        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
          <InputLabel>Description</InputLabel>
          <Input
            onChange={handleChange('description')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          <FormHelperText>Optional</FormHelperText>
        </FormControl>
      </div>
      <Button
        className={classes.submitButton}
        color="primary"
        size="large"
        type="submit"
        onClick={handleSubmit}
        variant="contained">Submit</Button>
    </>
  );
}

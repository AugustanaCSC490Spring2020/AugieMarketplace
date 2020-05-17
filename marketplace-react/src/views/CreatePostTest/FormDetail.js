import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import  InputAdornment from '@material-ui/core/InputAdornment';

export default function FormDetail(props) {
  return (
    <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Update item's information
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="itemPrice"
          name="itemPrice"
          label="Price"
          type="number"
          fullWidth
          InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          onChange={props.handleChange}
          defaultValue={props.itemPrice}
          helperText="Please enter a number"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
          <TextField required id="itemType" label="Type" value={props.itemType} name="itemType"
                    onChange={props.handleChange}
                    defaultValue={props.itemType} select>
              <MenuItem value="Textbook">Textbook</MenuItem>
              <MenuItem value="Dorm Accessories">Dorm Accessories</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
          </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="itemName"
          name="itemName"
          label="Name of Item"
          inputProps={{ maxLength: 50 }}
          fullWidth
          onChange={props.handleChange}
          defaultValue={props.itemName}
          helperText="Name of the item should be 50 characters or less"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="itemDes"
          name="itemDes"
          label="Description"
          multiline
          fullWidth
          onChange={props.handleChange}
          defaultValue={props.itemDes}
        />
      </Grid>
    </Grid>
  </React.Fragment>
  );
}
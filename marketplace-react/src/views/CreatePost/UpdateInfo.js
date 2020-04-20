import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import  InputAdornment from '@material-ui/core/InputAdornment';

export default function UpdateInfo() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Update item's information
      </Typography>
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
    </React.Fragment>
  );
}
/**
  This is field information section of registration components

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  @date: 2/10/2019

**/

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {firstPartStateNames} from './RegistrationConstants';

export const FieldInformationSection = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your field information
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id={firstPartStateNames.schoolName}
            name={firstPartStateNames.schoolName}
            label="School"
            fullWidth
            value={props[firstPartStateNames.schoolName]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.schoolName, true, false)}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id={firstPartStateNames.gradeLevel}
            name={firstPartStateNames.gradeLevel}
            label="Grade"
            fullWidth
            value={props[firstPartStateNames.gradeLevel]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.gradeLevel, true, false)}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            optional
            id={firstPartStateNames.gradeLevel}
            name={firstPartStateNames.gradeLevel}
            label="Major"
            fullWidth
            value={props[firstPartStateNames.gradeLevel]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.gradeLevel, true, false)}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id={firstPartStateNames.selectAreaOfInterest}
            fullWidth
            select
            label="Select area of interest/specialty"
            helperText="Select your area of interest or specialty"
            value={props[firstPartStateNames.selectAreaOfInterest]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.selectAreaOfInterest, true, false)}}
            >
            <MenuItem key="accounting" value="accounting">Accounting</MenuItem>
            <MenuItem key="finance" value="finance">Finance</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            optional
            id={firstPartStateNames.company}
            name={firstPartStateNames.company}
            label="Company"
            fullWidth
            autoComplete="company"
            value={props[firstPartStateNames.company]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.company, true, false)}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            optional
            id={firstPartStateNames.title}
            name={firstPartStateNames.title}
            label="Title (Company)"
            fullWidth
            autoComplete="company"
            value={props[firstPartStateNames.title]}
            onChange={(newValue) => {props.handleTextValueChange(newValue,firstPartStateNames.title, true, false)}}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
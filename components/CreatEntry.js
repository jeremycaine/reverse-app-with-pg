import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { useStyles } from '../components/Styles';

function CreateEntry () {
  const classes = useStyles();
    
  const [textInput, setTextInput] = useState('');
  const [textOutput, setTextOutput] = useState('');
  const [id, setId] = useState('');
  const [txt, setTxt] = useState('');
  const [isreverse, setIsReverse] = useState('');
  const [reverseChecked, setReverseChecked] = useState(false);  
  const [submitting, setSubmitting] = useState(false)

  const handleChoiceChange = (event) => {
      if (event.target.checked) {
          setReverseChecked(true);
      } else {
          setReverseChecked(false);
      }
    };
    
  const handleTextInputChange = (event) => {
      setTextInput(event.target.value);
  };
  
  const handleSubmit = async (event) => {
      event.preventDefault();
      setSubmitting(true);
  
      var inputText = textInput;
      var outputText;
  
      if (reverseChecked) {
        outputText = inputText.split("").reverse().join("");
      } else {
        outputText = inputText;
      }
      setTextInput("");
      setTextOutput(outputText); 
      setSubmitting(false);

      const res = await fetch('/api/reverse/create-entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          txt: outputText,
          isReverse: reverseChecked,
        }),
      })
      const reverse = await res.json();

      if (!res.ok) 
        throw Error(json.message);      
  }

  return (
      <div>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="textInput"
          label="Input Text"
          name="textInput"
          autoComplete="textInput"
          autoFocus
          value={textInput}
          onChange={handleTextInputChange}
          />
          <FormControlLabel
          control={<Checkbox value={reverseChecked} onChange={handleChoiceChange} color="primary" />}
          label="Reverse"
          />
          
          <Button 
          disabled={submitting} 
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          >
          {submitting ? 'Creating ...' : 'Go'}
          </Button>
      </form>
      <br />
        <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {textOutput}
              </Paper>
            </Grid>
        </Grid>
      </div>  
  )
  }
  
export default CreateEntry;

/*
        <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">Text</TableCell>
          <TableCell align="right">Is Reveresed?</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {id}
            </TableCell>
            <TableCell align="right">{txt}</TableCell>
            <TableCell align="right">{isreverse}</TableCell>
          </TableRow>
      </TableBody>
    </Table>
  </TableContainer>

  */


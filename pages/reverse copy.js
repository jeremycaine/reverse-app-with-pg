import React from 'react';
import { Component } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';
import { useStyles } from '../components/Styles';
import { createEntry } from '../utils/entry';

function useStylesHook(Component) {
  return function WrappedComponent(props) {
    const classes = useStyles();
    const entry = createEntry();
    return <Component {...props} classes={classes} entry={entry} />;
  }
}

class Reverse extends Component {
  constructor (props) {
    super(props)

    this.state = {
      textInput: '',
      error: '',
      textOutput: '',
      reverseChecked: false,
    };
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleChoiceChange = this.handleChoiceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChoiceChange (event) {
    if (event.target.checked) {
      this.state.reverseChecked = true;
    } else {
      this.state.reverseChecked = false;
    }
  }
  handleTextInputChange (event) {
    this.setState({ textInput: event.target.value })
  }

  async handleSubmit(event) {
    event.preventDefault();

  
    var inputText = this.state.textInput;
    var outputText;

    if (this.state.reverseChecked) {
      outputText = inputText.split("").reverse().join("");
    } else {
      outputText = inputText;
    }
  
    const resdata = this.props.entry.createEntry(outputText, this.state.reverseChecked);
    console.log("resdata ", resdata);
    
    this.setState({textOutput: outputText });
  }

  render() {
    const classes = this.props.classes;
    const entry = this.props.entry;

    return (
      <Layout>
        <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h5" component="h1" gutterBottom>
            Reverse
          </Typography>
          <form onSubmit={this.handleSubmit} className={classes.form} noValidate>
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
              value={this.state.textInput}
              onChange={this.handleTextInputChange}
            />
            <FormControlLabel
            control={<Checkbox value={this.state.reverseChecked} onChange={this.handleChoiceChange} color="primary" />}
            label="Reverse"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Go
            </Button>
          </form>
          <br />
          <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  {this.state.textOutput }
                </Paper>
              </Grid>
          </Grid>
        </Box>
        </Container>
      </Layout>
    );
  }
}

export default useStylesHook(Reverse);
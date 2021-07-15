import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';
import CreateEntry from '../components/CreatEntry';

import { useStyles } from '../components/Styles';

function Reverse () {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          Reverse
        </Typography>
        <CreateEntry /> 
      </Box>
      </Container>
    </Layout>
  );

};

export default Reverse;
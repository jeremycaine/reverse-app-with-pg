import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';
import GetEntries from '../components/GetEntries';

import { useStyles } from '../components/Styles';

function Show () {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          Show Entries
        </Typography>
        <GetEntries />
      </Box>
      </Container>
    </Layout>
  );

};

export default Show;
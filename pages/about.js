import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Layout from '../components/Layout';
import { useStyles } from '../components/Styles';

export default function About() {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="sm">
      
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About page
        </Typography>
        <Typography variant="h7" align="left" color="textPrimary" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
      </Container>
    </Layout>
  );
}

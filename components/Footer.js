import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import Copyright from '../components/Copyright';
import { useStyles } from '../components/Styles';

const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us'],
    },
    {
      title: 'Features',
      description: ['Cool stuff', 'Random feature', 'Developer stuff'],
    },
    {
      title: 'Resources',
      description: ['Resource #1', 'Resource #2', 'Resource #3'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];


export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
        {/* Footer */}
        <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
        </Container>
        {/* End footer */}
    </React.Fragment>
  );
}

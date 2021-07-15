import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Link from '../components/Link';

import { useStyles } from '../components/Styles';

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <AppBar position="relative" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link href="/">Reverse
          </Link>
          
        </Typography>
        <nav>
          <Link variant="button" color="textPrimary" href="/about" className={classes.link}>
            About
          </Link>
        </nav>
        <Button href="/reverse" color="primary" variant="outlined" className={classes.link}>
          Reverse
        </Button>
      </Toolbar>
    </AppBar>     
    </React.Fragment>
  );
}  
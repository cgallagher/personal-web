import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { Link, Grid, AppBar, Toolbar, IconButton } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  socialIcon: {
    color: '#fff'
  }
}));

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const classes = useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Chris Gallagher</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>

        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Grid container>Chris Gallagher</Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              spacing={2}
            >
              
              <Grid item>
                <Link href="http://www.github.com/cgallagher" target="_blank" className={classes.socialIcon}>
                  <GitHubIcon />
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://www.twitter.com/cgallagher" target="_blank" className={classes.socialIcon}>
                  <TwitterIcon />
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://www.instagram.com/cgallagher" target="_blank" className={classes.socialIcon}>
                  <InstagramIcon />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://www.linkedin.com/in/chrisgallagher/" target="_blank" className={classes.socialIcon}>
                  <LinkedInIcon />
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
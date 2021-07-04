import React from 'react';

import { Container, Typography, Grid, Box, Link } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingTop: '20px'
  },
}));

const profilePic = '/me-removebg.png'

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.header} maxWidth="md">
        <Box my={4}>
          <Typography variant="h1" component="h1" gutterBottom>
            Chris Gallagher
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Grid
          container
        >
          <Grid xs={6} item>
            <Grid xs={12}>
              <Typography variant="h2" component="h2" gutterBottom>
                About Me
              </Typography>
            </Grid>
            <Typography variant="body1" component="div">
              I'm Chris, a Dad, Husband, Leeds Supporter &amp; Software Engineer, living in Waterford, Ireland. I work at <Link href="https://www.stitcherads.com" target="_blank">StitcherAds</Link>, where I run our Engineering Team (<Link href="https://www.stitcherads.com/careers" target="_blank">We're hiring</Link> by the way!).
              <br />
              <br />
              
            </Typography>
          </Grid>
          <Grid xs={6} item>
            <div>
              <img src={profilePic} alt="Its me!" width="400" height="371" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
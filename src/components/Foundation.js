import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 200,
  },
}));

function FoundationPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Pet Shop
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" className={classes.title}>
          Featured Pets
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/300x200.png?text=Pet+Image"
                title="Pet Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Pet Name
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a description of the pet. It could be a short paragraph or a few sentences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/300x200.png?text=Pet+Image"
                title="Pet Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Pet Name
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a description of the pet. It could be a short paragraph or a few sentences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/300x200.png?text=Pet+Image"
                title="Pet Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Pet Name
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a description of the pet. It could be a short paragraph or a few sentences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FoundationPage;

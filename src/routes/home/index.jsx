import React from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  //Paper,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleButton1Click = () => {
    history.push("/login");
  };

  return (
    <Container maxWidth={false}>
      <Grid container xs={12}>
        <Grid container item xs={4} alignItems="center" direction="column">
          <Grid item component={Typography}>
            Grilla 1
          </Grid>
          <Grid
            item
            component={Button}
            onClick={handleButton1Click}
            variant="contained"
            color="primary"
          >
            Clickeame
          </Grid>
        </Grid>
        <Grid container item xs={4} alignItems="center" direction="column">
          <Grid item component={Typography}>
            Grilla 2
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={4}
          alignItems="center"
          direction="column"
          style={{ backgroundColor: "#00FF00", height: "100%" }}
        >
          <Grid item component={Typography}>
            Grilla 3
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

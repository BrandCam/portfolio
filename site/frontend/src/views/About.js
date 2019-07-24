import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import CurvyLines from "../assets/CurvyLines.png";
import Values1 from "../assets/Values1.svg";
import Values2 from "../assets/Values2.svg";
import Values3 from "../assets/Values3.svg";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

function About(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={CurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={Values1} alt="suitcase" />
              <Typography variant="h6" className={classes.title}>
                Rest Easy
              </Typography>
              <Typography variant="h5">
                {
                  "Relax knowing I'll do everything possible to help create you more busness"
                }
                {
                  ", a modern website is one of the esiest ways to convay exactly what you can do for your customers."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={Values2} alt="graph" />
              <Typography variant="h6" className={classes.title}>
                New experiences
              </Typography>
              <Typography variant="h5">
                {
                  "Lets set sail in search of fine weather and new technologies "
                }
                {
                  "Storms come and go, yet the lessons they teach help push us to fairer seas."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={Values3} alt="clock" />
              <Typography variant="h6" className={classes.title}>
                Competetive rates
              </Typography>
              <Typography variant="h5">
                {"Quality products are built by people who enjoy what they do."}
                {
                  "Feel free to contact me about anything from a small site update, to a complete rehash."
                }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);

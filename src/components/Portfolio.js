import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import tulaa from "../images/tulaacrm.png";
import julla from "../images/cure.png";
import vitea from "../images/Vitea.jpeg";
import gradegrab from "../images/gradegrab.png";
import todoapp from "../images/todoapp.png";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Tulaa CRM",
    description: `A client relationship management for Tulaa. Tulaa is a startup that 
    provides small scale farmers with information, loans and market for their products.
    The frameworks used include Angular and material UI`,
    image: tulaa,
  },
  {
    name: "Julla",
    description: `Julla is a cloud based ecommerce site that enables merchants to set up
    online stores. The frameworks used include React JS, redux and Material UI.`,
    image: julla,
  },
  {
    name: "Vitea Health",
    description: `An electronic medical system that allows users to book appointments with
    doctors, view medical records and make payments for health services. Doctors can also post patients
    medical records and view their medical history. I made the backend using flask restful framework.`,
    image: vitea,
  },
  {
    name: "GradeGrab",
    description: `A platform for hiring writers and tutors to write essays or help with an 
    assignment. It also enables the client to pay via paypal. The frameworks used include
    React JS, Material UI`,
    image: gradegrab,
  },
  {
    name: "Todo App",
    description: `A android app that enables users to add, delete, view and mark done 
    on a list of thing to be done. The framework used is flutter.`,
    image: todoapp,
  },
  {
    name: "Vitea Lab",
    description: `A lab web app that allows lab staff to record their findings and manage
    their schedule. The frameworks used include React JS, redux and material UI.`,
    image: project6,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;

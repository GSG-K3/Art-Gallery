import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import ArtCard from "../artCard/ArtCard";

function Home() {
  return (
    <Grid container direction="row" spacing={2} justify="space-around">
      {data.map((info) => {
        // data : its the data from data base  {title , artist, imageurl }.
        return (
          <Grid item xs={6} sm={4} lg={3}>
            <ArtCard
              title={info.title}
              artist={info.artist}
              imageurl={info.imageurl}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Home;

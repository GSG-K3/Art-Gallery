import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import ArtCard from "../artCard/ArtCard";

function Home() {
  const data = [
    {title: 'Dog', artist: "somaya", imageurl:'https://imgc.allpostersimages.com/img/print/u-g-F13PZJ0.jpg?w=550&h=550&p=0'},
    {title: 'Cat', artist: "Beno", imageurl:'https://cdn.shopify.com/s/files/1/1039/2274/products/lips_large.jpeg?v=1452114778'},
    {title: 'Cat', artist: "Beno", imageurl:'https://i.pinimg.com/236x/ca/1e/24/ca1e24af92e70d2db2ea993634236ca8--dog-artwork-pet-art.jpg'},
    {title: 'horse', artist: "Bebo", imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdzvrd_My_DiEtzSanE5g6J368qFf7Lc-JMA&usqp=CAU'},
    {title: 'Dog', artist: "somaya", imageurl:'https://imgc.allpostersimages.com/img/print/u-g-F13PZJ0.jpg?w=550&h=550&p=0'},
    {title: 'Cat', artist: "Beno", imageurl:'https://cdn.shopify.com/s/files/1/1039/2274/products/lips_large.jpeg?v=1452114778'},
    {title: 'Cat', artist: "Beno", imageurl:'https://i.pinimg.com/236x/ca/1e/24/ca1e24af92e70d2db2ea993634236ca8--dog-artwork-pet-art.jpg'},
    {title: 'horse', artist: "Bebo", imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdzvrd_My_DiEtzSanE5g6J368qFf7Lc-JMA&usqp=CAU'}
  ]  ;

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

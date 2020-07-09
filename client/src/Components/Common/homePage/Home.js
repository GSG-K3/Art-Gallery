import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import ArtCard from "../artCard/ArtCard";
import axios from "axios";
import RecentArtSlider from "../RecentArtSlider/RecentArtSlider";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Categories from "../categoriesSlider/CategoriesSlider";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import green from "@material-ui/core/colors/green";
import customizePhoto from "./customize.png";

function Home() {
  const classes = useStyles();
  const [artwork, setArtwork] = useState(null);
  useEffect(() => {
    if (artwork) {
      return;
    }
    axios
      .get("/api/get-art")
      .then((result) => setArtwork(result.data))
      .catch((err) => console.log(err));
  }, [artwork]);

  return (
    <Grid container direction="column" className={classes.root}>
      <Header />
      <RecentArtSlider />
      <Grid container direction="column" className={classes.category}>
        <div className={classes.textDiv} >
          <ArrowBackIcon style={{ color: green[400] }} fontSize="large" />
          <Typography variant="h6" align="right" className={classes.text}>
            اكتشف الفن
          </Typography>
        </div>

        <Typography variant="p" align="right" className={classes.text}>
          تصفح الاعمال الفنية حسب الفئة
        </Typography>
        <Categories />
      </Grid>
      <div className={classes.customizeDiv} >
        <div className={classes.textDiv} >
          <ArrowBackIcon style={{ color: green[400] }} fontSize="large" />
          <Typography variant="h6" className={classes.text}>
            اختر ما يناسب محيطك
          </Typography>
        </div>
        <Typography variant="p" align="right" className={classes.text}>
          يمكنك تجربة لوحاتك المفضلة للتحقق من ملائمتها
        </Typography>
        <img src={customizePhoto} alt="customize art" style={{marginTop:15,}} />
      </div>
      <div className={classes.galleryDiv} >
        <Typography variant="h6" align="right" className={classes.text}>
          المعرض الفني
        </Typography>
        <Typography variant="p" align="right" className={classes.text}>
          اخر الاعمال الفنية المضافه لمعرضنا
        </Typography>
      </div>
      <Grid container direction="row" spacing={2} justify="space-around" >
        {artwork
          ? artwork.map((art) => {
              // data : its the data from data base  {title , artist, imageurl }.
              return (
                <Grid item xs={6} direction="row">
                  <ArtCard
                    title={art.name}
                    category={art.caregory}
                    imageurl={art.photo_url}
                    key={art.id}
                  />
                </Grid>
              );
            })
          : null}
      </Grid>
      <Navbar />
    </Grid>
  );
}

export default Home;

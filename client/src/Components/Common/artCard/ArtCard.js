import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 190,
    maxHeight: 300,
  },
});

export default function ArtCard(props) {
  const classes = useStyles();
  const { title, imageurl ,category} = props;

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="210"
          image={imageurl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

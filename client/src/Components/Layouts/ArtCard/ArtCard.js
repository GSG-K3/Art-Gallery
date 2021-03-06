import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles({
  root: {
    maxWidth: 190,
    maxHeight: 300,
    border:'1px solid',
    borderColor:grey[400],
    borderRadius:10,
  },
});

export default function ArtCard(props) {
  const classes = useStyles();
  const { title, imageurl ,category, cardKey } = props;

  return (
    <Card className={classes.root} key={cardKey} >
      <CardActionArea>
        <CardMedia
          component='img'
          alt={title}
          height='210'
          image={imageurl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant='subtitle1' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p' >
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

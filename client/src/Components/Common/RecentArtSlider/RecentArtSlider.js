import React , {useEffect} from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid } from '@material-ui/core'
import axios from 'axios'
import useStyles from './sliderStyle'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [recentArt , setRecentArt] = React.useState(null)
  const [error , setError] = React.useState(null)
  const maxSteps =3

  useEffect(()=>{
      if(recentArt){
         return
      }
       else {
        axios.get('/api/get-art')
        .then(res => setRecentArt(res.data))
        .catch(err => setError(err))
       }
  },[recentArt])
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
        {
            recentArt?
            <Grid container spacing={3} justify='center' alignItems='center'>
         <Grid item xs={12}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                >
                {recentArt.map((step, index) => (
                    <div key={step.name}>
                    {Math.abs(activeStep - index) <= 2 ? (
                        <Paper square elevation={0} className={classes.header}>
                            <Typography className={classes.text}>{recentArt[activeStep].name}</Typography>
                            <img className={classes.img} src={recentArt[activeStep].photo_url} alt={step.name} />
                            <MobileStepper
                            variant="progress"
                            steps={maxSteps}
                            className={classes.stepperIcon}
                            activeStep={activeStep}
                            nextButton={
                                <Button size="small" onClick={handleNext} 
                                disabled={activeStep === maxSteps - 1}
                                >
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft   /> : <KeyboardArrowRight color='primary' />}
                                </Button>
                            }
                            />
                        </Paper>
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
        </Grid>
     </Grid>
       :null }
    </div>
  );
}

export default SwipeableTextMobileStepper;
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Offering a restaurant, J-A Luxury Suites by EcoSignature is located in Ile Oluji. Each room here will provide you with a TV, air conditioning and a minibar. There is also an electric kettle. Private bathroom also comes with free toiletries. You can enjoy city view from the room. At J-A Luxury Suites by EcoSignature you will find a 24-hour front desk',
    imgPath:
      'https://th.bing.com/th/id/R.088fdda64bdd040f37dfd8b6c0e94f17?rik=XU%2b%2fidunFZbjMQ&riu=http%3a%2f%2fbuzznigeria.com%2fwp-content%2fuploads%2f2015%2f06%2fhouse-3.jpg&ehk=pz5Q1idiZ8X1gJk%2bBsvPhW8ynYvKLf8BjA%2bwqfqjKnE%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    label: 'An Estate Apartment for rent at Lekki Phase 1 Lagos State',
    imgPath:
      'https://buzznigeria.com/wp-content/uploads/2015/06/Lekki.jpg',
  },
  {
    label: 'Luxury house for sale at Banna Island, Lagos State',
    imgPath:
      "https://www.resolutionlawng.com/wp-content/uploads/2020/09/house-in-Nigeria-image.jpeg",
  },
  {
    label: 'Mansion for Sale at Mainland, Lagos State',
    imgPath:
    "https://www.wealthresult.com/wp-content/uploads/2016/03/Buying-House-In-Lagos-e1457431511855.jpg",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box xs={12} md={8} sx={{ maxWidth: 800, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 100,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 450,
                  display: 'block',
                  maxWidth: 800,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
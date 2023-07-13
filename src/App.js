import './App.css';
import Message from './components/Message';
import PictureAvatar from './components/PictureAvatar';
import FormPropsTextFields from './components/Form';
import ResponsiveAppBar from './components/Header';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HouseCard from './components/House';
import HomeCard from './components/House';
import SwipeableTextMobileStepper from './components/Carousel';
import SimpleBottomNavigation from './components/Footer';
import MediaControlCard from './components/Agent'; 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App App-header ">
      <ResponsiveAppBar/>
      <div>
      <Box className='Big' sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <div className='small'>
          <HouseCard housename="Estate" price="$50,000.00" tag="This House are up for sale at Lekki Phase 2" src={process.env.PUBLIC_URL+"/assets/Lekki1.jpg"}/>
          </div>
          <div className='small'>
          <HomeCard housename="Bungalow" price="$13,000.00" tag="This House are up for sale at Aja" src={process.env.PUBLIC_URL+"/assets/Lekki2.jpeg"}/>
          </div>
          <div className='small'>
          <HomeCard housename="Mansion" price="$25,000.00" tag="This House are up for sale at Banana Island" src={process.env.PUBLIC_URL+"/assets/Lekki2.jpeg"}/>
          </div>
          <div className='small'>
          <HomeCard housename="Mansion" price="$36,000.00" tag="This House are up for sale at Lekki Phase 1" src={process.env.PUBLIC_URL+"/assets/1.jpg"}/>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
        <div className='small'>
        <SwipeableTextMobileStepper/>
        </div>
        <div className='small'>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={6}>
          <div>
          <MediaControlCard xs={12} md={8} name="Engr Praise" description="Buy a legit houses and land properties" contact="+2349019445903" src={process.env.PUBLIC_URL+"/assets/CEO.png"}/>
          </div>
        </Grid>
        <Grid item xs={6}>
        <div>
        <MediaControlCard name="Engr. Limah" description="Buy a legit houses and land properties" contact="+2349019445903" src={process.env.PUBLIC_URL+"/assets/oli.jpg"}/>
          </div>
        </Grid>
        <Grid item xs={6}>
        <div>
        <MediaControlCard name="Builder Olivia" description="Buy a legit houses and land properties" contact="+234903759442"
        src={process.env.PUBLIC_URL+"/assets/limah.png"}/>
          </div>
        </Grid>
        <Grid item xs={6}>
        <div>
        <MediaControlCard name="Builder David" description="Buy a legit houses and land properties" contact="+2349019445903" src={process.env.PUBLIC_URL+"/assets/david.jpg"}/>
          </div>
        </Grid>
      </Grid>
      </div>
      </Grid>
      </Grid>
    </Box>
  </div>
      <SimpleBottomNavigation/>
    </div>
  );
}

export default App;

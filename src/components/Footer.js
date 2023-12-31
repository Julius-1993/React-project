import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
      <Box sx={{ width: "100%"}}>
      <BottomNavigation position="fixed" style={{backgroundColor: "rgb(141, 244, 210)", height: 50}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents Views" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Houses" icon={<HomeIcon />} />
        <BottomNavigationAction label="Contact Us" icon={<AddIcCallIcon />} />
      </BottomNavigation>
    </Box>
  );
}
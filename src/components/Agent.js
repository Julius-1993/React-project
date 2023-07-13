import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Button from '@mui/material/Button';
import PictureAvatar from './PictureAvatar';

export default function MediaControlCard(props) {
  const theme = useTheme();

  return (
    <Card xs={12} sx={{ maxWidth: 345, display: 'flex', color:"green"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" color="white" variant="h5">
          {props.name}
          </Typography>
          <Typography variant="subtitle1" color="text.primary" component="div">
          {props.description}
          </Typography>
          <Typography variant="subtitle1" color="text.primary" component="div">
          {props.contact}
          </Typography>
          <Button variant='contained' size="small" endIcon={<AddIcCallIcon />}>Call Me</Button>
        </CardContent>
      </Box>
      <PictureAvatar
        sx={{ width: 151 }}
        img src={props.src}
      />
        
    </Card>
  );
}
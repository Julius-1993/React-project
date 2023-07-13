import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StoreSharpIcon from '@mui/icons-material/StoreSharp';
import PictureAvatar from './PictureAvatar';

function HouseCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <PictureAvatar img src={props.src}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.housename}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.tag}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small" endIcon={<StoreSharpIcon />}>Buy Now</Button>
        <Button variant='contained' color='success' size="small">Add To Preview</Button>
      </CardActions>
    </Card>
  );
}
export default HouseCard;
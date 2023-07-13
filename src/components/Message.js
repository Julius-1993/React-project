import PictureAvatar from "./PictureAvatar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const messageStyle = {
  borderRadius: 10,
  width: 400,
  padding: 5,
  marginLeft: 45,
}
function Message(props){
  return(
  <div style={messageStyle}>
    <div style={{backgroundColor:props.color, borderRadius: 10, padding: 5, textAlign: "Center", Color: "white"}}>
    <h4>
     {props.name}
    </h4>
    <div>
    <PictureAvatar img src={props.src}></PictureAvatar>
    </div>
    <div>
    <PictureAvatar img src={props.src}></PictureAvatar>
    </div>
    <p><b>{props.Description}</b></p>
    <p><b>{props.Price}</b></p>
    <p><b>{props.State}</b></p>
    <p><b>{props.Localgovernment}</b></p>
    </div>
    <Button size="medium" variant="contained" color="success" startIcon={<DeleteIcon />}>Delete</Button>
  </div>
  
  )
}
export default Message;

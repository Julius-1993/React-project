const imageStyle={
  width: 400,
  height: 250,
}
function PictureAvatar(props){
return(
  <img src={props.src} style={imageStyle} alt="prop"/>
)
}
export default PictureAvatar;
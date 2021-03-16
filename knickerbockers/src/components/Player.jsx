import { useParams } from "react-router-dom";


function Player(props) {
  const params = useParams()
  console.log(props)
  return (
    <div>{props.player}</div>
  )
}
export default Player;



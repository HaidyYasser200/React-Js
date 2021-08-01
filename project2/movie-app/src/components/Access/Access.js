import React ,{Component} from 'react';
import axios from 'axios';
import { APIKEY, APILINK } from './../../config';
import SingleInfo from '../SingleInfo/SingleInfo';
class Access extends Component {
   
    state = {
        ActorInfo:null
       };
   
       getActorInfo = () => {
           
           const actorId = this.props.match.params.actorId;
   axios.get(`${APILINK}person/${actorId}/movie_credits?api_key=${APIKEY}&language=en-US`)
           .then(response => {
         //  console.log(response.data.cast);
               this.setState({
                   ActorInfo: response.data.cast
               });
           })
       }
       componentDidMount() {
        this.getActorInfo();
    }

      render(){   
        let actor= this.state.ActorInfo ? this.state.ActorInfo.map((Info,index)=>{
         return( <SingleInfo Info={Info} key={index} />)
        }):null; 
    return (
        <div >
      <center> <h1  style={{
            background: "black",color:"white"}}>Movies For Actor </h1></center>
                {actor}
            </div>
      
    )
}}

export default Access;
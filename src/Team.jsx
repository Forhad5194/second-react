import { useState } from "react";

const Team = () => {

      const teamStyle = {

        margin: '15px',
        padding: '15px',
        border: '1px solid red',
        borderRadius: '10px',
       
      }


      const [team, setTeam] = useState(11);
      
      const AddPlayer =()=>{
        const newTeam = team +1 
        setTeam(newTeam);
      }
      const RemovePlayer =()=>{
        const newTeam = team -1 
        setTeam(newTeam);
      }


    return (
        <div style={teamStyle}>
            <h2>Players : {team}</h2>
            <button onClick={AddPlayer}>New Add </button>
            <button onClick={RemovePlayer}>Remove Player </button>
        </div>
    );
};

export default Team;
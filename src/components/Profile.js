import { useState } from "react";
import ToggleComponent from "./ToggleComponent";

import "./profile.css";
const Profile = ({ age}) => {
  const [ag, setAge] = useState(age);
  const increment = () => {
    setAge(ag + 1);
  };

  const decrement = () => {
    setAge(ag - 1);
  };
  const [showDetails, setShowDetails] = useState(false)
  return (
    <div className="profileContent">
      <img
        style={{ width: "140px", height: "200px", marginLeft:"6rem" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/220px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg"
        alt="profileimage"
      />
      <h2>Name:Rahul Pandey</h2>
      <h2>Age:{ag}</h2>
      <button onClick={increment} style ={{marginRight:"3rem"}}>INCREASE AGE</button>
      <button onClick={decrement}>DECREASE AGE</button>

      <br/>
      <br/>
      <button onClick = {()=>setShowDetails(!showDetails)} style ={{marginLeft:"6rem"}}>{showDetails ? "Hide details" : "show more details" }</button>
     
      { showDetails && <ToggleComponent />}
    </div>
  );
};

export default Profile;

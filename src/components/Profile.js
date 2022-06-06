import { useState } from "react";
import "./profile.css";
const Profile = ({ age }) => {
  const [ag, setAge] = useState(age);
  const increment = () => {
    setAge(ag + 1);
  };

  const decrement = () => {
    setAge(ag - 1);
  };

  return (
    <div className="profileContent">
      <img
        style={{ width: "140px", height: "200px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/220px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg"
        alt="profileimage"
      />
      <h2>Name:Rahul Pandey</h2>
      <h2>Age:</h2>
      <h2>{ag}</h2>
      <button onClick={increment}>INCREASE AGE</button>
      <button onClick={decrement}>DECREASE AGE</button>

      <div className="moreDetails">
        <button>Show more details</button>
        <h2>Location:Bangalore</h2>
        <h2>Organisation:Masai School</h2>
      </div>
    </div>
  );
};

export default Profile;

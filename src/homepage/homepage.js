import React from "react";
import { Link } from "react-router-dom";

class homepage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/Speciality" >
         Trending Specialities
        </Link>
        <br></br>
        <Link to="/Issue" >
          Trending Issues
        </Link>
        <br></br>

      </div>
    );
  }
}

export default homepage;

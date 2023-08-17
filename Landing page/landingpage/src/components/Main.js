import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react"; // Importation dU GOogla mao library pour intègrer Google map dans notre Application

const mapStyles = {
  width: "100%",
  height: "100%",
  margin: "0",
};

const Main = (props) => {
  return (
    <div className="main">
      <div className="col col1">
        <h2> GOMYCODE</h2>
        <p>
          At Gomycode, our mission is to democratize education by empowering
          technology enthusiasts to learn tech skills. We have created a safe
          learning environment that enables you to challenge yourself with new
          skills. It’s a great place to connect with like-minded people, even
          outside of your industry. Join us to learn, grow, and succeed in the
          world of technology.
        </p>
        <button type="button">More</button>
      </div>
      <div className="col1">
        <div className="card card1"></div>
        <div className="card card2">
          <Map
            google={props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 14.69728849853036,
              lng: -17.457144164992798,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAMdL60P6FE0mlCyspqDDuvYfDg9nvqBPg", // inègration de google map APIkey pour avoir accès au map.
})(Main);

import { useState, useEffect } from "react";
// import data from "./WeatherData.json";

export default function WeatherFunction(props) {
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    fetch("./WeatherData.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCityData(res);
      });
  }, []);
  return (
    <>
      <div>
        <div style={divStyles}>
          <h1>{props.city} Weather</h1>
          <div>
            <img src={""} />
          </div>
          <div>
            <h3>{}</h3>
            <h3>Low : {props.low}°C</h3>
            <h3>High : {props.high}°C</h3>
          </div>
        </div>
      </div>
    </>
  );
}

const divStyles = {
  border: "1px solid black",
  display: "inline-block",
  width: "fit-content",
  margin: "auto",
  padding: "12px",
  borderRadius: "1rem",
};

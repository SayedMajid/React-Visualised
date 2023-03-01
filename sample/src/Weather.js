import React from "react";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temprature: this.getTemperatureLabel(this.props.high) };
  }

  static divStyles = {
    border: "1px solid black",
    width: "fit-content",
    margin: "auto",
    padding: "12px",
    borderRadius: "1rem",
  };

  static links = {
    cloudy: "https://img.icons8.com/nolan/3x/skydrive.png",
    foggy: "https://img.icons8.com/dotty/3x/fog-night.png",
  };

  getTemperatureLabel(temprature) {
    return temprature ?? "Cold";
  }

  render() {
    return (
      <React.Fragment>
        <div style={Weather.divStyles}>
          <h1>{this.props.city} Weather</h1>
          <div>
            <img src={true ? Weather.links.cloudy : Weather.links.foggy} />
          </div>
          <div>
            <h3>{this.getTemperatureLabel("Hot")}</h3>
            <h3>Low : {this.props.low}°C</h3>
            <h3>High : {this.props.high}°C</h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

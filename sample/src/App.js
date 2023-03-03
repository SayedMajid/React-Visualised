import "./App.css";
import Counter from "./Counter";
import Customer from "./Customer";
import Weather from "./Weather";
import WeatherFunction from "./WeatherFunction";

function App() {
  const cust = {
    id: 5,
    name: "Facebook",
    address: "USA",
  };

  return (
    <div className="App">
      {/* <Customer cust={cust} /> */}
      {/* <Weather city="Nashik" low="25" high="35" /> */}
      {/* <WeatherFunction /> */}
      <Counter />
    </div>
  );
}

export default App;

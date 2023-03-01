import "./App.css";
import Customer from "./Customer";
import Weather from "./Weather";

function App() {
  const cust = {
    id: 5,
    name: "Facebook",
    address: "USA",
  };

  return (
    <div className="App">
      {/* <Customer cust={cust} /> */}
      <Weather city="Nashik" low="25" high="35" />
    </div>
  );
}

export default App;

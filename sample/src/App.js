import "./App.css";
import Customer from "./Customer";

function App() {
  const cust = {
    id: 5,
    name: "Facebook",
    address: "USA",
  };

  return (
    <div className="App">
      <Customer cust={cust} />
    </div>
  );
}

export default App;

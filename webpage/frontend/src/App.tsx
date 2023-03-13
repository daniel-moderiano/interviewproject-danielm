import Form from "./components/Form";
import Table from "./components/Table";

const dummyData = [
  {
    first_name: "Dennis",
    last_name: "Reynolds",
    email: "dennis@paddys.com",
    age: 40,
    income: 30000,
  },
  {
    first_name: "Deandra",
    last_name: "Reynolds",
    email: "dee@paddys.com",
    age: 38,
    income: 20000,
  },
  {
    first_name: "Frank",
    last_name: "Reynolds",
    email: "frank@paddys.com",
    age: 40,
    income: 120000,
  },
  {
    first_name: "Charlie",
    last_name: "Kelly",
    email: "charlie@paddys.com",
    age: 34,
    income: 500,
  },
];

function App() {
  return (
    <div className="App">
      <Table people={dummyData} />
      <Form />
    </div>
  );
}

export default App;

import Form from "./components/Form";
import Table from "./components/Table";
import Typography from "@mui/material/Typography";
import "./styles/App.css";

const dummyData = [
  {
    firstName: "Dennis",
    lastName: "Reynolds",
    email: "dennis@paddys.com",
    age: 40,
    income: 30000,
  },
  {
    firstName: "Deandra",
    lastName: "Reynolds",
    email: "dee@paddys.com",
    age: 38,
    income: 20000,
  },
  {
    firstName: "Frank",
    lastName: "Reynolds",
    email: "frank@paddys.com",
    age: 40,
    income: 120000,
  },
  {
    firstName: "Charlie",
    lastName: "Kelly",
    email: "charlie@paddys.com",
    age: 34,
    income: 500,
  },
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <Typography variant="h2" component="h1">
          Header
        </Typography>
      </header>
      <main className="main">
        <Form />
        <Table people={dummyData} />
      </main>
      <footer className="footer">
        <Typography variant="subtitle1" component="p">
          &copy; Daniel Moderiano 2023
        </Typography>
      </footer>
    </div>
  );
}

export default App;

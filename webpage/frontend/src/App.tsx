import Form from "./components/Form";
import Table from "./components/Table";
import Typography from "@mui/material/Typography";
import "./styles/App.css";

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
        <Table />
      </main>
      <footer className="footer">
        <Typography variant="subtitle1" component="p">
          &copy; Footer
        </Typography>
      </footer>
    </div>
  );
}

export default App;

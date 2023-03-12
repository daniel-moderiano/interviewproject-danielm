import { useGetAllPeopleQuery } from "./services/backendApi";
import { Person } from "./types";

function App() {
  const { data, error, isLoading } = useGetAllPeopleQuery();

  return (
    <div className="App">
      {error ? (
        <div>Oh no, there was an error</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>
          {data.map((person: Person) => (
            <h3 key={person.email}>
              {person.first_name} {person.last_name}
            </h3>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;

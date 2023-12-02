import { useState } from "react";

import initialData from "./assets/initialData";

import PersonList from "./Components/PersonList";
import SearchBar from "./Components/SearchBar";

export default function App() {
  const [persons, setPersons] = useState(initialData);

  const handlePersonList = (updatedPersonList) => {
    setPersons(updatedPersonList);
  };

  return (
    <div className="App">
      <SearchBar
        personList={persons}
        handlePersonList={handlePersonList}
      />
      <PersonList
        personList={persons}
        handlePersonList={handlePersonList}
      />
    </div>
  );
}

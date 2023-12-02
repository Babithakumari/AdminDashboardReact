import { useState, useEffect } from "react";
import initialData from "./assets/initialData";
import PersonList from "./Components/PersonList";
import SearchBar from "./Components/SearchBar";
import MultipleDelete from "./Components/MultipleDelete";

export default function App() {
  const [persons, setPersons] = useState(initialData);
  const [deleteList, setDeleteList] = useState([]);

  const handlePersonList = (updatedPersonList) => {
    setPersons(updatedPersonList);
  };

  const handleDeleteList = (updatedPersonList) => {
    setDeleteList(updatedPersonList);
  };

  useEffect(() => {
    console.log(deleteList);
  }, [deleteList]);

  return (
    <div className="App">
      <SearchBar personList={persons} handlePersonList={handlePersonList} />
      <MultipleDelete
        personList={persons}
        handlePersonList={handlePersonList}
        deleteList={deleteList}
        handleDeleteList={handleDeleteList}
      />
      <PersonList
        personList={persons}
        handlePersonList={handlePersonList}
        deleteList={deleteList}
        handleDeleteList={handleDeleteList}
      />
    </div>
  );
}

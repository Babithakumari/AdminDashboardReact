import { useState,useEffect} from "react";
import initialData from "./assets/initialData";
import PersonList from "./Components/PersonList";
import SearchBar from "./Components/SearchBar";

export default function App() {
  const [persons, setPersons] = useState(initialData);
  const [filterPersons, setFilterPersons] = useState(persons)

  const handleFilterPersonList = (updatedPersonList) => {
    setFilterPersons(updatedPersonList);
  };

  const handlePersonList = (updatedPersonList) => {
    setPersons(updatedPersonList);
  };

  // When persons change, filter-persons also changes
  useEffect( ()=>{
    setFilterPersons(persons)
  },[persons])

  
  return (
    <div className="App">
      <SearchBar personList={persons} handleFilterPersonList={handleFilterPersonList} />
      
      <PersonList
        personList={filterPersons}
        handlePersonList={handlePersonList}
      />
    </div>
  );
}

import { useState } from "react";
import "./styles.css";


const SearchBar = ({ personList, handlePersonList }) => {
  const [searchText, setSearchText] = useState("");

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const onSearch = () => {
    const input = setSearchText(searchText.toLowerCase())
    const filteredPersonList = personList.filter(
      (person) => Object.values(person).some(val => val.toLowerCase().includes(searchText))
    );

    // if input is not empty, show only filtered list of persons
    if (input !== "") {
      handlePersonList(filteredPersonList)

    }
    
  };
  return (
    <div>
      <input
        id="search-bar"
        value={searchText}
        onChange={onChangeHandler}
        placeholder="Search..."
      />
      <button className="search-icon" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

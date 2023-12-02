import { useState } from "react";
import "./styles.css";


const SearchBar = ({ personList, handlePersonList }) => {
  const [searchText, setSearchText] = useState("");

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const onSearch = () => {
    setSearchText(searchText.toLowerCase())
    const filteredPersonList = personList.filter(
      (person) => Object.values(person).some(val => val.toLowerCase().includes(searchText))
    );

    handlePersonList(filteredPersonList);
  };
  return (
    <div>
      <input
        value={searchText}
        onChange={onChangeHandler}
        placeholder="Search"
      />
      <button className="search-icon" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

import { useState } from "react";
import "./styles.css";

const SearchBar = ({ personList, handleFilterPersonList }) => {
  const [searchText, setSearchText] = useState("");

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const onSearch = () => {
    const input = setSearchText(searchText.toLowerCase());
    const filteredList = personList.filter((person) =>
      Object.values(person).some((val) =>
        val.toLowerCase().includes(searchText)
      )
    );

    // if input is empty, show all persons
    if (input === "") {
      handleFilterPersonList(personList);
    }
    // otherwise show only filtered list of persons
    else {
      handleFilterPersonList(filteredList);
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

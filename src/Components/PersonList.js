import Person from "./Person";
import { useState, useEffect } from "react";

import "./styles.css";
import Pagination from "./Pagination";
import { MdDeleteOutline } from "react-icons/md";

const PersonList = ({ personList, handlePersonList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  // get records for current page
  const curRecords = personList.slice(firstIndex, lastIndex);
  // calculate number of pages
  const nPages = Math.ceil(personList.length / recordsPerPage) || 1;

  // function handler to updatePage
  const updatePage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  // update person
  const updatePerson = (updatedPerson) => {
    const updatedPersonList = personList.map((person) =>
      person.id === updatedPerson.id ? updatedPerson : person
    );
    handlePersonList(updatedPersonList);
  };

  // delete person
  const deletePerson = (personId) => {
    const updatedPersonList = personList.filter(
      (person) => person.id !== personId
    );
    handlePersonList(updatedPersonList);
  };

  const [checked, setChecked] = useState({});
  const [headChecked, setHeadChecked] = useState(false);
  const [multiDeleteDisable, setMultiDeleteDisable] = useState(true);

  const handleCheckbox = (personId) => {
    const value = !checked[personId];
    setChecked({ ...checked, [personId]: value });
  };

  const handleHeadCheckbox = () => {
    const updatedHeadChecked = !headChecked;
    setHeadChecked(updatedHeadChecked);
    const checkList = {};
    // for every record, add an entry (id,val)
    curRecords.map((person) => (checkList[person.id] = updatedHeadChecked));
    setChecked(checkList);
  };

  const handleMultipleDelete = () => {
    const selectList = [];
    for (const key in checked) {
      if (checked[key]) {
        // add to selectList
        selectList.push(key);
      }
    }
    // get updatedlist
    const updatedPersonList = personList.filter(
      (person) => !selectList.includes(person.id)
    );
    console.log(updatedPersonList);
    // update the list
    handlePersonList(updatedPersonList);
    // reset head checkbox and other checkboxes
    setHeadChecked(false);
    setChecked({});
  };

  useEffect(() => {
    setMultiDeleteDisable(!Object.values(checked).includes(true));
  }, [checked]);

  // when current page has no records(all deleted) go to 1st apge

  return (
    <>
      <button
        id="multiple-delete-btn"
        onClick={handleMultipleDelete}
        disabled={multiDeleteDisable}
      >
        <MdDeleteOutline />
      </button>
      <div id="table-parent">
        <table id="persons-table">
          <thead>
            <tr>
              <th>
                <input
                  onChange={handleHeadCheckbox}
                  type="checkbox"
                  checked={headChecked}
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {curRecords.map((person) => (
              <Person
                key={person.id}
                personData={person}
                handleEdit={updatePerson}
                handleDelete={deletePerson}
                checked={!!checked[person.id]}
                handleCheckbox={handleCheckbox}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        updatePage={updatePage}
      />
    </>
  );
};
export default PersonList;

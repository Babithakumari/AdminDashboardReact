import Person from "./Person";
import { useState } from "react";

import "./styles.css";
import Pagination from "./Pagination"


const PersonList = ({
  personList,
  handlePersonList,
  deleteList,
  handleDeleteList,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  // get records for current page
  const curRecords = personList.slice(firstIndex, lastIndex);
  // calculate number of pages
  const nPages = Math.ceil(personList.length / recordsPerPage);
  console.log(nPages);

  // function handler to updatePage
  const updatePage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const updatePerson = (updatedPerson) => {
    const updatedPersonList = personList.map((person) =>
      person.id === updatedPerson.id ? updatedPerson : person
    );
    handlePersonList(updatedPersonList);
  };

  const deletePerson = (personId) => {
    const updatedPersonList = personList.filter(
      (person) => person.id !== personId
    );
    handlePersonList(updatedPersonList);
  };

  const AddToDeleteList = (personToAdd) => {
    const updatedDeleteList = [...deleteList, personToAdd];
    handleDeleteList(updatedDeleteList);
  };

  const RemoveFromDeleteList = (personToRemove) => {
    const updatedDeleteList = deleteList.filter(
      (entry) => entry.id !== personToRemove.id
    );
    handleDeleteList(updatedDeleteList);
  };

  const [HeadChecked, setHeadChecked] = useState(false);
  const handleHeadCheckbox = () => {
    setHeadChecked((checked) => !checked);
  };

  return (
    <>
      <table id="persons">
        <thead>
          <tr>
            <th>
              <input
                onChange={handleHeadCheckbox}
                type="checkbox"
                checked={HeadChecked}
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
              AddToDeleteList={AddToDeleteList}
              RemoveFromDeleteList={RemoveFromDeleteList}
              HeadChecked={HeadChecked}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        updatePage={updatePage}
      />
    </>
  );
};
export default PersonList;

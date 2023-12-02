import Person from "./Person";
import "./styles.css";

const PersonList = ({ personList, handlePersonList }) => {
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

  return (
    <table id="persons">
      <thead>
        <tr>
          <th><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {personList.map((person) => (
          <Person
            key={person.id}
            personData={person}
            handleEdit={updatePerson}
            handleDelete={deletePerson}
          />
        ))}
      </tbody>
    </table>
  );
};
export default PersonList;

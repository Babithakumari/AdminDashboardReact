import { useState } from "react";
import "./styles.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Person = ({
  personData,
  handleEdit,
  handleDelete,
  checked,
  handleCheckbox,
}) => {
  const [editing, setEditing] = useState(false);
  const [newPerson, setNewPerson] = useState(personData);

  const onEdit = () => {
    setEditing(true);
  };
  const onCancel = () => {
    setNewPerson(personData);
    setEditing(false);
  };
  const onSave = (id) => {
    const changedPerson = {
      ...newPerson,
    };
    handleEdit(changedPerson);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
  };

  return (
    <tr
      className={`${checked ? "checked" : "unchecked"} ${
        editing ? "editing" : "not-editing"
      }`}
    >
      <td>
        <input
          type="checkbox"
          value={personData.id}
          checked={checked}
          onChange={() => handleCheckbox(personData.id)}
        />
      </td>
      <td>
        <input
          type="text"
          name="name"
          disabled={!editing}
          value={newPerson.name}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="email"
          disabled={!editing}
          value={newPerson.email}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="role"
          disabled={!editing}
          value={newPerson.role}
          onChange={handleInputChange}
        />
      </td>
      <td className="action-cell">
        {editing ? (
          <>
            <button onClick={onSave} className="save-btn">
              Save
            </button>
            <button onClick={onCancel} className="cancel-btn">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={onEdit} className="edit-btn">
              {" "}
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(personData.id)}
              className="delete-btn"
            >
              <MdDelete />
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Person;

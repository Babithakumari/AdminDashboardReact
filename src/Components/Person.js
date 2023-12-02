import { useState, useEffect, useRef } from "react";
import "./styles.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Person = ({
  personData,
  handleEdit,
  handleDelete,
  AddToDeleteList,
  RemoveFromDeleteList,
  HeadChecked,
}) => {
  const isFirstRender = useRef(true);

  const [editing, setEditing] = useState(false);
  const [newPerson, setNewPerson] = useState(personData);
  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    setChecked((checked) => !checked);
  };

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

  useEffect(() => {
    if (HeadChecked) {
      // select all
      setChecked(true);
    } else {
      //deselect all
      setChecked(false);
    }
  }, [HeadChecked]);

  useEffect(() => {
    if (!isFirstRender.current) {
      if (checked) {
        AddToDeleteList(personData);
        console.log("added person to delete list", personData);
      } else if (!checked) {
        RemoveFromDeleteList(personData);
        console.log("removed person from delete list", personData);
      }
    } else {
      isFirstRender.current = false;
      console.log("frist render");
    }
  }, [checked, personData, AddToDeleteList, RemoveFromDeleteList]);

  return (
    <tr className={checked ? "checked" : "unchecked"}>
      <td>
        <input
          type="checkbox"
          value={personData.id}
          checked={checked}
          onChange={handleCheckbox}
        />
      </td>
      <td>
        <input
          name="name"
          disabled={!editing}
          value={newPerson.name}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          name="email"
          disabled={!editing}
          value={newPerson.email}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
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

import { MdDelete } from "react-icons/md";

const MultipleDelete = ({
  personList,
  handlePersonList,
  deleteList,
  handleDeleteList,
}) => {
  const handleMultipleDelete = () => {
    // get updatedlist
    const updatedPersonList = personList.filter(
      (person) => !deleteList.includes(person)
    );
    // update the list
    handlePersonList(updatedPersonList);
    // empty deleteList
    handleDeleteList([]);
  };

  return (
    <button onClick={handleMultipleDelete} disabled={!deleteList}>
      <MdDelete />
    </button>
  );
};
export default MultipleDelete;

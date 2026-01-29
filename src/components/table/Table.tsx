import { useState } from "react";
import { useContextItem } from "../../context/AppContext";
import EditModal from "../editModal/EditModal";
import TableRow from "../tableRow/TableRow";
import styles from "./Table.module.css";
const Table = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentRowEdit, setCurrentRowEdit] = useState(null);
  const { allSubmited } = useContextItem();
  function handleEditClick(row: any) {
    setCurrentRowEdit(row);
    setShowEditModal((p) => !p);
  }

  return (
    <>
      <div className={`${styles.table} w-full text-left rounded-sm `}>
        <div>
          {allSubmited.length === 0 && (
            <span className="flex justify-center p-5 text-gray-300 font-bold">
              There are no items to display.{" "}
            </span>
          )}
          {allSubmited.map((row) => (
            <TableRow row={row} handleEditClick={handleEditClick} />
          ))}
        </div>
      </div>
      {showEditModal && (
        <EditModal row={currentRowEdit} setShowEditModal={setShowEditModal} />
      )}
    </>
  );
};

export default Table;

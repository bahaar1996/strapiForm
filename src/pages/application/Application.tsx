import {
  faDatabase,
  faPencil,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AddModal from "../../components/addModal/AddModal";
import AddModalStepTow from "../../components/AddModalStepTow/AddModalStepTow";
import Container from "../../components/container/Container";
import { useContextItem } from "../../context/AppContext";
import styles from "./Application.module.css";
import Table from "../../components/table/Table";

const Application = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAddModalStepTow, setShowAddModalStepTow] = useState(false);

  const { addItem, resetDraft } = useContextItem();

  function handleShowModal(key: string, value: any) {
    setShowAddModal(false);
    setShowAddModalStepTow(true);
    addItem(key, value);
  }
  function handleShowFirstAddModal() {
    setShowAddModalStepTow(false);
    setShowAddModal(true);
    resetDraft();
  }
  return (
    <Container>
      <div className="flex justify-between pb-10">
        <div>
          <h1 className="font-bold text-2xl text-gray-300">Application</h1>
        </div>
        <div className="flex gap-3">
          <a href="#" className={`${styles.button}`}>
            <FontAwesomeIcon
              icon={faDatabase}
              className="text-gray-300 cursor-pointer"
            />
            <span className="text-gray-300">Configure the view</span>
          </a>
          <a href="#" className={`${styles.button}`}>
            <FontAwesomeIcon
              icon={faPencil}
              className="text-gray-300 cursor-pointer"
            />
            <span className="text-gray-300">Edit</span>
          </a>
          <a
            href="#"
            className={`${styles.button}`}
            onClick={() => setShowAddModal(true)}
          >
            <FontAwesomeIcon
              icon={faPlus}
              className="text-gray-300 cursor-pointer"
            />
            <span className="text-gray-300">Add another field</span>
          </a>
        </div>
      </div>
      {showAddModal && (
        <AddModal
          setShowAddModal={setShowAddModal}
          handleShowModal={handleShowModal}
        />
      )}
      {showAddModalStepTow && (
        <AddModalStepTow
          setShowAddModalStepTow={setShowAddModalStepTow}
          handleShowFirstAddModal={handleShowFirstAddModal}
        />
      )}
      <Table />
    </Container>
  );
};

export default Application;

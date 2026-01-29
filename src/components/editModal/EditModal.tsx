import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useContextItem } from "../../context/AppContext";
import styles from "./EditModal.module.css";

enum Tabs {
  BASIC = "BASIC SETTING",
  ADVANCE = "ADVANCE SETTING",
}
const EditModal = ({ row, setShowEditModal }) => {
  const { editAllSubmitted, deletedItem } = useContextItem();
  const [activeTab, setActiveTab] = useState(Tabs.BASIC);

  const { register, handleSubmit } = useForm({
    defaultValues: { ...row },
  });
  const onSubmit = (data) => {
    editAllSubmitted(data);
    setShowEditModal(false);
  };
  const handleCancel = () => {
    setShowEditModal(false);
  };
  const handleDeletedItem = (row) => {
    deletedItem(row.id);
    setShowEditModal(false);
  };
  return (
    <div className={`${styles.overlay}`}>
      <div className={`max-w-210 bg-[#4c658a] rounded-sm`}>
        <div className="flex justify-between items-center p-5 bg-blue-950 h-16 border-b border-[#7a91b3] rounded-sm">
          <div className="flex gap-3 items-center justify-center">
            <div>
              <span className="font-bold text-gray-300 bg-blue-600 rounded-sm px-3 py-1">
                CT
              </span>
            </div>
            <span className="font-bold text-gray-300">Edit Application</span>
          </div>
          <div>
            <a
              href="#"
              className={`${styles.button}`}
              onClick={() => setShowEditModal(false)}
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-gray-300 cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="p-7">
          <div className="flex justify-between border-b border-[#7a91b3] pt-4 ">
            <div>
              <p className="font-bold text-[18px] text-gray-300">
                Configuration
              </p>
              <span className="text-[#bccde5]">Edit for modeling data</span>
            </div>

            <div className="flex gap-5">
              <div
                className={`${
                  activeTab === Tabs.BASIC
                    ? "border-b-4 border-b-[#8280d9]"
                    : "border-b-4 border-transparent"
                } cursor-pointer pb-2.5`}
                onClick={() => setActiveTab(Tabs.BASIC)}
              >
                <span className="text-gray-300 hover:text-[#8280d9]">
                  {Tabs.BASIC}
                </span>
              </div>
              <div
                className={`${
                  activeTab === Tabs.ADVANCE
                    ? "border-b-4 border-b-[#8280d9]"
                    : "border-b-4 border-transparent"
                } cursor-pointer pb-2.5`}
                onClick={() => setActiveTab(Tabs.ADVANCE)}
              >
                <span className="text-gray-300 cursor-pointer hover:text-[#8280d9]">
                  {Tabs.ADVANCE}
                </span>
              </div>
            </div>
          </div>
          {activeTab === Tabs.BASIC && (
            <div className="flex gap-3 flex-col">
              <div className="flex gap-3">
                <div className="flex flex-col gap-1 pt-4 w-full">
                  <span className="font-bold text-gray-300">Display name</span>
                  <input
                    type="text"
                    {...register("name")}
                    id=""
                    className="border-2 border-[#7a91b3] rounded-sm focus:border-[#8280d9] focus:outline-none h-10"
                  />
                  <p className="text-[#bccde5] text-[14px]">
                    No space is allowed for the name of the attribute
                  </p>
                </div>
                <div className="flex flex-col gap-1 pt-4 w-full">
                  <span className="font-bold text-gray-300">Type selected</span>
                  <input
                    type="text"
                    disabled
                    {...register("type")}
                    id=""
                    className="border-2 border-[#7a91b3] rounded-sm
                   focus:border-[#8280d9] focus:outline-none 
                   disabled:bg-[#d3d5e36d] disabled:text-[#7a7a7a] h-10"
                  />
                  <p className="text-[#bccde5] text-[14px]">
                    No space is allowed for the value type of the attribute
                  </p>
                </div>
              </div>
              <div className="flex gap-1 flex-col">
                <span className="font-bold text-gray-300">Type</span>
                <div className="flex gap-3">
                  <div className="flex items-center gap-3 border-2 border-[#7a91b3] rounded-sm p-3">
                    <input
                      type="radio"
                      id="tel"
                      value={"telephone"}
                      className="peer w-5 h-5 accent-[#8280d9]"
                      {...register("typeItem")}
                    />
                    <div className="flex flex-col">
                      <label
                        htmlFor="tel"
                        className="cursor-pointer text-gray-300 peer-checked:text-[#8280d9] font-bold"
                      >
                        Telphone
                      </label>
                      <p className="text-[#bccde5] text-[14px]">
                        Select this option to select your home or work phone
                        number
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-2 border-[#7a91b3] rounded-sm p-3">
                    <input
                      type="radio"
                      id="tel"
                      value={"postalCode"}
                      {...register("typeItem")}
                      className="peer w-5 h-5 accent-[#8280d9]"
                    />
                    <div className="flex flex-col">
                      <label
                        htmlFor="tel"
                        className="cursor-pointer text-gray-300 peer-checked:text-[#8280d9] font-bold"
                      >
                        Postal code
                      </label>
                      <p className="text-[#bccde5] text-[14px]">
                        Select this option to select your home or work postal
                        code
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === Tabs.ADVANCE && (
            <div className="flex gap-3">
              <div className="flex justify-center items-center font-bold text-gray-300 w-[784px] h-[242.2px]">
                <span>There is no advance form!</span>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center bg-blue-950 h-16 p-5">
          <div>
            <a href="#" className={`${styles.button}`} onClick={handleCancel}>
              <span className="text-gray-300 cursor-pointer px-2">Cancel</span>
            </a>
          </div>
          <div className="flex gap-3">
            <a
              onClick={() => handleDeletedItem(row)}
              href="#"
              className={`${styles.deleteBtn}`}
            >
              <span className="text-gray-700">Delete</span>
            </a>
            <a
              onClick={handleSubmit(onSubmit)}
              href="#"
              className="text-gray-300 bg-[#8280d9] rounded-sm py-2 px-5"
            >
              Finish
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

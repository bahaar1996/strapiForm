import {
  faArrowLeft,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useContextItem } from "../../context/AppContext";
import styles from "./AddModalStepTow.module.css";

enum Tabs {
  BASIC = "BASIC SETTING",
  ADVANCE = "ADVANCE SETTING",
}
const AddModalStepTow = ({
  setShowAddModalStepTow,
  handleShowFirstAddModal,
}) => {
  const { items, editItem, cancelItem } = useContextItem();
  const { register, handleSubmit } = useForm();
  const { type } = items[0];
  const [activeTab, setActiveTab] = useState(Tabs.BASIC);

  const onSubmit = (data) => {
    editItem(data);
    setShowAddModalStepTow(false);
  };
  const handleCancel = () => {
    setShowAddModalStepTow(false);
    cancelItem();
  };
  return (
    <div className={`${styles.overlay}`}>
      <div className={`max-w-210 bg-[#4c658a] rounded-sm`}>
        <div className="flex justify-between items-center p-5 bg-blue-950 h-16 border-b border-[#7a91b3] rounded-sm">
          <div className="flex gap-3 items-center justify-center">
            <div>
              <a
                href="#"
                className={`${styles.icon}`}
                onClick={handleShowFirstAddModal}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className=" text-[#8280d9] cursor-pointer"
                />
              </a>
            </div>
            {type === "Text" && (
              <div>
                <span className="font-bold text-green-700 bg-green-200 rounded-sm px-3 py-1">
                  Aa
                </span>
              </div>
            )}
            {type === "Number" && (
              <div>
                <span className="font-bold text-red-700 bg-red-200 rounded-sm px-3 py-1">
                  123
                </span>
              </div>
            )}
            {type === "Email" && (
              <div>
                <span className="font-bold text-red-400 bg-red-200 rounded-sm px-3 py-1">
                  @
                </span>
              </div>
            )}
            <span className="font-bold text-gray-300">Application</span>
          </div>
          <div>
            <a
              href="#"
              className={`${styles.button}`}
              onClick={() => setShowAddModalStepTow(false)}
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
                {`Add new ${type} field`}
              </p>
              <span className="text-[#bccde5]">
                text type, such as phone, etc.
              </span>
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
                  <span className="font-bold text-gray-300">{`${
                    (type === "Text" && "Name") ||
                    (type === "Number" && "Number") ||
                    (type === "Email" && "Email")
                  }`}</span>
                  <input
                    type="text"
                    {...register("name")}
                    id=""
                    className="h-10 border-2 border-[#7a91b3] rounded-sm focus:border-[#8280d9] focus:outline-none"
                  />
                  <p className="text-[#bccde5] text-[14px]">
                    No space is allowed for the name of the attribute
                  </p>
                </div>
                <div className="w-full"></div>
              </div>

              <div className="flex gap-1 flex-col">
                <span className="font-bold text-gray-300">Type</span>
                <div className="flex gap-3">
                  <div className="flex items-center gap-3 border-2 border-[#7a91b3] rounded-sm p-3 hover:bg-blue-950">
                    <input
                      type="radio"
                      id="tel"
                      defaultChecked
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
                  <div className="flex items-center gap-3 border-2 border-[#7a91b3] rounded-sm p-3 hover:bg-blue-950">
                    <input
                      type="radio"
                      id="postalCode"
                      value={"postalCode"}
                      {...register("typeItem")}
                      className="peer w-5 h-5 accent-[#8280d9]"
                    />
                    <div className="flex flex-col">
                      <label
                        htmlFor="postalCode"
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
              href="#"
              className={`${styles.button}`}
              onClick={handleShowFirstAddModal}
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="text-gray-300 cursor-pointer"
              />
              <span className="text-gray-300">Add another field</span>
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

export default AddModalStepTow;

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./AddModal.module.css";

enum Tabs {
  DEFAULT = "DEFAULT",
  CUSTOM = "CUSTOM",
}
const AddModal = ({ setShowAddModal, handleShowModal }) => {
  const [activeTab, setActiveTab] = useState(Tabs.DEFAULT);
  return (
    <div className={`${styles.overlay}`}>
      <div className={`max-w-210 bg-[#4c658a] rounded-sm`}>
        <div className="flex justify-between items-center p-5 bg-blue-950 h-16 border-b border-[#7a91b3] rounded-sm">
          <div className="flex gap-3">
            <div className="w-7 h-7 flex items-center justify-center rounded-sm bg-blue-700 text-gray-300">
              <span className="font-bold">CT</span>
            </div>
            <span className="font-bold text-gray-300">Application</span>
          </div>
          <div>
            <a
              href="#"
              className={`${styles.button}`}
              onClick={() => setShowAddModal(false)}
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
            <p className="font-bold text-[18px] text-gray-300">
              Select a field for your collection type
            </p>
            <div className="flex gap-5">
              <div
                className={`${
                  activeTab === Tabs.DEFAULT
                    ? "border-b-4 border-b-[#8280d9]"
                    : "border-b-4 border-transparent"
                } cursor-pointer pb-2.5`}
                onClick={() => setActiveTab(Tabs.DEFAULT)}
              >
                <span className="text-gray-300 hover:text-[#8280d9]">
                  {Tabs.DEFAULT}
                </span>
              </div>
              <div
                className={`${
                  activeTab === Tabs.CUSTOM
                    ? "border-b-4 border-b-[#8280d9]"
                    : "border-b-4 border-transparent"
                } cursor-pointer pb-2.5`}
                onClick={() => setActiveTab(Tabs.CUSTOM)}
              >
                <span className="text-gray-300 cursor-pointer hover:text-[#8280d9]">
                  {Tabs.CUSTOM}
                </span>
              </div>
            </div>
          </div>
          {activeTab === Tabs.DEFAULT && (
            <div className="flex gap-3">
              <div>
                <div
                  className="flex gap-3 border-2 border-[#7a91b3] rounded-sm p-3 mt-6 mb-[13px] items-center w-[384px] "
                  onClick={() => handleShowModal("type", "Text")}
                >
                  <div>
                    <span className="font-bold text-green-700 bg-green-200 rounded-sm px-3 py-1">
                      Aa
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-300">Text</span>
                    <p className="text-[#7a91b3]">
                      text type, such as phone, etc.
                    </p>
                  </div>
                </div>

                <div
                  className="flex gap-3 border-2 border-[#7a91b3] mt-3 mb-[13px] rounded-sm p-3 items-center w-[384px] "
                  onClick={() => handleShowModal("type", "Number")}
                >
                  <div>
                    <span className="font-bold text-red-700 bg-red-200 rounded-sm px-3 py-1">
                      123
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-300">Number</span>
                    <p className="text-[#7a91b3]">
                      Numbers (integer, float, boolean)
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="flex gap-3 border-2 border-[#7a91b3] rounded-sm p-3 mt-6 mb-[13px] items-center w-[384px]"
                  onClick={() => handleShowModal("type", "Email")}
                >
                  <div>
                    <span className="font-bold text-red-400 bg-red-200 rounded-sm px-3 py-1">
                      @
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-300">Email</span>
                    <p className="text-[#7a91b3]">
                      Email field with validatons format
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === Tabs.CUSTOM && (
            <div className="flex gap-3">
              <div className="flex justify-center items-center font-bold text-gray-300 w-[780px] h-[200.4px]">
                <span>There is no custom form!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddModal;

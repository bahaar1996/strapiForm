import {
  faChevronDown,
  faChevronRight,
  faGripLinesVertical,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useContextItem } from "../../context/AppContext";

const TableRow = ({ row, handleEditClick }) => {
  const [expandableRow, setExpandableRow] = useState(null);
  const { deletedItem } = useContextItem();
  function expandRow(e, id) {
    e.stopPropagation();
    setExpandableRow(expandableRow === id ? null : id);
  }

  return (
    <React.Fragment key={row.id}>
      <div
        key={row.id}
        className="flex flex-col justify-between border-b-2 border-[#7a91b3]"
      >
        <div className="flex justify-between py-1">
          <div className="flex">
            <div className="flex justify-center items-center py-3 px-3 gap-2">
              <FontAwesomeIcon
                icon={faGripLinesVertical}
                className="text-[#7a91b3]"
              />
              <div className="w-6 h-6 bg-gray-300 rounded-sm"></div>
            </div>
            <div className="py-3">
              <span className="pr-5 text-gray-300">{row.name}</span>
              <span className="text-[#7a91b3]">{row.type}</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 px-4">
            <FontAwesomeIcon
              icon={expandableRow === row.id ? faChevronDown : faChevronRight}
              className="text-gray-300"
              onClick={(e) => expandRow(e, row.id)}
            />
            <FontAwesomeIcon
              onClick={() => handleEditClick(row)}
              icon={faPencil}
              className="text-gray-300 hover:text-blue-600 "
            />
            <FontAwesomeIcon
              onClick={() => deletedItem(row.id)}
              icon={faTrash}
              className=" text-gray-300 hover:text-red-600"
            />
          </div>
        </div>
        {expandableRow === row.id && (
          <div className="flex gap-3 justify-between pl-[72px] ml-10 border-t-2 border-[#7a91b3] py-1">
            <div className="flex gap-3">
              <div className="px-2 row flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faGripLinesVertical}
                  className="text-[#7a91b3] cursor-move"
                />
              </div>
              <div className="py-3 text-gray-300">
                <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
              </div>
              <div className="py-3 text-gray-300">{row.name}</div>
              <div className="py-3 text-[#7a91b3]">{row.type}</div>
              <div className="py-3 text-[#7a91b3]">{row.typeItem}</div>
            </div>

            <div className="row flex justify-center items-center gap-3 px-4">
              <FontAwesomeIcon
                icon={faPencil}
                className="text-gray-300 hover:text-blue-600 "
                onClick={() => handleEditClick(row)}
              />
              <FontAwesomeIcon
                onClick={() => deletedItem(row.id)}
                icon={faTrash}
                className=" text-gray-300 hover:text-red-600"
              />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default TableRow;

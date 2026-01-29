import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Item {
  id: number;
  [key: string]: any;
}

interface AppContextType {
  items: Item[];
  addItem: (key: string, value: any) => void;
  editItem: (newItem: any, id?: number | null) => void;
  cancelItem: () => void;
  submitedItem: (items: any) => void;
  submitItem: Item[];
  allSubmited: Item[];
  deletedItem: (id: number) => void;
  editAllSubmitted: (row: any) => void;
  resetDraft: () => void;
}

const AppContext = createContext<AppContextType>({
  items: [],
  addItem: () => {},
  editItem: () => {},
  cancelItem: () => {},
  submitedItem: () => {},
  submitItem: [],
  allSubmited: [],
  deletedItem: () => {},
  editAllSubmitted: () => {},
  resetDraft: () => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [submitItem, setSubmitItem] = useState<Item[]>([]);
  const [allSubmited, setAllSubmited] = useState<Item[]>(() => {
    const getValue = localStorage.getItem("allSubmitted");
    return getValue ? JSON.parse(getValue) : [];
  });
  const addItem = (key: string, value: any) => {
    setItems((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        [key]: value,
      },
    ]);
  };

  const editItem = (newItem: any, id: number | null = null) => {
    setItems((prev) => {
      if (prev.length === 0) return prev;

      return prev.map((item, index) => {
        if ((id && item.id === id) || (!id && index === prev.length - 1)) {
          return { ...item, ...newItem };
        }
        return item;
      });
    });
    const newItems = { ...items[0], ...newItem };
    submitedItem(newItems);
  };

  const editAllSubmitted = (row: any) => {
    setAllSubmited((prev) =>
      prev.map((item) => (item.id === row.id ? { ...item, ...row } : item))
    );
  };

  const cancelItem = () => {
    setItems((prev) => prev.slice(0, -1));
  };

  const submitedItem = (items: any) => {
    setItems([]);
    if (!items) return;
    setSubmitItem([items]);
    setAllSubmited((prev) => [...prev, { ...items, id: Date.now() }]);
  };
  const deletedItem = (id: number) => {
    setAllSubmited((prev) => prev.filter((item) => item.id !== id));
  };

  const resetDraft = () => {
    setItems([]);
  };

  useLocalStorage("allSubmitted", allSubmited);

  return (
    <AppContext.Provider
      value={{
        items,
        addItem,
        editItem,
        cancelItem,
        submitedItem,
        submitItem,
        allSubmited,
        deletedItem,
        editAllSubmitted,
        resetDraft,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useContextItem = () => useContext(AppContext);

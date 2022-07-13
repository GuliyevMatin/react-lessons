import { useState } from "react";
import { createContext } from "react";
import AddDataModal from "../shared/components/AddDataModal";

export const modalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const values = {
    open,
    setOpen,
  };

  return (
    <modalContext.Provider value={values}>
       {children}
      {/* <AddDataModal setShowModal={setShowModal} showModal={showModal} /> */}
     
    </modalContext.Provider>
  );
};

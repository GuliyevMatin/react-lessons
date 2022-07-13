import { useState } from "react";
import { createContext } from "react";
import AddDataModal from "../shared/components/addDataModal";

export const modalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const values = {
    showModal,
    setShowModal,
  };

  return (
    <modalContext.Provider value={values}>
       {children}
      <AddDataModal />
     
    </modalContext.Provider>
  );
};

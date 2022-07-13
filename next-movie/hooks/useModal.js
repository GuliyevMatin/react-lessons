import { useContext } from "react"
import { modalContext } from "../providers/ModalProvider"

export const useModals =()=>useContext(modalContext)
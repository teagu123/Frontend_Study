import { useState } from "react";
import { createContext } from "react";

export const modalContext = createContext();

function ModalState({ children }) {
    const [modalview, setModalView] = useState(false);

    return (
        <>
            <modalContext.Provider value={{ modalview, setModalView }}>
                {children}
            </modalContext.Provider>
        </>
    );
}
export default ModalState;

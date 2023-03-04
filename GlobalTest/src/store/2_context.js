import { createContext, useState } from "react";

export const viewstate = createContext();

function context({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <viewstate.Provider value={[isModalOpen, setIsModalOpen]}>
                {children}
            </viewstate.Provider>
        </>
    );
}
export default context;

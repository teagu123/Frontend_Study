import { createContext, useState } from "react";

export const view = createContext();

function Context({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <view.Provider value={{ isModalOpen, setIsModalOpen }}>
                {children}
            </view.Provider>
        </>
    );
}
export default Context;

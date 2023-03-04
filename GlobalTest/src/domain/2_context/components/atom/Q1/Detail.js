import { useContext } from "react";
import { viewstate } from "../../../../../store/2_context";
import ContextQ1Detail2 from "./Detail2";

const ContextQ1Detail = () => {
    const [isModalOpen, setIsModalOpen] = useContext(viewstate);
    return (
        <>
            <h2>ContextQ1Detail</h2>

            <button onClick={() => setIsModalOpen(true)}>보이기</button>

            <ContextQ1Detail2 />
        </>
    );
};
export default ContextQ1Detail;

import { useContext } from "react";
import { list, viewState } from "../../../../../store/3_context";

const ContextQ2Form3 = () => {
    const { setUserList } = useContext(list);
    const { setStateSubmit } = useContext(viewState);
    const onReset = () => {
        setUserList([]);
        setStateSubmit(false);
    };

    return (
        <div>
            <h1>Q2Form3</h1>
            <button onClick={onReset}>RESET</button>
        </div>
    );
};
export default ContextQ2Form3;

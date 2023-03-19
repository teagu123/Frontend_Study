import { useContext } from "react";
import { list } from "../../../../../store/3_context";
const ContextQ2Form2 = () => {
    const { userList } = useContext(list);
    const onClickStatus = () => {
        userList.map((el) => (el.isEdit = true));
    };

    return (
        <div>
            <h1>Q2Form2</h1>
            <button onClick={onClickStatus}>STATUS 추가</button>
        </div>
    );
};
export default ContextQ2Form2;

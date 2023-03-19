import { useContext, useRef } from "react";
import { list } from "../../../../../store/3_context";
import ContextQ2Form2 from "./Form2";

/*
    form으로 헤사 form에 onSubmit으로 input값 두개를 가져올라했다.
    하지만 그러면 자식태그인 <ContextQ2Form2 />버튼에도 추가 버튼 기능이 똑같이 구현을 한다.
    이유는 모르겠지만 div로 변경하고, ref개를 사용해서 가져오는 형식으로 구현하였음. 뭐가 최선인지는 모르겠다.
*/
const ContextQ2Form = () => {
    const { userList, setUserList } = useContext(list);
    const name = useRef();
    const nickname = useRef();
    const onClickAdd = () => {
        setUserList([
            ...userList,
            {
                id: userList.length + 1,
                name: name.current.value,
                nickname: nickname.current.value,
            },
        ]);
        console.log(userList);
    };

    return (
        <div>
            <h1>Q2Form</h1>
            <input placeholder="name" ref={name} />
            <input placeholder="nick-name" ref={nickname} />
            <button onClick={onClickAdd}>추가</button>
            <ContextQ2Form2 />
        </div>
    );
};
export default ContextQ2Form;

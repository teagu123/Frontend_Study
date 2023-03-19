import { createContext, useState } from "react";

export const list = createContext();
export const viewState = createContext();

//list는 데이터 관리하는 state이고
//viewstate는 submit을 눌렀을때 isEdit:true인거를 보여주기 위해서 사용함, 2개 컴포넌트에서 사용하기때문에 context로 관리
function AllContext({ children }) {
    const [userList, setUserList] = useState([
        { id: 1, name: "홍길동", nickname: "히히" },
    ]);
    const [stateSubmit, setStateSubmit] = useState(false);

    return (
        <>
            <list.Provider value={{ userList, setUserList }}>
                <viewState.Provider value={{ stateSubmit, setStateSubmit }}>
                    {children}
                </viewState.Provider>
            </list.Provider>
        </>
    );
}
export default AllContext;

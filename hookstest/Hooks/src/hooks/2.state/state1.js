import { useState } from "react";

import PlayListMock from "../../__mock__/playList.json";

function State1() {
    const [list, setList] = useState(PlayListMock.playlist);
    const [title, setTitle] = useState();
    const [singer, setSinger] = useState();
    const [state, setState] = useState(false);

    const onChangeTitle = (el) => {
        setTitle(el.target.value);
    };
    const onChangeSinger = (el) => {
        setSinger(el.target.value);
    };
    const onClickAddList = (el) => {
        list.push({ title: title, signer: singer });
        setState((prev) => !prev);
    };
    const removeTitle = (title) => {
        setList(list.filter((el) => el.title !== title));
        console.log(title);
    };

    return (
        <>
            <h1>문제1</h1>
            <ul>
                {list.map((el) => (
                    <li>
                        <h3>{el.title}</h3>
                        <p>{el.signer}</p>
                        <button onClick={() => removeTitle(el.title)}>
                            삭제
                        </button>
                        <hr />
                    </li>
                ))}
            </ul>
            <div>
                <p>
                    곡명 : <input onChange={onChangeTitle} />
                </p>
                <p>
                    가수/작곡 : <input onChange={onChangeSinger} />
                </p>
                <p>
                    <button onClick={onClickAddList}>추가</button>
                </p>
            </div>
        </>
    );
}
export default State1;

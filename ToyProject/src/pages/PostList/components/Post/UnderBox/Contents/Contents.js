import styled from "styled-components";
import * as P from "../style";
import { useState } from "react";

function Contents({ postlist }) {
    const [view, setview] = useState(false);
    const [inputs, setInputs] = useState("");
    const onChangeInputs = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };
    const { contents, nickname, name } = inputs;

    const onChangeContents = () => {
        setview((prev) => !prev);
        if (postlist.myComment === "N")
            return alert("자신 댓글만 수정 가능합니다.");
        if (postlist.myComment === "Y") {
            postlist.content = contents;
            postlist.User.nick_name = name;
            postlist.User.id = nickname;
        }
    };
    return (
        <P.ContentsBox>
            <P.Profile>
                <Img src={postlist.User.profile_img} />
                <div>{postlist.User.nick_name}</div>
            </P.Profile>

            <P.ContentsCenter>
                <div>
                    <div>
                        {postlist.myComment === "Y" && view === true ? (
                            <input onChange={onChangeInputs} name="name" />
                        ) : (
                            <div>{postlist.User.id}</div>
                        )}
                        {/* <div>{postlist.User.id}</div> */}
                        <div>{String(postlist.createdAt)}</div>
                    </div>
                    <div>
                        <button onClick={onChangeContents}>✏️️</button>
                        <button>🗑️</button>
                    </div>
                </div>

                <div>{postlist.content}</div>
            </P.ContentsCenter>
        </P.ContentsBox>
    );
}

export default Contents;

const Img = styled.img`
    border-radius: 50%;
`;

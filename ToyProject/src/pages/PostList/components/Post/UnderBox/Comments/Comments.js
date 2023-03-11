import { useState } from "react";
import styled from "styled-components";
import * as P from "../style";
import 짱아 from "../../../../../../__mocks__/my_profile_imgs/짱아.png";
import Slide from "../../../../../../components/Slide";

//postlist.Comments까지 props로 보냄
function Comments({ comments, posts, setPosts }) {
    const [view, setview] = useState(false);
    const [inputs, setInputs] = useState("");

    const onChangeInputs = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };
    const { contents, nickname, name } = inputs;

    // 연필(수정버튼) 누르면 input화면으로 변경
    // 깊은 복사를 하지않았는데도 수정이 가능하다. 음... 랜더링이되고 있기때문에 이것이 상관없는것인가.
    // 음...깊은 복사.....배열안에 객체 배열 객체 여서 find여서 어떤식으로 해줘야할지....모르겠다
    const onClickChange = (el) => {
        setview((prev) => !prev);
        if (el.myComment === "N") return alert("자신 댓글만 수정 가능합니다.");

        /*
            원래 같으면 여기를 깊은 복사해서 새로운 객체 만들어서
            그 객체를 변경한 후 그걸 useState로 변경한것을 했다. 하지만 이 로직은 위에 랜더링이 있기떄문에
            이걸 무조건적으로 위에 껄로 바꿔야할까요?
            */
        el.content = contents;
        el.User.nick_name = name;
        el.User.id = nickname;
        if (view === true) {
            el.User.profile_img = 짱아;
        }
    };

    //삭제 버튼 클릭
    const onRemove = (el) => {
        if (el.myComment === "N")
            return alert("자신 작성한것만 삭제 가능합니다.");

        el.content = "";
        el.User.nick_name = "";
        el.User.id = "";
        el.User.profile_img = "";
        console.log(el);
    };

    return (
        <>
            {comments.map((el) => (
                <P.CommentsBox>
                    {/* 댓글 프로필 이미지 및 닉네임 */}
                    <P.CommentProfile>
                        <Img src={el.User.profile_img} />

                        {el.myComment === "Y" && view === true ? (
                            <input onChange={onChangeInputs} name="name" />
                        ) : (
                            <div>{el.User.nick_name}</div>
                        )}
                    </P.CommentProfile>

                    {/* 댓글 프로필 이미지 그 외 나머지 */}
                    <P.CommentCenter>
                        {/* 댓글 상단 */}
                        <div>
                            <div>
                                {el.myComment === "Y" && view === true ? (
                                    <input
                                        onChange={onChangeInputs}
                                        name="nickname"
                                    />
                                ) : (
                                    <div>{el.User.id}</div>
                                )}
                                <div>작성 날짜</div>
                            </div>
                            <div>
                                <button onClick={() => onClickChange(el)}>
                                    ✏️️
                                </button>
                                <button onClick={() => onRemove(el)}>🗑️</button>
                            </div>
                        </div>
                        {/* 댓글 하단 */}
                        {el.myComment === "Y" && view === true ? (
                            <textarea
                                name="contents"
                                onChange={onChangeInputs}
                            />
                        ) : (
                            <div>{el.content}</div>
                        )}
                    </P.CommentCenter>
                </P.CommentsBox>
            ))}
        </>
    );
}

export default Comments;

const Img = styled.img`
    border-radius: 50px;
`;

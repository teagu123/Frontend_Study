import { useState } from "react";
import styled from "styled-components";

function Comment({ post, setPost, realPost, taek }) {
    //삭제
    const [realContent, setRealContent] = useState("");

    const oncontent = (e) => {
        setRealContent(e.target.value);
    };

    const deleteBtn = (el) => {
        window.confirm("정말 삭제 하시겠습니까?");
        {
            if (el.myComment === false) return alert("XXX 삭제 불가 XXX");
            setPost((prev) => ({
                ...prev,
                Comments: [
                    ...prev.Comments.filter(
                        (e) => e.User.nickname !== el.User.nickname
                    ),
                ],
            }));
        }
    };

    const ChangeBtn = (el) => {
        if (!el.myComment) return alert("XXX 변경 불가 XXX");
        //이거는 수정 눌렀을때
        if (el.change) {
            //이거 change 변경 후
            const newPost = { ...realPost };
            const comment = newPost.Comments.find(
                (comment) => comment.id === el.id
            );
            comment.change = false;
            comment.content = realContent;
            setPost(newPost);

            //이거 content 변경 전
        } else {
            const newPost = { ...realPost };
            const comment = newPost.Comments.find(
                (comment) => comment.id === el.id
            );
            comment.change = true;
            setPost(newPost);
        }
    };

    //수정

    return (
        <S.CommentItem>
            {realPost.Comments.map((el) => (
                <>
                    <p>
                        작성자: <span>{el.User.nickname}</span>
                    </p>
                    {el.change ? (
                        <input
                            placeholder="수정할 댓글 내용"
                            onChange={oncontent}
                        />
                    ) : (
                        <p>
                            댓글 내용: <span>{el.content}</span>
                        </p>
                    )}

                    <button onClick={() => deleteBtn(el)}>삭제</button>
                    {el.change ? (
                        <button onClick={() => ChangeBtn(el)}>수정완료</button>
                    ) : (
                        <button onClick={() => ChangeBtn(el)}>수정</button>
                    )}
                </>
            ))}
        </S.CommentItem>
    );
}
export default Comment;

const CommentItem = styled.li`
    border: 1px solid #000;
    margin: 10px;
`;

const S = {
    CommentItem,
};

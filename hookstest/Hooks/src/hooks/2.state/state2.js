import { useRef, useState } from "react";
import styled from "styled-components";
import Comment from "../../components/2.state/comment";

function State2() {
    /*  
    문제 2.
    Q1. 아래 작성된 state의 mock data를 활용하여
        댓글 목록을 화면에 랜더링 해보세요 :)
        Components는 src/components/state/comment.js를 활용하세요
    Q2. 댓글 작성 수정 삭제 기능을 구현해보세요 :)
            1. 댓글 작성 기능
            2. 댓글 수정 기능
            3. 댓글 삭제 기능 ( 본인이 작성한 댓글만 삭제할 수 있습니다, myComment 활용 )
            */

    const [inputContent, setInputContent] = useState("");
    const [inputName, setInputName] = useState("");

    //input값 2개 가져오기 (nickname, contents)
    const inputNickname = (e) => {
        setInputName(e.target.value);
    };
    const inputContents = (e) => {
        setInputContent(e.target.value);
    };

    //추가 버튼 클릭
    const onAddList = () => {
        const newarr = { ...post };
        const newContent = {
            User: {
                nickname: inputName,
            },
            id: post.Comments.length + 1,
            content: inputContent,
            myComment: true,
            change: false,
        };
        newarr.Comments.push(newContent);
        setPost(newarr);
    };

    //
    const [post, setPost] = useState({
        title: "안녕하세요 여러분 김성용 강사입니다 :)",
        content: "오늘도 모두 화이팅입니다!",
        User: {
            nickname: "김성용",
            age: 20,
            height: 190,
        },
        Comments: [
            {
                User: {
                    nickname: "김사과",
                },
                id: 1,
                content: "오늘도 화이팅입니다!",
                myComment: false,
                change: false,
            },
            {
                User: {
                    nickname: "반하나",
                },
                id: 2,
                content: "오늘도 화이팅입니다!",
                myComment: false,
                change: false,
            },
            {
                User: {
                    nickname: "오렌지",
                },
                id: 3,
                content: "오늘도 화이팅입니다!",
                myComment: false,
                change: false,
            },
            {
                User: {
                    nickname: "이멜론",
                },
                id: 4,
                content: "오늘도 화이팅입니다!",
                myComment: false,
                change: false,
            },
            {
                User: {
                    nickname: "박수박",
                },
                id: 5,
                content: "오늘도 화이팅입니다!",
                myComment: false,
                change: false,
            },
        ],
    });

    return (
        <S.Wrapper>
            <h1>문제2</h1>
            <S.PostBox>
                <S.PostTitle>제목: {post.title}</S.PostTitle>
                <S.PostContent>내용: {post.content}</S.PostContent>
            </S.PostBox>
            <S.PostInfo>
                <p>
                    작성자: <span>{post.User.nickname}</span>
                </p>
                <p>
                    작성자 나이: <span>{post.User.age}</span>
                </p>
                <p>
                    작성자 키: <span>{post.User.height}</span>
                </p>
            </S.PostInfo>
            <div>
                <p>
                    댓글 수: <span>{post.Comments.length}</span>
                </p>
                <input placeholder="작성자" onChange={inputNickname} />
                <input placeholder="댓글 내용" onChange={inputContents} />
                <button onClick={onAddList}>댓글 작성</button>
            </div>
            <S.CommentList>
                <Comment
                    post={post.Comments}
                    setPost={setPost}
                    realPost={post}
                />
            </S.CommentList>
        </S.Wrapper>
    );
}

export default State2;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PostBox = styled.div`
    background-color: #999;
    width: 360px;
    padding: 10px;
`;

const PostTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

const PostContent = styled.p`
    color: #fff;
`;

const PostInfo = styled.div`
    width: 360px;
    border: 3px solid #f00;
    padding: 10px;
    margin: 10px;

    p {
        display: flex;
        justify-content: space-around;
    }

    span {
        font-weight: bold;
    }
`;

const CommentList = styled.ul`
    width: 960px;
`;

const S = {
    Wrapper,
    PostBox,
    PostTitle,
    PostContent,
    PostInfo,
    CommentList,
};

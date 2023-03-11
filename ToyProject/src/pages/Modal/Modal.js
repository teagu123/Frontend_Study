import { useContext, useState } from "react";
import styled from "styled-components";
import { modalContext } from "../../context/ModalContext";
import 짱구 from "../../__mocks__/my_profile_imgs/다운로드.png";

function Modal({ posts, setPosts }) {
    //Posts 데이터 받아왔음
    const { modalview, setModalView } = useContext(modalContext);
    // console.log(Posts);
    const { inputs, setInputs } = useState("");
    const todayDate = new Date();
    //Modal창 작성 버튼
    /*
        1. 작성 버튼 누르면 input값들 객체에 추가 //완료
        2. modal창 false로 하고 //
        4. 객체를 변경하기 위해서 post라는 놈을 state로 관리한다?
        그래야지 unshift를 하던 push를 하던 원본을 교체하려면 이 방법만 있는 건가?
        3. 이거 맨앞에 추가해야함 //

        문제점)
        input type file이 어떤 건지 경로를 알아야 이미지를 가져 올수있다
        하지만 보안상의 문제로 C:\fakepath 이런식으로 온다 이걸 어떤식으로 고칠수 있을까?
    */
    const aa = (e) => {
        console.log(e.target.value);
    };
    const addlist = (e) => {
        e.preventDefault();
        console.log(e.target.file.value);
        const Target = e.target;
        const addInput = {
            id: "taegi",
            content: Target.inputContents.value,
            Post_img: [e.target.file.value],
            User: {
                id: Target.inputId.value,
                nick_name: Target.inputNickname.value,
                profile_img: 짱구,
            },
            Comments: [
                {
                    User: {
                        id: "",
                        nick_name: "",
                        profile_img: "",
                    },
                    content: "",
                    createdAt: "",
                    id: Math.floor(Math.random() * 10000000),
                    myComment: "Y",
                },
            ],
            createAt: "",
            myPost: "Y",
        };
        setPosts([addInput, ...posts]);
        setModalView(false);
    };
    return (
        <ModalBox onSubmit={addlist}>
            <Top>
                <div>이미지</div>
                <div>
                    <div>
                        <span>아이디</span>
                        <input
                            placeholder="ID"
                            name="inputId"
                            // onChange={onPushInputs}
                        />
                    </div>
                    <div>
                        <span>닉네임</span>
                        <input
                            placeholder="NickName"
                            name="inputNickname"
                            // onChange={onPushInputs}
                        />
                    </div>
                </div>
            </Top>

            <Title
                type="text"
                placeholder="제목을 입력하세요"
                name="inputTitle"
                // onChange={onPushInputs}
            />

            <Contents
                id=""
                cols="30"
                rows="10"
                placeholder="내용을 입력하세요"
                name="inputContents"
                // onChange={onPushInputs}
            ></Contents>

            {/* <FileBox>
                <input placeholder="첨부파일" />
                <label>📁</label>
                <input type="file" />
            </FileBox> */}

            <File type="file" name="file" onClick={aa} />

            <Button>
                <button>작성</button>
                <button onClick={() => setModalView(false)}>취소</button>
            </Button>
        </ModalBox>
    );
}
export default Modal;

const ModalBox = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 40px;
    width: 600px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f4f5f9;
    border-radius: 20px;
`;

const Top = styled.div`
    display: flex;
    align-items: center;

    & > div:first-child {
        padding-right: 20px;
    }
    & > div:last-child {
        font-size: 20px;
    }
    & > div:last-child > div > span {
        font-weight: 800;
        padding-right: 10px;
    }
    & > div:last-child > div > input {
        font-size: 20px;
        border: none;
        background-color: transparent;
    }
`;

const Title = styled.input`
    font-size: 20px;
    padding: 10px 20px;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid black;
`;

const Contents = styled.textarea`
    height: 195px;
    border: none;
    background-color: transparent;
    font-size: 20px;
    padding: 10px 10px;
    resize: none;
`;

const File = styled.input`
    font-size: 20px;
    padding: 10px 20px;
    border: none;
    background-color: transparent;

    /* & > input:first-child {
        display: inline-block;
        height: 40px;
        padding: 0 10px;
        vertical-align: middle;
        border: 1px solid #dddddd;
        width: 78%;
        color: #999999;
    }

    & > label {
        display: inline-block;
        padding: 10px 20px;
        color: #fff;
        vertical-align: middle;
        background-color: #999999;
        cursor: pointer;
        height: 40px;
        margin-left: 10px;
    }

    & > input:last-child {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
        border: 0;
    } */
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    & > button {
        margin: 0px 20px;
        font-size: 20px;
        padding: 8px 30px;
        border: none;
        border-radius: 15px;
    }
    & > button {
        background-color: #252c41;
        color: white;
        :hover {
            background-color: #f1404b;
        }
    }
`;

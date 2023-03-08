import styled from "styled-components";
import * as P from "../style";

function Contents({ postlist }) {
    return (
        <P.ContentsBox>
            <P.Profile>
                <Img src={postlist.User.profile_img} />
                <div>{postlist.User.nick_name}</div>
            </P.Profile>

            <P.ContentsCenter>
                <div>
                    <div>
                        <div>{postlist.User.id}</div>
                        <div>{String(postlist.createdAt)}</div>
                    </div>
                    <div>
                        <button>✏️️</button>
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

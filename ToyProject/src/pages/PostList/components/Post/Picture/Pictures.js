import styled from "styled-components";

function Pictures({ el }) {
    // console.log(postImg);
    return (
        <>
            <Images src={el} />
        </>
    );
}

export default Pictures;

const Images = styled.img`
    width: 599px;
    height: 350px;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 20px;
`;

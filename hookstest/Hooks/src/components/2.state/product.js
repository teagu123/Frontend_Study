import styled, { createGlobalStyle } from "styled-components";

function ProductCard({ onNavigate, productLists }) {
    return productLists.map((list) => (
        <S.Item onClick={() => onNavigate(list.productNumber)}>
            <h4>{list.productName}</h4>
            <p>상품번호: {list.productNumber}</p>
            <p>가격: {Number(list.productPrice).toLocaleString()}원</p>
            <p>사이즈: {list.productSize}</p>
            <p>평점: {list.productRating}</p>
            <p>리뷰: {list.productReview}</p>
        </S.Item>
    ));
}

export default ProductCard;

const Item = styled.li`
    border: 1px solid #000;
    cursor: pointer;
    width: 300px;
    margin: 16px auto;
`;

const S = {
    Item,
};

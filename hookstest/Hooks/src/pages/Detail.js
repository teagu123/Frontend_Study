// import { normalizeSearch } from "@remix-run/router/dist/utils";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productList from "../__mock__/products.json";

function DetailPage() {
    const params = useParams();
    const { productNumber } = params;

    //이건 잘못찾아갔을때 다시 경로 설정을 위해서
    const navigate = useNavigate();

    const inputReviewer = useRef();
    const inputReview = useRef();
    const inputRating = useRef();

    //Review를 state관리
    const [newarr1, setNewarr] = useState();

    useEffect(() => {
        setNewarr(
            productList.products.find(
                (el) => el.productNumber === productNumber
            )
        );
    }, []);

    //pushBtn
    console.log(productList.products[0].productNumber);
    const post = { ...newarr1 };
    const onAddReview = () => {
        const newContent = {
            reviewer: inputReviewer.current.value,
            review: inputReview.current.value,
            rating: inputRating.current.value,
        };
        post.Review.push(newContent);
        setNewarr(post);
    };

    //아래 코드하면 newarr.productNumber를 찾을수 없음.......
    // if (newarr.productNumber === productNumber) return navigate("/");

    const [data, setData] = useState(productList.products);

    return (
        <>
            <h4>{data.productName}</h4>
            <p>상품번호: {data.productNumber}</p>
            <p>가격: {Number(data.productPrice).toLocaleString()}원</p>
            <p>사이즈: {data.productSize}</p>
            <p>평점: {data.productRating}</p>
            <p>리뷰: {data.productReview}</p>
            <hr />
            <h2>리뷰</h2>
            <hr />
            {data.map((el) => (
                <>
                    <h3>reviewer :{el.reviewer}</h3>
                    <h3>review :{el.review}</h3>
                    <h3>rating :{el.rating}</h3>
                    <hr />
                </>
            ))}
            <input placeholder="reviewer" ref={inputReviewer} />
            <input placeholder="review" ref={inputReview} />
            <input placeholder="rating" ref={inputRating} />
            <button onClick={onAddReview}>리뷰 추가</button>
        </>
    );

    /* 상세 페이지는 자유롭게 꾸미시면 됩니다. 아직 해당 부분의 진도가
            나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은 미리
            콘솔에 찍어두었습니다. 단, 없는 번호 상품으로 접근 시 state페이지로
            돌아가도록 구현해주세요 */

    // <div>
    //         <h4>{list.productName}</h4>
    //         <p>상품번호: {list.productNumber}</p>
    //         <p>가격: {Number(list.productPrice).toLocaleString()}원</p>
    //         <p>사이즈: {list.productSize}</p>
    //         <p>평점: {list.productRating}</p>
    //         <p>리뷰: {list.productReview}</p>
    //     </div>
}
export default DetailPage;

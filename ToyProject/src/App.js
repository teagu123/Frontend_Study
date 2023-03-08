import { useContext, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import { modalContext } from "./context/ModalContext";
import Modal from "./pages/Modal/Modal";
import Index from "./pages/PostList/components/Post/index";
import { MockPost } from "./__mocks__/post";

/*
    
*/
function App() {
    const Posts = MockPost(10);
    const [posts, setPosts] = useState(Posts);
    /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/

    const { modalview } = useContext(modalContext);
    console.log(posts);
    return (
        <>
            {modalview && <Modal posts={posts} setPosts={setPosts} />}
            <Header />
            {posts.map((el) => (
                <>
                    <Index postlist={el} />
                </>
            ))}
        </>
    );
}

export default App;

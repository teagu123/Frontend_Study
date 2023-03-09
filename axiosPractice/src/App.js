import axios from "axios";

/*
  1. npm install axios (axios 설치?)
  2. import axios from 'axios' (axios import하기)
  3. 데이터는 json사이트에서 posts를 받을 예정
  4. axios 통신해야한다.
  5. 
*/

axios
    .get("https://my-json-server.typicode.com/typicode/demo/posts")
    .then(function (response) {
        console.log(response);
    });
function App() {
    return <></>;
}

export default App;

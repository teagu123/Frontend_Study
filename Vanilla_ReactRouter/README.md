### 라이브러리 없이 React Router Dom 구현

#### 라우터의 기능 💡

- url에 변경 인식
- url에 따른 페이지를 보여줘야함
- 이 코드만 있으면 어디든 라우터를 사용할수 있도록 (재사용성이 있어야한다.)

#### 로컬실행

npm i
npm run dev

#### 요구사항

1. 해당주소에 적합한 페이지를 보여준다.
2. 홈페이지, 상세페이지, 등록페이지로 이동시켜줄 버튼이 있어야한다.
3. Router, Route 컴포넌트를 구현해야하며

```
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/register" element={<Register />} />
    </Routes>
```

#### 구현 결과

<center>
<img src = "https://github.com/teagu123/Frontend_Study/assets/103398790/beb15de8-8669-4b14-9ef3-4285e6d0102e" width = "45%" ></center>

- Home, Detail, Register처리와 Route에 없는 url이면 Error Page로 처리
  ㅇ
- 단, children을 처리하지 못하였음. 추후에 다시 처리할 예정

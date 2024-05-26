### 컴포넌트 생성 및 중첩

React앱은 컴포넌트로 만들어진다. 그래서 컴포넌트는 고유한 로직과 모양을 가진 UI의 일부다. 즉, 로직과 모양을 다 가진다. 그래서 컴포넌트가 버튼만큼 작을수도있고, 페이지만큼 클수도있다.

```
export default function ComponentsEx(){
    return(
        <ex>예시입니다.</ex>
    )
}
```

위와같이 컴포넌트를 만들었다. 그걸 다른 컴포넌트에서 불러서 합칠수있다.

```
export default function TotalComponents(){
    return(
        <div>여기서 합치자</div>
        <ComponentsEx/>
    )
}
```

이렇게하면 위에 결과는
여기서 합치자
예시입니다.
이런식으로 결과가 나온다.

React에서 컴포넌트는 무조건 대문자로 시작해야한다. 하지만 함수같은 경우는 대문자가 아니여도 좋다.

### JSX로 마크업 작성하기

위에 코드는 JSX라는것이다. 리액트로 무언가를 한다면 거의다 JSX를 사용하게 될것이다. JSX는 HTML보다 더 엄격하다. JSX는 <div></div>혹은 <></>이렇게 하나의 부모로 감싸야한다.

```
export default function TotalComponents(){
    return(
        <>
        <div>여기서 합치자</div>
        <ComponentsEx/>
        </>
    )
}
```

### 데이터 표시하기

JSX를 사용하면 js에 마크업을 넣을수있다. 중괄호를 사용하면 코드에서 일부 변수를 삽입하여 사용자에게 표시할수있도록 JS로 이스케이프할수있다.

```
return(
    <h1>
        {user.id}
    </h1>
)
```

### 조건부 랜더링

React에서는 조건을 작성하기 위한 특별한 문법이 없습니다. 대신 js코드에서 if문을통해 조건부로 JSX를 포함할수있습니다.

```
if(isLoading) return <LoadingPage/>
if(isError) returnn <ErrorPage/>

return(
    <>
        main content
    </>
)
```

보다 간단한 코드를 원한다면 conditional operator를 사용할수있습니다. 이것은 JSX에서 사용가능합니다.

```

return(
    <>
        {
            isLoading ? <LoadingPage/>: main content
        }
    </>
)
```

### 목록 렌더링

컴포넌트 목록을 렌더링하려면 for loop 혹은 배열 함수와 같은 js기능을 사용해야합니다.

```
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

```
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

여기 li에 key를 봐보자. 목록의 각 항목에 대해 형제 항목 중에서 해당 항목을 고유하게 식별하는 문자열 혹은 숫자를 전달해야한다. 일반적인 키는 데이터베이스 id와 같은 데이터에서 가져와야한다. 이유는 react는 나중에 항목의 삽입 삭제 재정렬할때 어떤일이 있어났는지 알기위함이다

### 이벤트에 응답하기 (Responding to events)

컴포넌트 내부에 이벤트 핸들러 함수를 선언하여 이벤트에 응답할수있다.

우리가 click event 즉, 예를 들어 onClick={handleClick}이라고 해보자 여기서 안에서 alert를 실행시키는데 두번이 뜨는 현상! 이게 뭘까? dev환경에서 StrictMode컴포넌트의 하위에있는 컴포넌트가 처음 렌더링할때 React가 오류 검사등을 위해 한번더 렌더링 시킨다. 오직 dev모드에서만 그런다는 뜻이다.

### 훅 사용하기 (Using Hooks)

use로 시작하는 함수를 훅이라고 한다. useState는 React에서 제공하는 빌트인 훅입니다. 이번에는 하나의 예시를들어보겠습니다.

```
function Main(){
    const [count, setCount] = useState(0);

    return(
        <Sub/>
        <Sub/>
    )
}
```

지금 이 컴포넌트의 구조는 Main에서 state를 관리하는데 Sub에 버튼이 있어서 sub에서 눌렀을때 state가 변경이 되어야한다. 이렇게 자식의 props를 전달하여 버튼에 이벤트를 통해 state공유를 하신 형식을 lifting state up이라고 한다. state를 끌어올리면 이렇게 component끼리 공유가 가능하다.

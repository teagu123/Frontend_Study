### LearnReact_DescribingTheUI

React는 UI를 랜더링하기 위한 JS 라이브러리다. UI는 버튼, 텍스트, 이미지와 같은 작은 단위로 구성, React를 사용하면 재사용 가능하고 중첩 가능한 컴포넌트로 결합할수있다는 장점이있다. 그래서 지금 보는 웹사이트들도 이러한 컴포넌트로 분리하고 이것을 합친 형태들이다.

#### first Component

리액트에서 컴포넌트라고 불리는 분리된 UI조각으로 구축된다.
그래서 img지들만 관리하는 작은 단위의 이런 컴포넌트도 있다. 불러오기만 하면 된다.

```
  function Profile() {
	  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  }
  export default Profile
```

이렇게 Profile이라는 component가 있으면 재사용하기만 하면 된다. 이게 리액트의 장점입니다.

#### Writing markup with JSX

각 React컴포넌트는 React가 브라우저에 렌더링하는 일부 마크업을 포함할 수 있는 JS함수입니다. 그래서 리액트는 JSX 구문 확장자를 사용해 마크업을 표시한다.

#### JS in JSX with curly braces

JSX를 사용하면 js파일내에 htmlrhk d

#### 조건부 랜더링

```
if (isPacked) {
  return <li className="item">{name}</li>;
}
return <li className="item">{name}</li>;
```

이 코드가 치명적인것은 아니지만, DRY규칙에는 좋지않다. 대신 가독성이 좋다고 생각한다.

이렇게 삼항연산자를 사용해서 할수있다.
isPacked가 참이면 name + ' ✔'이걸 랜더링하고 그렇지 않다면 name을 랜더링한다.

```
return (
  <li >
    {isPacked ? name + ' ✔' : name}
  </li>
);
```

#### 목록 랜더링

filter(), map()을 사용해 데이터 배열을 필터링하고 컴포넌트 배열로 반환하겠다.

여기서
test.map((el)=> <div>test</div>)
이렇게할때 화살표 함수 => 뒤에는 return을 작성하지 않아도된다.

test.map((el)=> {return <div>test</div>})
이렇게 중괄호가 붙으면 return을 작성해야한다

근데 이렇게만하면 오류가 뜰것이다.
어떤 오류가 뜰까? 바로 key를 주지 않았다는 오류다.

key는 각 컴포넌트에 어떤 배열 항목에 해당하는지 리액트가 나중에 매칭할수있도록 한다는것이다. 이는 배열 항목을 이동하거나 삽입하거나 삭제될때 중요해진다.
잘만들어진 key는 react가 정확하게 무슨 일이있는지를 추론하고 Dom트리를 올바르게 업데이트하는데 도움이 된다.

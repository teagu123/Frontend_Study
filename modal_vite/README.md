### Vite!! 너 누구야?

오늘의 학습할 내용은 Vite라는 녀석이다.

일단은 왜 공부하려고 하는가? 나는 항상 React를 **CRA**를 사용한다.

CRA는 JS로 구성된 Webpack을 사용하여 속도가 느린 편이다.
처리할 양이 많다면 그 속도의 체감을 느낄수있을것이다.

그래서 Esbuild를 기반으로 만들어진 빌드툴을 공부해볼 예정이다.
이것은 React를 지원한다.

--

### Vite 초기 세팅

CRA처럼 프로젝트 세팅은 아래와 같이 진행하면 된다.
Vite는 Node.js 버전 12.2.0 이상을 요구한다. (일부 템플릿은 더 높은 버전을 요구할수있다)

```
npm create vite@latest

```

그러면 TS 혹은 JS를 선택하고 React까지 선택을 하면 쉽게 프로젝트가 열린다.

![](https://velog.velcdn.com/images/taegi/post/decc1dd7-cf7d-4a82-a8c6-b0a5ac0b0d02/image.png)

```
cd 프로젝트폴더명
npm i
npm run dev
```

--

### Vite를 더 알아보자

Vite는 로컬에서 개발을 할 때 번들링을 하지 않고 ESM 방식을 사용하기 떄문에 로컬 서버 구동 속도가 매우 빠르다. 수백 개 정도 되는 모듈을 갖고 있는 웹 서비스를 웹팩과 비트로 비교한다면 엄청난 차이를 볼수있다.

웹팩은 즉, 서버를 시작할때 모듈들을 번들링해서 메모리에 적재하는 시간이 필요하다.
하지만 Vite는 번들링 하지않고 서버를 실행시킨다. 즉, 명령어가 들어가면 서버가 실행이 되는것이다.

그래서 Vite를 보면 index.html 이게 소스에있다. 즉, 추가적인 번들링 없이 파일을 진입하기 위해서 넣은것이다.

![](https://velog.velcdn.com/images/taegi/post/a2680b61-5324-4759-8ee1-b9fce7ab01ff/image.png)

그리고 vite는 HMR(Hot Module Replacement)은 앱을 종료하지 않고 갱신된 파일만을 교체하는 방식입니다. 어떤 모듈이 수정되면 Vite는 수정된 모듈만 교체할뿐 브라우저에서 해당 모듈을 요청하면 교체된 모듈을 전달하는것이다!

엄청난 차이를 보여주는 vite로 프로젝트를 진행할 예정이다.

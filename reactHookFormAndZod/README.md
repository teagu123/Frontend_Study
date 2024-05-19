## React Hook Form + Zod 공부 정리

회원가입 혹은 로그인창을 구현하려면 어떤식으로 진행을 하려고하시나요?
아마 react하신지 별로 안되신 분이라면 **useState**를 통해 구현할려고 생각을 했을거에요.

<center>
<img src = "https://velog.velcdn.com/images/taegi/post/7697fd68-3edd-4207-928e-beab5a2742e0/image.gif" width = "45%" ></center>
 
👆🏻그러면 위와같이 input이 5개가 있을때 모든 input을 useState로 처리할꺼인가요?
각자의 validation이 다른 input들을 처리하기 좋은 방법을 알려드리겠습니다. 
### useState로 관리하는 단점
1. state상태 변환시 컴포넌트 리랜더링
2. validation 혹은 Error 처리 힘들다. 또한 유지보수가 어렵다.

---

### 제어 컴포넌트와 비제어 컴포넌트

#### 제어 컴포넌트

사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트한다.
(React에 input은 "controlled component")라고 한다.

#### 비제어 컴포넌트

간단하게 보면 바닐라 자바스크립트에서 form 즉, submit button을 클릭할때 내부의 값을 가져온다 이거와 유사한 방식이다.
특징은 값이 실시간으로 동기화 되지 않는다는 점이다. 제어는 입력을 할때마다 리랜더링을 발생시키지만 비제어 같은 경우는 사용자가 직접 트리거 하기 전까지는 리랜더링을 발생시키지도 않고 값을 동기화 하지 않는다는 점이있다.

**✅ 제어와 비제어 기능 체크 표**

| <center>기능</center> | <center>제어</center> | <center>비제어</center> |
| :-------------------- | --------------------: | ----------------------: |
| 정보 검색             |    <center>O</center> |      <center>O</center> |
| 제출시 값 검증        |    <center>O</center> |      <center>O</center> |
| 실시간 유효성 검사    |    <center>O</center> |      <center>X</center> |

---

### 그러면 react-hook-form을 왜 써야하는가?

react-hook-form은 비제어 컴포넌트를 활용한다.
그래서 접근방식이 사용자가 input을 넣을때 마다 리랜더링에 대한 이슈를 해결할수있다.
또한 form안에서 진행을 하니 props drilling을 막을수있다.

> 💡 좀 더 편안하게 만드는 방법도 있나요?

네! **zod**를 사용하면 좀 더 편안하게 유효성 검사가 가능합니다.

#### 스키마 정의

```
import { z } from 'zod'
import REGEX from './regex'

const schema = z.object({
	id: z
		.string()
		.min(5, { message: '아이디를 입력해주세요. (최소 5글자)' })
		.max(10, { message: '아이디는 최대 10글자까지 입력 가능합니다' }),
	nickName: z
		.string()
		.min(3, { message: '닉네임를 입력해주세요.(최소 3글자)' })
		.max(10, { message: '닉네임은 최대 10글자까지 입력 가능합니다' }),
	password: z
		.string()
		.min(5, { message: '비밀번호를 입력해주세요 (최소 5글자)' }),
	email: z
		.string()
		.regex(REGEX.email, { message: '이메일 형식에 맞게 입력해 주세요' }),
	phone: z
		.string()
		.regex(REGEX.phone, { message: '핸드폰 형식에 맞게 입력해 주세요' }),
})
export default schema
```

스키마는 데이터 형식을 의미합니다.
위에를 보면 id는 string그리고 최소 5글자 최대10글자
그 미만 혹은 초과를 할때는 message라는것이 Error 메세지라고 생각하면 됩니다.

#### 로직 분리

위에 스키마는 constants/zodSchema.ts 이런식으로 따로 분리를 진행하였습니다.
React-hook-form과 schema를 분리하면서 가독성이 좋아 유지보수에 좋은 장점이있습니다.

#### 간단한 유효성 검사 형식

zod를 사용하면 react-hook-form을 사용하는것보다 훨씬 간단하게 처리가 가능하다
(일단 react-hook-form과 zod를 사용한 id validation을 예시로 진행해보겠습니다)

- **일반 react-hook-formd을 통한 id검사 min 1글자, max 10글자**

```
const ID_TYPE = {
	required: {
		value: true,
		message: '아이디를 입력해주세요',
	},
	maxLength: {
		value: 10,
		message: '아이디는 최대 10글자까지 입력 가능합니다',
	},
}
```

- **zod를 통한 id검사 min 1글자, max 10글자**

```
id: z.string().min(1, { message: '아이디를 입력해주세요' }).max(10, { message: '아이디는 최대 10글자까지 입력 가능합니다' }),
```

> **📌 차이가 느껴지시나요? 📌**
> 직접 개발을 진행하시다보면 훨씬 더 개발자 생산성에 좋은것을 확인할수있습니다.

#### 타입 추론

Zod는 스키마를 기준으로 타입스크립트 타입을 알아서 추론을 합니다. 타입스크립트를 사용해보신 분들은 강력한 타입 추론을 진행해주면 아주 편안한것이 느껴지시나요?

#### 결론

유효성 검사에 대한 부분이 zod를 통해서 엄청나게 간단하게 진행을 하는것을 볼수있었습니다. 또한 유지보수에 대한 부분도 상당히 좋겠죠? 또한 타입 추론을 통해서 개발자 생산성까지 좋은 zod입니다. 만약에 age 나이가 들어간다고 생각하면 input하나와 스키마에서 age에 대한것만 추가를 하면 됩니다. 이러한 부분에서 react-hook-form과 zod를 같이 사용하지 않을 이유가 없었습니다. 위의 예시는 간단한 유효성 검사를 진행한것입니다. 좀더 다른 option들을 보면서 실습을 진행할 예정입니다.

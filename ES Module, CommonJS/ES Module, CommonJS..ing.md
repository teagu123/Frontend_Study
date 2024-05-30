### ES Module, CommonJS는 뭘까?

이번에는 우리가 자주 사용하는 것중 Node.js에 존재하는 두가지 모듈 시스템인 CommonJS, EXMAScript Modules을 알아보려고한다.

### CoomonJS모듈과 ES모듈의 문법 비교

### CommonJS(CJS)

```
//add.js
module.exports.add=(x,y)=> x+y;

//main.js
const {add} = require('./add');

add(1,2);
```

- CLS는 require / module.exports 사용
- module loader는 동기적으로 작동
- CJS에서 ESM을 require할수는 없다

### ECMAScript Modules (ESM)

```
//add.js
export function add(x,y){
    return x + y
}

//main.js
import { add } from './add.js';

add(1, 2);
```

- ESM은 import / export 사용
- module loader는 비동기적으로 작동
- MSM에서 CJS를 import할수있다.

#### ES modules은 JS의 표준이고, CommonJS는 Node.js의 기본값이다.

ES module형태는 JS module system을 표준화하기 위해서 만들었다. 즉 재사용을 위해 JS코드를 캡슐화하는 표준형식이 된것이다.

반면에 CJS모듈은 Node.js에 내장되어있다. Node.js에서의 Es module이 도입되기 전에 CommonJS가 Node.js모듈의 표준이었습니다.
결론적으로 많은 양의 node.js에서의 라이브러리와 모듈은 CLS로 만들어진것이다. 프레임워크에서는 import와 export를 사용한다. 이 프레임워크는 바벨과 같은 트랜스파일을 사용하여 import/export를 이전 Node.js버전이 기본적으로 지원하는 require()로 바꿔서 컴파일합니다.

JS모듈의 표준이 되는 것 외에도 ES모듈 문법은 require()에 비해서 더 읽기 쉽다.

### 동기(Common JS)와 비동기(ES modules)

위에 한줄로 Common JS는 동기 ES modules은 비동기라고 특징을 설명했다. 우리가 수백개의 모듈이있는 대규모 프로젝트를 진행한다고 생각해보자 거기서 동기적으로 진행하는것보다는 비동기적으로 import를 사용하는것이 좋을것이다.

### 그러면 어떤것을 사용해야하나?

ES modules를 많이 사용한다. 일단 비동기로 동작의 속도가 더 빠르다는 장점이 존재하고, import하여 메모리를 적게 차지하며, 가독성이 좋고 순환 의존성을 지원한다는 점이있다.

#### 참고자료

- https://toss.tech/article/commonjs-esm-exports-field

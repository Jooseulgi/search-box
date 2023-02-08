# Search-Box

## 프로젝트 개요

질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

<br/>

## 구현 화면

### 1) 검색창 구현

<img width="70%" src="https://user-images.githubusercontent.com/54945205/217526360-78b89956-aa7a-4abd-8c52-fa82e75e2f5c.gif">

- 검색어 입력시 추천 검색어 노출
- api를 호출한 후 `try-catch`를 이용하여 [에러 핸들링 처리](https://github.com/Jooseulgi/search-box/blob/master/src/hooks/useSearch.ts)
- 검색어 없을 시 “검색어 없음”, 검색어 입력 중 "검색중.." 노출
- [해당 검색어 bold 처리](https://github.com/Jooseulgi/search-box/blob/master/src/components/SearchList.tsx)

### 2) 키보드로 검색어 이동

<img width="70%" src="https://user-images.githubusercontent.com/54945205/217527477-4f10856b-3342-451a-b173-5d6f47f3f1a7.gif">

- custom hook을 사용해서 [up, down 이벤트를 처리](https://github.com/Jooseulgi/search-box/blob/master/src/hooks/useKeyboard.ts)
- ref로 전체 리스트(ul)에 접근해 키보드로 검색어(li) index 선택

### 3) API 호출 최적화

<img width="70%" src="https://user-images.githubusercontent.com/54945205/217528683-df10f435-1e1e-49c7-90d4-79e72a152c3e.gif">

- Debounce로 0.5s 후 api를 호출하도록 하여 [api 호출 횟수 최소화](https://github.com/Jooseulgi/search-box/blob/master/src/components/SearchWrap.tsx)
- 검색어 호출 custom hook을 사용해서 [캐싱 기능 구현](https://github.com/Jooseulgi/search-box/blob/master/src/hooks/useSearch.ts)
- `getSickResults()` 함수에 사용자가 입력한 input 값이 들어오면 객체에 해당 값이 있는지 확인
  - input 값과 매치되는 key 값이 있다면 value 값을 리턴
  - 없다면 새로운 key, value 생성

<br/>

## 과제 요구사항

### 1) 범위

- [사이트 검색 영역](https://clinicaltrialskorea.com/) 클론하기

### 2) 요구사항

- 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
- 검색어가 없을 시 “검색어 없음” 표출
- API 호출 최적화
  - API 호출별로 로컬 캐싱 구현
    - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
  - 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
  - API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
- 키보드만으로 추천 검색어들로 이동 가능하도록 구현

<br/>

## 실행 방법

```bash
$ git clone https://github.com/Jooseulgi/search-box.git
$ cd search-box
$ npm install
$ npm start
```

<br/>

## 사용 기술

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=Tailwind%20CSS&logoColor=white) ![Husky](https://img.shields.io/badge/Husky-41454A?style=for-the-badge&logo=Husky&logoColor=white) <br/>

- <b>TypeScript</b>
  - 컴파일 단계에서 오류 확인이 가능해 코드의 안정성을 주고 type 학습을 위해 선택했다.
- <b>Axios</b>
  - fetch와 비교해 서버로부터 데이터를 받은 후, json으로 변환할 필요가 없는 장점이 있다.
  - instance를 제작하여 fetch보다 가독성 높은 코드를 작성할 수 있어 선택했다.
- <b>Tailwind CSS</b>
  - 클래스의 이름을 생각할 필요가 없다는 장점이 있고 러닝 커브가 크지 않은 것 같아 학습해 볼 겸 선택했다.

<br/>

## 폴더 구조

```bash
search-box
├─ 📁 husky
├─ 📁 data # json-server data가 있는 폴더입니다.
├─ 📁 public
├─ 📁 src
│  ├─ 📁 components  # search-box 관련 components가 모여있는 폴더입니다.
│  ├─ 📁 hooks  # keyboard event, cache 관련 hook이 있는 폴더입니다.
│  ├─ 📁 pages  # 페이지 폴더입니다.
│  ├─ 📁 types  # 타입 선언 폴더입니다.
│  ├─ index.css
│  └─ index.tsx
├─ ⚙️ .eslintrc.json
├─ ⚙️ .gitignore
├─ ⚙️ .prettierrc.json
├─ ⚙️ package-lock.json
├─ ⚙️ package.json
├─  README.md
├─ ⚙️ tailwind.config.js
└─ ⚙️ tsconfig.json
```

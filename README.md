# YouTube Playlist Manager

## 프로젝트 소개
이 프로젝트는 YouTube API를 사용하여 사용자가 좋아하는 음악 플레이리스트를 관리할 수 있는 웹 애플리케이션입니다. 사용자는 YouTube에서 음악을 검색, 저장, 재생할 수 있습니다.

## 시작하기 전에
본 프로젝트는 Node.js 기반으로 작성되었으며, React와 여러 필수 라이브러리를 사용합니다.

### 필수 조건
- Node.js가 설치되어 있어야 합니다. [Node.js 공식 웹사이트](https://nodejs.org/)에서 다운로드할 수 있습니다.
- 터미널에서 `node -v`를 실행하여 Node.js가 성공적으로 설치되었는지 확인하세요.
- 필요하지 않은 파일이나 이전 프로젝트 파일이 있다면 정리합니다.


### 설치 방법
1. **프로젝트 클론하기**
````bash
git clone https://github.com/your-username/youtube-api.git
cd youtube-api
````

2. **필요한 라이브러리 설치**
> 프로젝트를 시작하기 전에 다음 라이브러리들을 설치해야 합니다.

- **React 설치**: `npx create-react-app 폴더이름` 명령어로 새로운 리액트 앱을 생성합니다. 현재 디렉토리에 설치하려면 폴더 이름 대신 `.`를 사용하세요.

- **react-router-dom 설치**: `npm install react-router-dom` 명령어로 SPA(Single Page Application) 내 라우팅을 관리할 수 있는 라이브러리를 설치합니다.

- **Axios 설치**: `npm install axios` 명령어로 비동기 통신을 위한 API 라이브러리를 설치합니다.

- **React Icons 설치**: `npm install react-icons` 명령어로 다양한 아이콘을 프로젝트에 추가할 수 있습니다.

- **React Player 설치**: `npm install react-player` 명령어로 유튜브 및 다른 비디오 스트리밍 서비스를 재생할 수 있는 컴포넌트를 설치합니다.

- **Sass 설치**: `npm install sass` 명령어로 CSS 전처리기를 설치합니다.

- **React Helmet Async 설치**: `npm install react-helmet-async` 명령어로 SEO를 개선할 수 있는 도구를 설치합니다.

- **Swiper 설치**: `npm install swiper` 명령어로 슬라이드 기능을 추가할 수 있는 라이브러리를 설치합니다.

## 사용 스택
- node.js 설치

## 프로젝트 실행 npm 명령어 
프로젝트를 실행하기 위한 명령어는 다음과 같습니다:
- **npm start**: 개발 서버를 시작하고 `http://localhost:3000`에서 애플리케이션을 볼 수 있습니다.
- **npm run build**: 애플리케이션을 프로덕션 준비 상태로 빌드합니다.
- **npm test**: 애플리케이션의 테스트를 실행합니다.
- **npm run eject**: Create-React-App에서 제공하는 빌드 도구와 설정을 사용자가 직접 관리할 수 있도록 추출합니다. 이 작업은 되돌릴 수 없습니다.

- **시작하기** : 
````bash
cd /Users/nicejmp/Documents/GitHub/youtube-api
npm start
````
이 문서는 프로젝트의 필요한 라이브러리 설치부터 실행까지의 단계를 명확하게 안내합니다. 필요에 따라 프로젝트 특성에 맞게 추가적인 수정을 진행하실 수 있습니다.


## 자동완성 명령어 
- rafc (처음자동으로 만들어 주는것)
- rafce
````bash
import React from 'react'

const Home = () => {
    return (
        <div>Home</div>
    )
}

export default Home
````

## home 화면 만드는 방법

````bash
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
````
파일을 생성하게 된 후 import를 통해 잘 만들어 졌는지 확인 해야 함. <br>
현재까지 만든 파일들 

````bash
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Developoer from './pages/Developoer'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/today' element={<Today />} />
        <Route path='/developoer' element={<Developoer />} />
        <Route path='/webd' element={<Webd />} />
        <Route path='/website' element={<Website />} />
        <Route path='/gsap' element={<Gsap />} />
        <Route path='/port' element={<Port />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/channel' element={<Channel />} />
        <Route path='/video' element={<Video />} />
        <Route path='/search' element={<Search />} />
        <Route path='/*' element={<Not />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

````

##


## 파일 압축 하는 방법
- npm run build를 사용  <br>

npm run build란? 
>npm run build는 Node.js 프로젝트에서 매우 일반적인 명령어로, 특히 웹 애플리케이션을 개발할 때 사용됩니다. 이 명령어는 프로젝트의 소스 코드를 최적화하고, 프로덕션 환경에서 사용할 수 있도록 준비하기 위해 컴파일 및 번들링하는 과정을 실행합니다. 여기에는 여러 단계가 포함될 수 있습니다

- 최적화: 소스 코드가 압축되고, 불필요한 코드가 제거됩니다(예: 개발 중에만 필요한 코드). <br>
- 번들링: 웹 애플리케이션의 모든 자바스크립트와 CSS 파일이 하나 또는 몇 개의 파일로 결합됩니다.  이렇게 하면 브라우저의 로드 시간이 단축되고, 네트워크 요청의 수가 감소합니다. <br>
- 트랜스파일링: 최신 자바스크립트(ECMAScript 6 이상) 코드를 모든 브라우저에서 호환 가능한 형태로 변환합니다. <br>
- 환경 설정: 프로덕션 환경에 맞게 환경 변수 설정을 조정합니다 <br>


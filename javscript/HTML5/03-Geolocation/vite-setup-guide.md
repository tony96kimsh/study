# 🚀 Vite 앱 만들기 & 개발 서버 실행 가이드

Vite는 빠르고 간편한 프론트엔드 개발 환경을 제공하는 빌드 도구입니다.  
이 문서는 Vite 프로젝트를 생성하고 개발 서버를 실행하는 기본적인 과정을 정리합니다.

---

## ✅ 1. Node.js 설치

Vite를 사용하려면 Node.js가 필요합니다.

- [Node.js 공식 다운로드](https://nodejs.org/)
- 설치 후 터미널에서 다음 명령어로 확인:

```bash
node -v
npm -v
```

---

## ✅ 2. Vite 앱 생성

### ▶ 새 폴더에 생성 (기본 방식)

```bash
npm create vite@latest my-app
cd my-app
```

### ▶ 현재 폴더에 바로 생성 (원하는 경우)

```bash
npm create vite@latest .
```

> 프롬프트가 뜨면 아래처럼 선택:
>
> - 프레임워크: `Vanilla`
> - 언어: `JavaScript`

---

## ✅ 3. 의존성 설치

```bash
npm install
```

---

## ✅ 4. 개발 서버 실행

```bash
npm run dev
```

### 실행 결과

- 기본 URL: [http://localhost:5173](http://localhost:5173)
- 서버가 실행된 뒤 주소창에 접속하면 앱을 확인할 수 있습니다.

---

## ✅ 5. 주요 파일 구조

```
my-app/
├── index.html           # 루트 HTML 파일
├── package.json         # 프로젝트 정보
├── vite.config.js       # Vite 설정
└── src/
    └── main.js          # 메인 자바스크립트 파일
```

---

## ✅ 6. 자동 새로고침 기능

개발 서버는 코드 변경 시 브라우저를 자동으로 새로고침합니다.  
빠르게 프론트엔드 작업을 반복하기에 매우 적합합니다.

---

## ✅ 7. 개발 종료

개발 서버를 종료하려면 터미널에서 `Ctrl + C`를 누릅니다.

---

## ✅ 참고 링크

- [Vite 공식 사이트](https://vitejs.dev/)
- [Vite GitHub 레포](https://github.com/vitejs/vite)

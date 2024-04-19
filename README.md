# \*\* oooo Service

[![GitHub Issues](https://img.shields.io/github/issues/IgorAntun/node-chat.svg)](https://github.com/IgorAntun/node-chat/issues) [![Current Version](https://img.shields.io/badge/version-1.22.21-green.svg)](https://github.com/IgorAntun/node-chat) [![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://igorantun.com/chat) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/IgorAntun/node-chat?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

ooo React Native 프로잭트 입니다.
상세 프로잭트 목표 및 계획은 노션 링크에서 확인해주세요.
![Notion](#)

![Chat Preview](#)

---

## API Docs

API 연결 문서는 아래 Postman 링크를 확인해주세요.

<a href="#" target="_blank"><img src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" alt="API Docs" style="height: auto !important;width: auto !important;" ></a>

Client Error Log Moniter는 아래 Sentry를 확인해주세요. 배포 된 앱 서비스에서 발생한 로그기록도 확인할 수 있습니다.

<a href="https://sense-cf.sentry.io/issues" target="_blank"><img src="https://docs.sentry.io/_next/static/media/sentry-wordmark-dark.8d22fe1e.svg" alt="Error Moniter" style="height: auto !important;width: auto !important;" ></a>

---

## File Structure

- **🗂 apis:** 통신 관련 (Axios, SWR)
- **🗂 assets:** 이미지, 폰트
- **🗂 components:** 화면 구성 UI로 비즈니스 로직을 갖지 않음
- **🗂 configs:** 설정 파일
- **🗂 containers:** 비즈니스 로직
- **🗂 hooks:** 커스텀 React Hook을 구성
- **🗂 redux:** Redux 구성 파일, Redux store
- **🗂 styles:** Style 파일
- **🗂 types:** type 정의 파일
- **🗂 utils:** 앱이 전체적으로 이용하는 간단한 함수
- **🗂 views:** 어플의 화면 단위로 Components를 조합

---

## Setup

이 저장소를 Fork 하여 PR로 관리합니다. `yarn` 으로 의존성을 설치하여 프로잭트를 구성하세요.

구성이 완료되었을 경우 `.env.*` 파일을 프로잭트 관리자에게 요청하여 `/configs/env`에 넣어주세요.

---

## Usage

**Setup**이 완료되었다면 `yarn start`로 프로잭트를 시작합니다.

실행 시 **metro**가 정상 실행되는지 확인하고 개발 플랫폼에 맞는 실행을 진행해주세요.
**metro**는 8081 포트에서 실행됩니다.

- `a` : Android Start
- `i` : iOS Start

---

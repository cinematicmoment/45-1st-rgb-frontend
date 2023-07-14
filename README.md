# < Wecode 1st project >

## 👨‍👩‍👧‍👦 Team rgb . 🖤

팀명 : rgb .<br>
Product Manager: 윤해찬(B)<br>
Project Manager: 이수빈(F)<br> 
Teammates: 탁호진(B), 이원준(F), 문유현(F), 김수정(F), 이경진(F)<br>

<br>

## 💡 About

1. 개발기간: 2023.05.01 ~ 2023.05.12 (총 2주)
2. 프로젝트 목적과 소개
- MZ세대(25~40세)를 타겟으로 매달 초청된 아티스트의 그림과 굿즈를 로테이션으로 판매하는 사이트 개발
- 요즘 세대의 예술 작품에 대한 많은 수요를 배경으로 제품 이미지 중심의 이솝 사이트 레이아웃을 참조하여 rgb 만의 <br>
큐레이팅 아트 사이트를 기획 하였습니다. rgb 는 매달 새로운 아티스트를 선정하여 작품과 굿즈를 한정판으로 판매하며, <br>
그림에 대한 희소성을 부여하고 rgb 의 소비자들은 매달 새로운 아티스트들의 작품과 철학을 즐길 수 있도록 구현하였습니다. <br>



<br>

## 🪡 Tech Stack

<div display=flex >

### FrontEnd <br>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  
### BackEnd <br>

## ⚙️ Collaboration Tool
  
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/trello-008FC7?style=for-the-badge&logo=trello&logoColor=white">
<img src="https://img.shields.io/badge/figma-FF61F6?style=for-the-badge&logo=figma&logoColor=white">
<img src="https://img.shields.io/badge/notion-181717?style=for-the-badge&logo=notion&logoColor=white">
<img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
<img src="https://img.shields.io/badge/postman-FF4500?style=for-the-badge&logo=postman&logoColor=white">

</div>

<br>

- 매일 오전 stand-up meeting에서 trello 툴로 작업 진행상황 및 해결 방안 공유 <br>
- 기획 초반 노션으로 기획의도, 전체적인 컨벤션 정리 <br>
- 피그마 툴로 레이아웃을 미리 기획/구상 하여 프로젝트 진행 <br>

![ezgif com-video-to-gif](https://github.com/xxslx/45-1st-rgb-frontend/assets/127685269/32d93bd9-9b5f-4e7f-aeb3-9b231802bbe9)
<br>

![ezgif-4-90f10d6a2d](https://github.com/xxslx/45-1st-rgb-frontend/assets/127685269/c8426056-54fb-473b-aed2-2c079cce1512)

<br>

## rgb . 에서의 작품 구매 Flow
<br>

> 메인 둘러보기 -> 상품리스트/ 상세페이지 둘러보기 -> 원하는 상품 선택 -> 장바구니 담기 버튼 누름과 동시에 로그인 창 뜸 ->
비회원의 경우 회원가입 하기 -> 원하는 상품 담기 -> 주문/결제하기 -> 인보이스 내역 확인하기
<br>

## Demo
<br>


## Main - 이수빈
<p>
<img src="https://github.com/xxslx/45-1st-rgb-frontend/assets/127685269/30459b5f-2286-4fe9-aab8-98f6a7fe4659" width=60%/></p>

#### 메인 화면에 생동감 있는 영상 표현과 심플한 작품 이미지 위주의 레이아웃 <br>
- 전면에 영상을 배치하여 사이트를 처음 방문하는 사용자의 관심도를 높임 <br>
- 2개의 Art / Goods Carousel UI 으로 다양한 콘텐츠를 한눈에 볼 수 있게 구현 <br>
=> 사이트 내부를 적극적으로 홍보할 수 있도록 기획/구현 <br>
- Carousel 밑의 indicator를 배치하여 사용자에게 현재 위치를 알 수 있게 구현 <br>
- api 로 이미지를 받아와 데이터 효율적 관리


## Login/Sign Up
#### 정보 기입 최소화와 모달 형식으로 사용자의 편의성을 높인 로그인/회원가입 <br>
- 유효성 검사 조건 불충족 경우, 실시간으로 입력창 하단에 안내 메세지 출력 <br>
- 필수 입력 사항 미 입력시 가입하기 버튼 비활성화 <br>
- 약관 정보 전체 선택 체크박스 구현 <br>
- 회원 가입 안내창 실행 후 화면 클릭 시 자동 로그인 구현 <br>
- 회원이 아닐 경우 회원가입으로 이어질 수 있는 모달 형식 플로우 구현 <br>


## Product List/Detail
#### 판매중인 상품들을 필터 적용하여 사용자의 접근성을 높인 상품리스트/페이지 <br>
- 카테고라이징으로 전체보기, 가격순, abc 순으로 sorting 기능 구현 <br>
- 상품 디테일 페이지 안의 이미지 수도 캐러셀 구현 <br>
- 상세페이지 안의 상세설명 페이지 슬라이드 애니메이션 효과 구현 <br>
- 로그인 여부에 따른 카트 추가 버튼 생성 기능 <br>
- 재고 수량 sold out 시 수량 선택 버튼 블락 처리 <br>



## Cart - 이수빈
<p>
<img src="https://github.com/xxslx/45-1st-rgb-frontend/assets/127685269/30459b5f-2286-4fe9-aab8-98f6a7fe4659" width=60%/></p>
#### 드롭다운 형식으로 사이트 내 탐색을 간소화해 사용자의 경험을 개선한 장바구니
- 장바구니 수량 추가/ 총 가격 실시간 카운트 / 상품 리스트 삭제 기능 <br>
- 상품 수에 따른 레이아웃 동적 조정 구현 <br>
- 장바구니 GET, PATCH, DELETE API로 상품 효율적 관리 <br>
- 수량 변경시 마우스 이벤트로 수량확인 버튼 나타나게 구현 <br>
- 조건부 렌더링으로 담긴 상품이 0일 때, 빈 장바구니 페이지 렌더링 구현 <br>


## Order/Payment
#### 기본 배송지 저장 및 이력 불러오기, 결제 API transaction으로 사용자의 편의를 제고한 주문/결제
- 배송기사님께 요청사항 옵션 표현 기능 <br>
- 유효성 검사 및 필수 약관 전체 동의 완료 시, 버튼 활성화 기능 <br>
- 기본 배송지로 저장 및 기존 이력 불러오기 기능 구현 <br>
- 결제 API transaction 기능 구현 <br>
- 현재 보유 포인트와 사용 포인트 확인 가능 <br>
- 전체 동의하기 선택 체크박스 구현 <br>

## Invoice
#### 백화점을 다녀온것 같은 산뜻함 느낌을 주는 인보이스 디자인
- 데이터를 받아와 주문자 정보와 주문 내역 확인 가능하게 기능 구현
- 보유 포인트와 사용 포인트 내역 확인 가능


## Nav/Footer 
#### 화면 상단과 하단에 고정을 사용자의 접근성을 높인 Nav/Footer
- 직관적인 디자인으로 현재 사용자의 포인트를 바로 확인할 수 있도록 구현 <br>
- 장바구니에 상품이 담길 때마다 실시간으로 수량 확인 가능하게 구현 <br>
- 로그인과 로그아웃 버튼의 스타일 반전으로 사용자가 보다 직관적으로 현재 상태 알 수 있게 구현 <br>
- 페이지 이동 없이 로그인 버튼을 누르면 로그인 창에서 회원가입까지 바로 가능하게 구현 <br>
- 푸터 - 클릭한 탭에 언더라인을 피드백과 탭에 따른 다른 정보 표시 기능 구현 <br>


## 💎 CSS

<details>
<summary>COLOR</summary>
MAIN COLOR: #252525, #333333, #FFFEF2, #F5F5E6<br>
POINT COLOR: #FF0000<br>
BACKGROUND COLOR: #FFFEF2<br>
DROPDOWN COLOR: #252525<br>
NAV/FOOTER BACKGROUND COLOR: #333333<br>
</details>
<details>
<summary>FONT</summary>
영문 폰트: Noto Sans KR<br>
한글 폰트: Noto Sans KR<br>
NAV FONT SIZE / NAV FONT WEIGHT: 18px<br>
FOOTER FONT SIZE / FONT WEIGHT: 12px<br>
TITLE FONT SIZE / FONT WEIGHT: 37px<br>
SUB TITLE FONT SIZE / FONT WEIGHT: 21px<br>
DETAIL FONT SIZE / FONT WEIGHT: 14px<br>
CHECK BOX ⇒ icon<br>
TOGGLE ⇒ icon<br>
</details>
<details>
<summary>BUTTON</summary>
BIG BUTTON SIZE (로그인, 가입하기, 결제하기):<br>
Width: 400px<br>
Height: 45px<br>
Font Size: 16px<br>
뒤로가기, 창 닫기 ⇒ icon<br>
슬라이드 옆으로 넘기기 ⇒ icon<br>
제품 상세, 장바구니, 결제하기 +- 버튼 ⇒ icon<br>
BUTTON COLOR ⇒ main color<br>
BUTTON FONT SIZE<br>
BUTTON FONT COLOR ⇒ main color<br>
BUTTON NO BORDER RADIUS<br>
</details>
<details>
<summary>MARGIN/PADDING</summary>
Input height: 80px<br>
장바구니 height: 100px<br>
</details>
<details>
<summary>MOUSE EVENT</summary>
MOUSE HOVER<br>
Image size up<br>
Shadow<br>
</details>
<details>
<summary>LINE</summary>
Length<br>
Color: main color<br>
Thickness: 3px, 4px<br>
</details>

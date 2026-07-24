/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "박진형",
    father: "박헌도",
    mother: "김정애",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "양정원",
    father: "양승만",
    mother: "이미자",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-02",
    time: "12:40",
    venue: "영등포 더 컨벤션 1층 그랜드볼룸홀",
    hall: "",
    address: "서울 영등포구 국회대로38",
    parking: "* 주차 : 더 컨벤션 앞 공영 주차장, 삼성생명 건물 주차장",
    tel: "02-6426-5000",
    mapLinks: {
      kakao: "https://place.map.kakao.com/871883439",
      naver: "https://naver.me/FLyTW33t"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "저희 두 사람이\n하나가 되는 뜻깊은 날을 맞이하게 되었습니다.\n\n그 새로운 시작의 순간,\n귀한 걸음하시어 축복해주시면 큰 기쁨이겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: " ",
    content: "세 번의 여름을 지나\n평생의 여름을 함께하려 합니다.\n싱그러운 여름의 기운을 담은 축복의 자리에\n함께해 주세요."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "박진형", bank: "신한은행", number: "110-384-432441" },
      { role: "어머니", name: "김정애", bank: "국민은행", number: "659401-01-021928" }
    ],
    bride: [
      { role: "신부", name: "양정원", bank: "신한은행", number: "110-293-833350" },
      { role: "아버지", name: "양승만", bank: "국민은행", number: "202-24-0199-891" },
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "진형 ♥ 정원 결혼합니다",
    description: "2026년 8월 2일, 소중한 분들을 초대합니다."
  }
};

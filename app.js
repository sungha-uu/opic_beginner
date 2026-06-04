const groupInfo = {
  safe: { label: "추천 기본", className: "group-safe" },
  home: { label: "집/거주 묶음", className: "group-home" },
  park: { label: "공원/걷기/음악 묶음", className: "group-park" },
  cafe: { label: "카페/쇼핑/음식 묶음", className: "group-cafe" },
  game: { label: "게임/음악 묶음", className: "group-game" },
  travel: { label: "여행/교통 묶음", className: "group-travel" },
  tech: { label: "기술/집안일 묶음", className: "group-tech" },
  avoid: { label: "주의 항목", className: "group-avoid" }
};

const surveyCategories = [
  {
    title: "1. 직업",
    note: "1개 선택",
    single: true,
    items: [
      ["job_none", "일 경험 없음", "safe"],
      ["job_company", "사업/회사원", "home"],
      ["job_remote", "재택근무/재택사업", "home"],
      ["job_teacher", "교사/교육자", "avoid"],
      ["job_other", "기타 직업", "avoid"]
    ]
  },
  {
    title: "2. 학생",
    note: "1개 선택",
    single: true,
    items: [
      ["student_yes", "예", "avoid"],
      ["student_no", "아니오", "safe"]
    ]
  },
  {
    title: "3. 수강 후 강의",
    note: "1개 선택",
    single: true,
    items: [
      ["class_none", "수강한 강의 없음", "safe"],
      ["class_training", "직업 훈련 과정", "avoid"],
      ["class_university", "대학교/대학원 수업", "avoid"],
      ["class_language", "어학원/자격증 학원 수업", "tech"],
      ["class_other", "기타 강의", "avoid"]
    ]
  },
  {
    title: "4. 거주 형태",
    note: "1개 선택",
    single: true,
    items: [
      ["home_roommate", "교사/친구와 동거", "home"],
      ["home_dorm", "기숙사", "avoid"],
      ["home_family", "가족과 함께 거주", "home"],
      ["home_alone", "독신 거주", "home"]
    ]
  },
  {
    title: "5. 여가 활동",
    note: "복수 선택",
    items: [
      ["leisure_movie", "영화 보기", "game"],
      ["leisure_show", "공연 보기", "avoid"],
      ["leisure_concert", "콘서트 보기", "avoid"],
      ["leisure_music", "음악 감상하기", "park"],
      ["leisure_sports_watch", "스포츠 경기 관람", "avoid"],
      ["leisure_jog_walk", "조깅/걷기", "park"],
      ["leisure_hiking", "하이킹/트레킹", "park"],
      ["leisure_bike", "자전거 타기", "park"],
      ["leisure_swim", "수영", "avoid"],
      ["leisure_golf", "골프", "avoid"],
      ["leisure_gym", "헬스", "avoid"],
      ["leisure_yoga", "요가/필라테스", "avoid"],
      ["leisure_basketball", "농구", "avoid"],
      ["leisure_baseball", "야구", "avoid"],
      ["leisure_soccer", "축구", "avoid"],
      ["leisure_tennis", "테니스", "avoid"],
      ["leisure_badminton", "배드민턴", "avoid"],
      ["leisure_club", "클럽/나이트클럽 가기", "avoid"],
      ["leisure_cooking", "요리하기", "cafe"],
      ["leisure_pet", "애완동물 기르기", "avoid"],
      ["leisure_garden", "정원 가꾸기", "avoid"],
      ["leisure_game", "게임 하기", "game"],
      ["leisure_fishing", "낚시", "avoid"],
      ["leisure_cafe", "카페/커피전문점 가기", "cafe"],
      ["leisure_shopping", "쇼핑하기", "cafe"],
      ["leisure_park", "공원 가기", "park"]
    ]
  },
  {
    title: "6. 취미나 관심사",
    note: "복수 선택",
    items: [
      ["interest_blog", "블로그 게시물 쓰기", "avoid"],
      ["interest_photo", "사진 촬영하기", "travel"],
      ["interest_art", "예술 작품 감상하기", "avoid"],
      ["interest_instrument", "악기 연주하기", "avoid"],
      ["interest_compose", "음악 작곡하기", "avoid"],
      ["interest_contest", "콘테스트 참여하기", "avoid"],
      ["interest_collect", "수집하기", "avoid"],
      ["interest_language", "외국어 공부", "tech"],
      ["interest_review", "영화 리뷰 쓰기", "avoid"],
      ["interest_volunteer", "자원봉사 하기", "avoid"],
      ["interest_reading", "독서", "home"]
    ]
  },
  {
    title: "7. 운동",
    note: "1개 선택",
    single: true,
    items: [
      ["exercise_none", "운동을 전혀 하지 않음", "safe"],
      ["exercise_basketball", "농구", "avoid"],
      ["exercise_swim", "수영", "avoid"],
      ["exercise_gym", "헬스", "avoid"],
      ["exercise_walk", "걷기", "park"],
      ["exercise_bike", "자전거", "park"],
      ["exercise_yoga", "요가/필라테스", "avoid"]
    ]
  },
  {
    title: "8. 휴가 및 출장",
    note: "복수 선택",
    items: [
      ["vacation_home", "집에서 보내는 휴가", "home"],
      ["vacation_camping", "캠핑 하기", "avoid"],
      ["vacation_hotel", "호텔에 머무르기", "travel"],
      ["vacation_domestic", "국내 여행", "travel"],
      ["vacation_overseas", "해외 여행", "avoid"],
      ["vacation_business", "출장", "avoid"]
    ]
  }
];

const bundles = [
  {
    id: "home",
    label: "집/거주/휴가",
    colorGroup: "home",
    match: ["home_family", "home_alone", "home_roommate", "vacation_home", "interest_reading", "job_company"],
    surveyItems: ["가족/독신 거주", "집에서 보내는 휴가", "독서"],
    goal: "집, 가족, 동네, 집에서 쉬는 활동을 하나의 기본 스크립트로 처리한다.",
    questions: [
      ["자기소개", "Tell me something about yourself.", "자기소개를 해주세요."],
      ["묘사", "Please describe your home.", "집을 묘사해주세요."],
      ["묘사", "Tell me about your neighborhood.", "동네에 대해 말해주세요."],
      ["루틴", "What do you usually do at home?", "집에서 보통 무엇을 하나요?"],
      ["루틴", "What do you usually do during your vacation at home?", "집에서 보내는 휴가 때 보통 무엇을 하나요?"],
      ["과거경험", "Tell me about a memorable experience at home.", "집에서의 기억에 남는 경험을 말해주세요."],
      ["비교", "Compare your home now and your old home.", "지금 집과 예전 집을 비교해주세요."],
      ["의견", "Why do you like staying home?", "왜 집에 있는 것을 좋아하나요?"]
    ],
    answer: [
      ["Hello, my name is OOO.", "헬로, 마이 네임 이즈 OOO."],
      ["I live in Daegu, Korea.", "아이 리브 인 대구, 코리아."],
      ["There are four people in my family.", "데어 아 포 피플 인 마이 패밀리."],
      ["My home is small, quiet, and comfortable.", "마이 홈 이즈 스몰, 콰이엇, 앤 컴퍼터블."],
      ["I usually study English after work.", "아이 유주얼리 스터디 잉글리시 애프터 워크."],
      ["It helps me relax.", "잇 헬프스 미 릴랙스."]
    ]
  },
  {
    id: "park",
    label: "공원/걷기/음악",
    colorGroup: "park",
    match: ["leisure_park", "leisure_jog_walk", "leisure_hiking", "leisure_bike", "exercise_walk", "exercise_bike", "leisure_music"],
    surveyItems: ["공원 가기", "조깅/걷기", "자전거", "음악 감상"],
    goal: "공원, 산책, 자전거, 음악을 한 답변 패턴으로 처리한다.",
    questions: [
      ["묘사", "Describe a park near your home.", "집 근처 공원을 묘사해주세요."],
      ["묘사", "Tell me about a quiet place you like.", "좋아하는 조용한 장소를 말해주세요."],
      ["루틴", "What do you usually do in your free time?", "여가 시간에 보통 무엇을 하나요?"],
      ["루틴", "How often do you go to a park?", "얼마나 자주 공원에 가나요?"],
      ["과거경험", "Tell me about the last time you went to a park.", "마지막으로 공원에 갔던 때를 말해주세요."],
      ["과거경험", "Tell me about a recent walk.", "최근 산책에 대해 말해주세요."],
      ["비교", "Compare your free time now and in the past.", "현재와 과거의 여가 시간을 비교해주세요."],
      ["의견", "Why do you like walking in the park?", "왜 공원 걷기를 좋아하나요?"],
      ["돌발", "Tell me about a problem you had at a park.", "공원에서 겪은 문제를 말해주세요."]
    ],
    answer: [
      ["Whenever I have free time, I go to a park.", "웬에버 아이 해브 프리 타임, 아이 고 투 어 파크."],
      ["Walking in the park is one of my hobbies.", "워킹 인 더 파크 이즈 원 어브 마이 하비즈."],
      ["I usually go there after work.", "아이 유주얼리 고 데어 애프터 워크."],
      ["Sometimes I listen to music there.", "섬타임즈 아이 리슨 투 뮤직 데어."],
      ["The park is quiet and clean.", "더 파크 이즈 콰이엇 앤 클린."],
      ["It helps me relax.", "잇 헬프스 미 릴랙스."]
    ]
  },
  {
    id: "cafe",
    label: "카페/쇼핑/음식",
    colorGroup: "cafe",
    match: ["leisure_cafe", "leisure_shopping", "leisure_cooking"],
    surveyItems: ["카페", "쇼핑", "요리/음식"],
    goal: "카페와 쇼핑을 집 근처 활동으로 묶어 말한다.",
    questions: [
      ["묘사", "Tell me about a cafe you often go to.", "자주 가는 카페에 대해 말해주세요."],
      ["루틴", "What do you usually order at a cafe?", "카페에서 보통 무엇을 주문하나요?"],
      ["루틴", "Where do you usually go shopping?", "보통 어디로 쇼핑하러 가나요?"],
      ["과거경험", "Tell me about the last time you went shopping.", "마지막으로 쇼핑했던 때를 말해주세요."],
      ["과거경험", "Tell me about the last time you ate out.", "마지막으로 외식했던 때를 말해주세요."],
      ["비교", "Do you prefer online shopping or shopping at a store?", "온라인 쇼핑과 매장 쇼핑 중 무엇을 선호하나요?"],
      ["의견", "Why do people like cafes?", "사람들은 왜 카페를 좋아하나요?"],
      ["돌발", "Tell me about a problem you had while shopping.", "쇼핑 중 겪은 문제를 말해주세요."]
    ],
    answer: [
      ["I often go to a cafe near my home.", "아이 오프튼 고 투 어 카페 니어 마이 홈."],
      ["It is small, quiet, and comfortable.", "잇 이즈 스몰, 콰이엇, 앤 컴퍼터블."],
      ["I usually drink iced coffee there.", "아이 유주얼리 드링크 아이스드 커피 데어."],
      ["Sometimes I study English at the cafe.", "섬타임즈 아이 스터디 잉글리시 앳 더 카페."],
      ["I also go shopping near my home.", "아이 올쏘 고 쇼핑 니어 마이 홈."],
      ["It helps me relax.", "잇 헬프스 미 릴랙스."]
    ]
  },
  {
    id: "game",
    label: "게임/영화/음악",
    colorGroup: "game",
    match: ["leisure_game", "leisure_movie", "leisure_music"],
    surveyItems: ["게임", "영화", "음악"],
    goal: "집에서 하는 쉬운 취미를 한 패턴으로 묶는다.",
    questions: [
      ["묘사", "What kind of games do you like?", "어떤 종류의 게임을 좋아하나요?"],
      ["루틴", "When do you usually play games?", "보통 언제 게임을 하나요?"],
      ["루틴", "What kind of music do you like?", "어떤 음악을 좋아하나요?"],
      ["과거경험", "Tell me about the last time you played games.", "마지막으로 게임했던 때를 말해주세요."],
      ["과거경험", "Tell me about a movie you watched recently.", "최근 본 영화에 대해 말해주세요."],
      ["비교", "How has your hobby changed?", "취미가 어떻게 변했나요?"],
      ["의견", "Why do you like playing games?", "왜 게임을 좋아하나요?"]
    ],
    answer: [
      ["Playing games is one of my hobbies.", "플레이잉 게임즈 이즈 원 어브 마이 하비즈."],
      ["I usually play games at home.", "아이 유주얼리 플레이 게임즈 앳 홈."],
      ["I play games after work.", "아이 플레이 게임즈 애프터 워크."],
      ["Sometimes I listen to music too.", "섬타임즈 아이 리슨 투 뮤직 투."],
      ["It is fun and exciting.", "잇 이즈 펀 앤 익사이팅."],
      ["It helps me relax.", "잇 헬프스 미 릴랙스."]
    ]
  },
  {
    id: "travel",
    label: "국내여행/교통",
    colorGroup: "travel",
    match: ["vacation_domestic", "vacation_hotel", "interest_photo"],
    surveyItems: ["국내 여행", "호텔", "사진 촬영"],
    goal: "여행과 사진을 짧은 과거 경험 스크립트로 처리한다.",
    questions: [
      ["묘사", "Tell me about a place you visited.", "방문했던 장소에 대해 말해주세요."],
      ["루틴", "Where do you usually go on vacation?", "휴가 때 보통 어디에 가나요?"],
      ["과거경험", "Tell me about a trip you took.", "다녀온 여행에 대해 말해주세요."],
      ["과거경험", "Tell me about a memorable trip.", "기억에 남는 여행을 말해주세요."],
      ["비교", "Compare traveling now and in the past.", "현재와 과거의 여행을 비교해주세요."],
      ["의견", "Why do people like traveling?", "사람들은 왜 여행을 좋아하나요?"],
      ["돌발", "Have you ever had a problem while traveling?", "여행 중 문제가 있었던 적이 있나요?"]
    ],
    answer: [
      ["Last year, I went to Busan.", "래스트 이어, 아이 웬트 투 부산."],
      ["I went there with my family.", "아이 웬트 데어 위드 마이 패밀리."],
      ["We ate delicious food.", "위 에잇 딜리셔스 푸드."],
      ["We walked near the beach.", "위 워크트 니어 더 비치."],
      ["The place was quiet and clean.", "더 플레이스 워즈 콰이엇 앤 클린."],
      ["It was fun and relaxing.", "잇 워즈 펀 앤 릴랙싱."],
      ["I had a nice time.", "아이 해드 어 나이스 타임."]
    ]
  },
  {
    id: "tech",
    label: "외국어/기술",
    colorGroup: "tech",
    match: ["interest_language", "class_language"],
    surveyItems: ["외국어 공부", "어학원/자격증"],
    goal: "영어 공부와 휴대폰 사용을 현재 루틴으로 묶는다.",
    questions: [
      ["루틴", "When do you usually study English?", "보통 언제 영어를 공부하나요?"],
      ["루틴", "How do you usually study English?", "영어를 보통 어떻게 공부하나요?"],
      ["과거경험", "Tell me about a time you studied English.", "영어를 공부했던 때를 말해주세요."],
      ["비교", "How has your English study changed?", "영어 공부는 어떻게 변했나요?"],
      ["의견", "Why do you think practice is important?", "왜 연습이 중요하다고 생각하나요?"],
      ["돌발", "Tell me about a problem you had while studying English.", "영어 공부 중 겪은 문제를 말해주세요."]
    ],
    answer: [
      ["These days, I study English after work.", "디즈 데이즈, 아이 스터디 잉글리시 애프터 워크."],
      ["I usually study English on my phone.", "아이 유주얼리 스터디 잉글리시 온 마이 폰."],
      ["It is hard, but it is good for me.", "잇 이즈 하드, 벗 잇 이즈 굿 포 미."],
      ["Sometimes there is a problem.", "섬타임즈 데어 이즈 어 프라블럼."],
      ["But I try again.", "벗 아이 트라이 어게인."],
      ["It helps me improve myself.", "잇 헬프스 미 임프루브 마이셀프."]
    ]
  },
  {
    id: "role",
    label: "롤플레이 공통",
    colorGroup: "safe",
    match: ["leisure_cafe", "leisure_shopping", "vacation_hotel", "job_company"],
    surveyItems: ["예약", "약속 변경", "문제 해결"],
    goal: "어떤 서베이를 골라도 나올 수 있는 롤플레이를 공통 표현으로 처리한다.",
    questions: [
      ["롤플레이 질문", "Call a cafe and ask about seats and opening hours.", "카페에 전화해서 좌석과 영업시간을 물어보세요."],
      ["롤플레이 질문", "Ask your friend about a weekend plan.", "친구에게 주말 계획에 대해 물어보세요."],
      ["롤플레이 질문", "Ask a clerk about a product you want to buy.", "직원에게 사고 싶은 제품에 대해 물어보세요."],
      ["롤플레이 문제", "You cannot go to a reservation. Explain and reschedule.", "예약에 갈 수 없습니다. 설명하고 일정을 바꾸세요."],
      ["롤플레이 문제", "You lost your phone. Call the cafe and ask for help.", "휴대폰을 잃어버렸습니다. 카페에 전화해서 도움을 요청하세요."],
      ["롤플레이 문제", "You received a broken product. Explain and ask for a new one.", "고장 난 제품을 받았습니다. 설명하고 새 제품을 요청하세요."]
    ],
    answer: [
      ["Hello, I have a question.", "헬로, 아이 해브 어 퀘스천."],
      ["There is a problem.", "데어 이즈 어 프라블럼."],
      ["I cannot go there today.", "아이 캐낫 고 데어 투데이."],
      ["Can I change the time?", "캔 아이 체인지 더 타임?"],
      ["Can you help me?", "캔 유 헬프 미?"],
      ["Thank you for your help.", "땡큐 포 유어 헬프."]
    ]
  },
  {
    id: "escape",
    label: "위기탈출",
    colorGroup: "safe",
    match: [],
    always: true,
    surveyItems: ["모든 주제 공통", "침묵 방지"],
    goal: "아무 생각이 안 날 때 아는 경험으로 연결한다.",
    questions: [
      ["위기탈출", "Use this when you do not understand the question.", "질문을 이해하지 못했을 때 사용하세요."],
      ["위기탈출", "Use this when you cannot think of an answer.", "답변이 생각나지 않을 때 사용하세요."],
      ["위기탈출", "Use this when the topic is too difficult.", "주제가 너무 어려울 때 사용하세요."]
    ],
    answer: [
      ["That is an interesting question.", "댓 이즈 언 인터레스팅 퀘스천."],
      ["I am not sure, but I will try.", "아이 앰 낫 슈어, 벗 아이 윌 트라이."],
      ["I do not know much about it.", "아이 두 낫 노우 머치 어바웃 잇."],
      ["But I can talk about my experience.", "벗 아이 캔 토크 어바웃 마이 익스피리언스."],
      ["These days, I study English after work.", "디즈 데이즈, 아이 스터디 잉글리시 애프터 워크."],
      ["It helps me relax.", "잇 헬프스 미 릴랙스."]
    ]
  }
];

let selectedItems = new Set(["job_none", "student_no", "class_none", "home_family"]);
let activeBundleId = null;
let currentPractice = null;
let timerId = null;
let remainingSeconds = 0;
let isPracticing = false;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getSelectedBundles() {
  const selected = [...selectedItems];
  const matched = bundles.filter((bundle) => bundle.always || bundle.match.some((id) => selected.includes(id)));
  return matched.length ? matched : bundles.filter((bundle) => bundle.always || bundle.id === "home");
}

function getActiveBundle() {
  const selectedBundles = getSelectedBundles();
  return selectedBundles.find((bundle) => bundle.id === activeBundleId) || selectedBundles[0];
}

function createLine([english, sound]) {
  const row = el("div", "script-line");
  row.tabIndex = 0;
  row.addEventListener("touchstart", () => row.classList.add("show-sound"), { passive: true });
  row.addEventListener("touchend", () => row.classList.remove("show-sound"));
  row.addEventListener("touchcancel", () => row.classList.remove("show-sound"));
  row.addEventListener("mouseleave", () => row.classList.remove("show-sound"));
  row.append(el("strong", null, english), el("span", "pronunciation", sound));
  return row;
}

function renderLegend() {
  const wrap = document.querySelector("#legend");
  wrap.innerHTML = "";
  Object.entries(groupInfo).forEach(([key, info]) => {
    const item = el("span", `legend-chip ${info.className}`, info.label);
    item.dataset.group = key;
    wrap.append(item);
  });
}

function renderSurvey() {
  const wrap = document.querySelector("#surveyGrid");
  wrap.innerHTML = "";

  surveyCategories.forEach((category) => {
    const card = el("article", "survey-category");
    const header = el("div", "survey-category-header");
    header.append(el("h3", null, category.title), el("span", null, category.note));
    card.append(header);

    const list = el("div", "survey-items");
    category.items.forEach(([id, label, group]) => {
      const item = el("label", `survey-item ${groupInfo[group]?.className || ""}`);
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = selectedItems.has(id);
      input.addEventListener("change", () => {
        if (category.single && input.checked) {
          category.items.forEach(([otherId]) => selectedItems.delete(otherId));
        }
        if (input.checked) selectedItems.add(id);
        else selectedItems.delete(id);
        renderAll();
      });
      item.append(input, el("span", null, label));
      list.append(item);
    });

    card.append(list);
    wrap.append(card);
  });
}

function renderCounter() {
  const count = selectedItems.size;
  const counter = document.querySelector("#selectedCount");
  counter.textContent = `${count} / 12`;
  counter.classList.toggle("ready", count >= 12);
}

function renderBundles() {
  const list = document.querySelector("#bundleList");
  const hint = document.querySelector("#bundleHint");
  list.innerHTML = "";

  if (selectedItems.size < 12) {
    hint.textContent = `현재 ${selectedItems.size}개 선택. 12개 이상 선택하면 추천 묶음이 표시됩니다.`;
    activeBundleId = null;
    return;
  } else {
    hint.textContent = "선택한 서베이를 기반으로 공용 답변 묶음을 추천합니다.";
  }

  const selectedBundles = getSelectedBundles();
  if (!selectedBundles.some((bundle) => bundle.id === activeBundleId)) {
    activeBundleId = selectedBundles[0].id;
  }

  selectedBundles.forEach((bundle) => {
    const button = el("button", `bundle-button ${groupInfo[bundle.colorGroup]?.className || ""}${bundle.id === activeBundleId ? " active" : ""}`);
    button.type = "button";
    button.append(el("strong", null, bundle.label), el("span", null, bundle.surveyItems.join(" · ")));
    button.addEventListener("click", () => {
      activeBundleId = bundle.id;
      renderBundles();
      renderScript();
    });
    list.append(button);
  });
}

function renderScript() {
  const wrap = document.querySelector("#scriptBoard");
  wrap.innerHTML = "";

  if (selectedItems.size < 12) {
    const card = el("article", "script-item wide empty-state");
    card.append(
      el("p", "eyebrow", "준비 중"),
      el("h3", null, "서베이 12개를 먼저 선택하세요"),
      el("p", "muted", "12개 이상 선택하면 공통 표현으로 돌려쓸 수 있는 서베이 묶음과 예상 질문이 표시됩니다.")
    );
    wrap.append(card);
    return;
  }

  const bundle = getActiveBundle();
  const card = el("article", "script-item wide");
  card.append(el("p", "eyebrow", "서베이 묶음"), el("h3", null, bundle.label), el("p", "muted", bundle.goal));

  const surveyList = el("div", "survey-list");
  bundle.surveyItems.forEach((item) => surveyList.append(el("span", groupInfo[bundle.colorGroup]?.className || "", item)));

  const questionList = el("div", "question-list");
  shuffle(bundle.questions)
    .slice(0, 5)
    .forEach(([pattern, question, ko]) => {
      const row = el("p", "mini-question");
      row.append(el("em", null, pattern), el("strong", null, question), el("span", null, ko));
      questionList.append(row);
    });

  const lines = el("div", "script-lines");
  bundle.answer.forEach((line) => lines.append(createLine(line)));
  card.append(surveyList, questionList, lines);
  wrap.append(card);
}

function handlePracticeButton() {
  if (isPracticing) {
    finishPractice();
    return;
  }
  startPractice();
}

function startPractice() {
  if (selectedItems.size < 12) {
    document.querySelector("#practiceState").textContent = "서베이 선택 필요";
    document.querySelector("#practiceQuestion").textContent = "먼저 서베이 항목을 12개 이상 선택하세요.";
    document.querySelector("#practiceGuide").textContent = "12개를 고르면 선택한 묶음에서 실제 시험형 질문이 랜덤으로 나옵니다.";
    document.querySelector("#practiceResult").classList.add("hidden");
    return;
  }

  clearInterval(timerId);
  const bundle = pickRandom(getSelectedBundles());
  const question = pickRandom(bundle.questions);
  currentPractice = { bundle, question };
  remainingSeconds = 60;
  isPracticing = true;

  const button = document.querySelector("#practiceButton");
  button.textContent = "종료";
  button.classList.add("danger-button");

  document.querySelector("#practiceResult").classList.add("hidden");
  document.querySelector("#practiceState").textContent = "말하는 중";
  document.querySelector("#practiceQuestion").textContent = question[1];
  document.querySelector("#practiceGuide").textContent = "지금은 질문만 보고 말하세요. 종료 버튼을 누르면 바로 답변을 확인합니다.";
  updateTimer();

  timerId = setInterval(() => {
    remainingSeconds -= 1;
    updateTimer();
    if (remainingSeconds <= 0) finishPractice();
  }, 1000);
}

function finishPractice() {
  clearInterval(timerId);
  remainingSeconds = 0;
  isPracticing = false;
  updateTimer();

  const button = document.querySelector("#practiceButton");
  button.textContent = "60초 연습";
  button.classList.remove("danger-button");

  if (!currentPractice) return;
  const { bundle, question } = currentPractice;
  document.querySelector("#practiceState").textContent = "답변 확인";
  document.querySelector("#practiceGuide").textContent = "답변을 보면서 같은 표현을 다시 소리 내서 읽으세요.";
  document.querySelector("#resultType").textContent = `${bundle.label} - ${question[0]}`;
  document.querySelector("#resultQuestionKo").textContent = question[2];

  const answer = document.querySelector("#resultAnswer");
  answer.innerHTML = "";
  bundle.answer.forEach((line) => answer.append(createLine(line)));
  document.querySelector("#practiceResult").classList.remove("hidden");
}

function updateTimer() {
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(remainingSeconds % 60).padStart(2, "0");
  document.querySelector("#timer").textContent = `${minutes}:${seconds}`;
}

function bindNav() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

function renderAll() {
  renderCounter();
  renderSurvey();
  renderBundles();
  renderScript();
}

document.querySelector("#practiceButton").addEventListener("click", handlePracticeButton);
document.querySelector("#reshuffleQuestions").addEventListener("click", renderScript);

renderLegend();
renderAll();
updateTimer();
bindNav();

const groupInfo = {
  safe: { label: "기본 전략", className: "group-safe" },
  park: { label: "공원/운동", className: "group-park" },
  home: { label: "집/휴식", className: "group-home" },
  game: { label: "음악/영상", className: "group-game" },
  cafe: { label: "카페/쇼핑", className: "group-cafe" },
  travel: { label: "여행", className: "group-travel" },
  surprise: { label: "돌발", className: "group-avoid" },
  escape: { label: "위기탈출", className: "group-safe" }
};

const baseAnswer = [
  ["I usually go there after work.", "아이 유주얼리 고 데어 애프터 워크."],
  ["It is near my home.", "잇 이즈 니어 마이 홈."],
  ["It is small, quiet, and clean.", "잇 이즈 스몰, 콰이엇, 앤 클린."],
  ["Sometimes I listen to music there.", "섬타임즈 아이 리슨 투 뮤직 데어."],
  ["I like it because it is comfortable.", "아이 라이크 잇 비커즈 잇 이즈 컴퍼터블."],
  ["It helps me relax.", "잇 헬프스 미 릴랙스."]
];

const bundles = [
  {
    id: "park",
    label: "공원/운동",
    colorGroup: "park",
    surveyItems: ["공원 가기", "걷기", "조깅", "자전거"],
    goal: "공원에 간다, 걷는다, 음악을 듣는다, 편안하다는 한 패턴으로 처리한다.",
    questions: [
      ["묘사", "Describe a park near your home.", "집 근처 공원을 묘사해주세요."],
      ["묘사", "Tell me about a quiet place you like.", "좋아하는 조용한 장소에 대해 말해주세요."],
      ["루틴", "What do you usually do in your free time?", "여가 시간에 보통 무엇을 하나요?"],
      ["루틴", "How often do you go to a park?", "얼마나 자주 공원에 가나요?"],
      ["루틴", "Tell me about your exercise routine.", "운동 루틴에 대해 말해주세요."],
      ["과거경험", "Tell me about the last time you went to a park.", "마지막으로 공원에 갔던 때를 말해주세요."],
      ["과거경험", "Tell me about a recent walk or jog.", "최근 산책이나 조깅에 대해 말해주세요."],
      ["비교", "Compare your free time now and in the past.", "현재와 과거의 여가 시간을 비교해주세요."],
      ["의견", "Why do you like walking in the park?", "왜 공원에서 걷는 것을 좋아하나요?"],
      ["돌발", "Tell me about a problem you had at a park.", "공원에서 겪은 문제를 말해주세요."]
    ],
    answer: [
      ["Whenever I have free time, I go to a park.", "웬에버 아이 해브 프리 타임, 아이 고 투 어 파크."],
      ["Walking in the park is one of my hobbies.", "워킹 인 더 파크 이즈 원 어브 마이 하비즈."],
      ...baseAnswer
    ]
  },
  {
    id: "home",
    label: "집/휴식",
    colorGroup: "home",
    surveyItems: ["집에서 보내는 휴가", "TV 시청", "게임하기"],
    goal: "집에서 쉰다, 게임/영화/음악을 한다, 스트레스가 풀린다는 패턴으로 처리한다.",
    questions: [
      ["묘사", "Please describe your home.", "집을 묘사해주세요."],
      ["묘사", "Tell me about your favorite place at home.", "집에서 가장 좋아하는 장소를 말해주세요."],
      ["루틴", "What do you usually do at home?", "집에서 보통 무엇을 하나요?"],
      ["루틴", "What do you usually do during your vacation at home?", "집에서 보내는 휴가 때 보통 무엇을 하나요?"],
      ["루틴", "How do you spend your evening after work?", "퇴근 후 저녁 시간을 어떻게 보내나요?"],
      ["과거경험", "Tell me about a memorable experience at home.", "집에서의 기억에 남는 경험을 말해주세요."],
      ["과거경험", "Tell me about the last time you rested at home.", "마지막으로 집에서 쉬었던 때를 말해주세요."],
      ["비교", "Compare your home now and your old home.", "지금 집과 예전 집을 비교해주세요."],
      ["의견", "Why do you like staying home?", "왜 집에 있는 것을 좋아하나요?"],
      ["돌발", "Tell me about a problem you had at home.", "집에서 겪은 문제를 말해주세요."]
    ],
    answer: [
      ["I usually stay home after work.", "아이 유주얼리 스테이 홈 애프터 워크."],
      ["My home is small, quiet, and comfortable.", "마이 홈 이즈 스몰, 콰이엇, 앤 컴퍼터블."],
      ["Sometimes I play games or watch a movie.", "섬타임즈 아이 플레이 게임즈 오어 워치 어 무비."],
      ["Sometimes I listen to music at home.", "섬타임즈 아이 리슨 투 뮤직 앳 홈."],
      ["I like it because it is comfortable.", "아이 라이크 잇 비커즈 잇 이즈 컴퍼터블."],
      ["It helps me relax.", "잇 헬프스 미 릴랙스."]
    ]
  },
  {
    id: "game",
    label: "음악/영상",
    colorGroup: "game",
    surveyItems: ["음악 감상하기", "영화보기", "콘서트 보기"],
    goal: "듣고 본다, 재미있다, 기분이 좋아진다는 쉬운 감상 패턴으로 처리한다.",
    questions: [
      ["묘사", "What kind of music do you like?", "어떤 음악을 좋아하나요?"],
      ["묘사", "Tell me about a movie theater near your home.", "집 근처 영화관에 대해 말해주세요."],
      ["루틴", "When do you usually listen to music?", "보통 언제 음악을 듣나요?"],
      ["루틴", "How often do you watch movies?", "얼마나 자주 영화를 보나요?"],
      ["과거경험", "Tell me about a movie you watched recently.", "최근 본 영화에 대해 말해주세요."],
      ["과거경험", "Tell me about the last time you listened to music.", "마지막으로 음악을 들었던 때를 말해주세요."],
      ["비교", "Compare watching movies at home and at a theater.", "집에서 영화 보기와 영화관에서 보기 비교해주세요."],
      ["의견", "Why do you like listening to music?", "왜 음악 감상을 좋아하나요?"],
      ["돌발", "Tell me about a problem you had while watching a movie.", "영화를 보다가 겪은 문제를 말해주세요."]
    ],
    answer: [
      ["Listening to music is one of my hobbies.", "리슨닝 투 뮤직 이즈 원 어브 마이 하비즈."],
      ["I usually listen to music after work.", "아이 유주얼리 리슨 투 뮤직 애프터 워크."],
      ["Sometimes I watch a movie near my home.", "섬타임즈 아이 워치 어 무비 니어 마이 홈."],
      ["The place is small, quiet, and clean.", "더 플레이스 이즈 스몰, 콰이엇, 앤 클린."],
      ["I like it because it is fun.", "아이 라이크 잇 비커즈 잇 이즈 펀."],
      ["It helps me relax.", "잇 헬프스 미 릴랙스."]
    ]
  },
  {
    id: "cafe",
    label: "카페/쇼핑",
    colorGroup: "cafe",
    surveyItems: ["카페 가기", "쇼핑하기", "술집/바에 가기"],
    goal: "집 근처에 간다, 친구 또는 혼자 간다, 음료를 마신다는 패턴으로 처리한다.",
    questions: [
      ["묘사", "Tell me about a cafe you often go to.", "자주 가는 카페에 대해 말해주세요."],
      ["묘사", "Describe a shopping place near your home.", "집 근처 쇼핑 장소를 묘사해주세요."],
      ["루틴", "What do you usually order at a cafe?", "카페에서 보통 무엇을 주문하나요?"],
      ["루틴", "Where do you usually go shopping?", "보통 어디로 쇼핑하러 가나요?"],
      ["과거경험", "Tell me about the last time you went shopping.", "마지막으로 쇼핑했던 때를 말해주세요."],
      ["과거경험", "Tell me about the last time you went to a cafe.", "마지막으로 카페에 갔던 때를 말해주세요."],
      ["비교", "Do you prefer online shopping or shopping at a store?", "온라인 쇼핑과 매장 쇼핑 중 무엇을 선호하나요?"],
      ["의견", "Why do people like cafes?", "사람들은 왜 카페를 좋아하나요?"],
      ["돌발", "Tell me about a problem you had while shopping.", "쇼핑 중 겪은 문제를 말해주세요."]
    ],
    answer: [
      ["I often go to a cafe near my home.", "아이 오프튼 고 투 어 카페 니어 마이 홈."],
      ["It is small, quiet, and clean.", "잇 이즈 스몰, 콰이엇, 앤 클린."],
      ["I usually drink iced coffee there.", "아이 유주얼리 드링크 아이스드 커피 데어."],
      ["Sometimes I go shopping near the cafe.", "섬타임즈 아이 고 쇼핑 니어 더 카페."],
      ["I like it because it is comfortable.", "아이 라이크 잇 비커즈 잇 이즈 컴퍼터블."],
      ["It helps me relax.", "잇 헬프스 미 릴랙스."]
    ]
  },
  {
    id: "travel",
    label: "여행",
    colorGroup: "travel",
    surveyItems: ["국내 여행", "해변 가기", "사진 촬영하기"],
    goal: "부산에 갔다, 바다를 봤다, 사진을 찍었다는 짧은 과거 경험으로 처리한다.",
    questions: [
      ["묘사", "Tell me about a place you visited.", "방문했던 장소에 대해 말해주세요."],
      ["묘사", "Describe a beach you went to.", "가봤던 해변을 묘사해주세요."],
      ["루틴", "Where do you usually go on vacation?", "휴가 때 보통 어디에 가나요?"],
      ["루틴", "What do you usually do when you travel?", "여행할 때 보통 무엇을 하나요?"],
      ["과거경험", "Tell me about a trip you took.", "다녀온 여행에 대해 말해주세요."],
      ["과거경험", "Tell me about a memorable trip.", "기억에 남는 여행을 말해주세요."],
      ["비교", "Compare traveling now and in the past.", "현재와 과거의 여행을 비교해주세요."],
      ["의견", "Why do people like traveling?", "사람들은 왜 여행을 좋아하나요?"],
      ["돌발", "Have you ever had a problem while traveling?", "여행 중 문제가 있었던 적이 있나요?"]
    ],
    answer: [
      ["Last year, I went to Busan.", "래스트 이어, 아이 웬트 투 부산."],
      ["I went there with my family.", "아이 웬트 데어 위드 마이 패밀리."],
      ["We walked near the beach.", "위 워크트 니어 더 비치."],
      ["The place was quiet and clean.", "더 플레이스 워즈 콰이엇 앤 클린."],
      ["I took some pictures there.", "아이 툭 섬 픽처스 데어."],
      ["It was fun and relaxing.", "잇 워즈 펀 앤 릴랙싱."]
    ]
  },
  {
    id: "surprise",
    label: "돌발 유형",
    colorGroup: "surprise",
    surveyItems: ["직장/학교 돌발", "기술/전화 문제", "예약/변경 롤플레이", "모르는 질문"],
    goal: "모르는 질문도 당황하지 않고 짧게 인정한 뒤, 아는 경험으로 연결한다.",
    questions: [
      ["돌발 묘사", "Tell me about a bank near your home.", "집 근처 은행에 대해 말해주세요."],
      ["돌발 묘사", "Describe a hospital or pharmacy you know.", "아는 병원이나 약국을 묘사해주세요."],
      ["돌발 루틴", "How do people usually use their phones these days?", "요즘 사람들은 휴대폰을 보통 어떻게 사용하나요?"],
      ["돌발 루틴", "Tell me about how you use the internet.", "인터넷을 어떻게 사용하는지 말해주세요."],
      ["돌발 과거경험", "Tell me about a time when your phone had a problem.", "휴대폰 문제가 있었던 때를 말해주세요."],
      ["돌발 과거경험", "Tell me about a time you were late.", "늦었던 경험을 말해주세요."],
      ["롤플레이 질문", "Call a restaurant and ask about opening hours.", "식당에 전화해서 영업시간을 물어보세요."],
      ["롤플레이 문제", "You cannot go to an appointment. Explain and change the time.", "약속에 갈 수 없습니다. 설명하고 시간을 바꾸세요."],
      ["롤플레이 문제", "You lost something at a cafe. Call and ask for help.", "카페에서 물건을 잃어버렸습니다. 전화해서 도움을 요청하세요."],
      ["위기탈출", "You do not know this topic well. Try to answer.", "잘 모르는 주제입니다. 답변을 시도하세요."]
    ],
    answer: [
      ["That is an interesting question.", "댓 이즈 언 인터레스팅 퀘스천."],
      ["I am not sure, but I will try.", "아이 앰 낫 슈어, 벗 아이 윌 트라이."],
      ["I do not know much about it.", "아이 두 낫 노우 머치 어바웃 잇."],
      ["But I can talk about my experience.", "벗 아이 캔 토크 어바웃 마이 익스피리언스."],
      ["There is a place near my home.", "데어 이즈 어 플레이스 니어 마이 홈."],
      ["It is small, quiet, and clean.", "잇 이즈 스몰, 콰이엇, 앤 클린."],
      ["Can you help me?", "캔 유 헬프 미?"],
      ["Thank you for your help.", "땡큐 포 유어 헬프."]
    ]
  },
  {
    id: "escape",
    label: "위기탈출",
    colorGroup: "escape",
    surveyItems: ["질문 못 들었을 때", "질문을 이해 못 했을 때", "답변이 기억 안 날 때"],
    goal: "침묵을 피하고, 짧게 시간을 벌고, 아는 쉬운 경험으로 연결한다.",
    questions: [
      ["질문 재확인", "You did not hear the question clearly. What would you say?", "질문을 잘 못 들었습니다. 어떻게 말할까요?"],
      ["이해 부족", "You do not understand the topic. Try to answer.", "주제를 이해하지 못했습니다. 답변을 시도하세요."],
      ["기억 안 남", "You cannot think of a good answer. Keep talking.", "좋은 답변이 생각나지 않습니다. 계속 말해보세요."],
      ["어려운 주제", "The topic is too difficult. Move to your experience.", "주제가 너무 어렵습니다. 내 경험으로 연결하세요."],
      ["시간 벌기", "You need a few seconds to think. What would you say?", "생각할 시간이 조금 필요합니다. 어떻게 말할까요?"]
    ],
    answer: [
      ["I am sorry, I did not hear the question clearly.", "아이 앰 쏘리, 아이 디드 낫 히어 더 퀘스천 클리얼리."],
      ["Could you repeat that, please?", "쿠드 유 리핏 댓, 플리즈?"],
      ["That is a little difficult for me.", "댓 이즈 어 리틀 디피컬트 포 미."],
      ["I am not sure, but I will try.", "아이 앰 낫 슈어, 벗 아이 윌 트라이."],
      ["I do not know much about it.", "아이 두 낫 노우 머치 어바웃 잇."],
      ["But I can talk about my experience.", "벗 아이 캔 토크 어바웃 마이 익스피리언스."],
      ["For example, I usually go to a park after work.", "포 이그잼플, 아이 유주얼리 고 투 어 파크 애프터 워크."],
      ["It helps me relax.", "잇 헬프스 미 릴랙스."]
    ]
  }
];

let activeBundleId = "park";
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

function getActiveBundle() {
  return bundles.find((bundle) => bundle.id === activeBundleId) || bundles[0];
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
  bundles.forEach((bundle) => {
    const info = groupInfo[bundle.colorGroup];
    wrap.append(el("span", `legend-chip ${info.className}`, bundle.label));
  });
}

function renderSurvey() {
  const wrap = document.querySelector("#surveyGrid");
  wrap.innerHTML = "";

  bundles
    .filter((bundle) => !["surprise", "escape"].includes(bundle.id))
    .forEach((bundle) => {
      const card = el("button", `survey-combo ${groupInfo[bundle.colorGroup].className}${bundle.id === activeBundleId ? " active" : ""}`);
      card.type = "button";
      card.append(el("strong", null, bundle.label), el("p", null, bundle.goal));

      const list = el("div", "survey-items compact");
      bundle.surveyItems.forEach((item) => list.append(el("span", null, item)));
      card.append(list);
      card.addEventListener("click", () => {
        activeBundleId = bundle.id;
        renderAll();
        document.querySelector("#scripts").scrollIntoView({ behavior: "smooth", block: "start" });
      });
      wrap.append(card);
    });
}

function renderBundles() {
  const list = document.querySelector("#bundleList");
  const hint = document.querySelector("#bundleHint");
  list.innerHTML = "";
  hint.textContent = "조합을 누르면 실제 시험처럼 질문 패턴이 랜덤으로 바뀝니다.";

  bundles.forEach((bundle) => {
    const button = el("button", `bundle-button ${groupInfo[bundle.colorGroup].className}${bundle.id === activeBundleId ? " active" : ""}`);
    button.type = "button";
    button.append(el("strong", null, bundle.label), el("span", null, bundle.surveyItems.join(" · ")));
    button.addEventListener("click", () => {
      activeBundleId = bundle.id;
      renderAll();
    });
    list.append(button);
  });
}

function renderScript() {
  const wrap = document.querySelector("#scriptBoard");
  wrap.innerHTML = "";
  const bundle = getActiveBundle();
  const card = el("article", "script-item wide");
  card.append(el("p", "eyebrow", "실전 조합"), el("h3", null, bundle.label), el("p", "muted", bundle.goal));

  const surveyList = el("div", "survey-list");
  bundle.surveyItems.forEach((item) => surveyList.append(el("span", groupInfo[bundle.colorGroup].className, item)));

  const questionList = el("div", "question-list");
  shuffle(bundle.questions)
    .slice(0, bundle.id === "surprise" ? 3 : 5)
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
  clearInterval(timerId);
  const bundle = pickRandom(bundles);
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
  document.querySelector("#practiceGuide").textContent = "실전처럼 질문만 보고 말하세요. 종료 버튼을 누르면 바로 답변을 확인합니다.";
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

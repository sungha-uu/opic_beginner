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
  ["It makes me feel good and relaxed.", "잇 메익스 미 필 굿 앤 릴랙스트."]
];

const personalNotes = [
  {
    id: "danger-come-down",
    title: "위험 경고",
    ko: "위험해, 거기서 내려와.",
    en: "It's dangerous. Come down from there.",
    sound: "잇츠 데인저러스. 컴 다운 프롬 데어.",
    meaning: "위험한 상황에서 상대에게 그 장소에서 내려오라고 말하는 표현입니다."
  },
  {
    id: "go-over-there",
    title: "이동 제안",
    ko: "저쪽으로 가자.",
    en: "Let's go over there.",
    sound: "렛츠 고 오버 데어.",
    meaning: "상대에게 저쪽 방향이나 장소로 같이 가자고 제안하는 표현입니다."
  }
];

const deletedMemoStorageKey = "opicDeletedMemoIds";

const bundles = [
  {
    id: "park",
    label: "공원/운동",
    patternNo: 1,
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
      ["Whenever I have free time, I go to a park near my home.", "웬에버 아이 해브 프리 타임, 아이 고 투 어 파크 니어 마이 홈."],
      ["I usually go there after work.", "아이 유주얼리 고 데어 애프터 워크."],
      ["Last weekend, I went there with my friend.", "래스트 위켄드, 아이 웬트 데어 위드 마이 프렌드."],
      ["I like walking there.", "아이 라이크 워킹 데어."],
      ["Walking is one of my hobbies.", "워킹 이즈 원 어브 마이 하비즈."],
      ["One time, I got lost there.", "원 타임, 아이 갓 로스트 데어."],
      ["But it was okay.", "벗 잇 워즈 오케이."],
      ["The park is quiet, clean, and comfortable.", "더 파크 이즈 콰이엇, 클린, 앤 컴퍼터블."],
      ["I recommend going there.", "아이 레커멘드 고잉 데어."]
    ]
  },
  {
    id: "home",
    label: "집/휴식",
    patternNo: 2,
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
      ["Whenever I have free time, I stay home and relax.", "웬에버 아이 해브 프리 타임, 아이 스테이 홈 앤 릴랙스."],
      ["I usually do that after work.", "아이 유주얼리 두 댓 애프터 워크."],
      ["Last weekend, I stayed home with my family.", "래스트 위켄드, 아이 스테이드 홈 위드 마이 패밀리."],
      ["Sometimes I play games or watch a movie.", "섬타임즈 아이 플레이 게임즈 오어 워치 어 무비."],
      ["Resting at home is one of my favorite things.", "레스팅 앳 홈 이즈 원 어브 마이 페이버릿 띵즈."],
      ["One time, my internet did not work.", "원 타임, 마이 인터넷 디드 낫 워크."],
      ["But it was okay.", "벗 잇 워즈 오케이."],
      ["My home is small, quiet, and comfortable.", "마이 홈 이즈 스몰, 콰이엇, 앤 컴퍼터블."],
      ["I like it because it is comfortable.", "아이 라이크 잇 비커즈 잇 이즈 컴퍼터블."],
      ["It makes me feel good and relaxed.", "잇 메익스 미 필 굿 앤 릴랙스트."]
    ]
  },
  {
    id: "game",
    label: "음악/영상",
    patternNo: 3,
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
      ["돌발", "Tell me about a problem you had while watching a movie.", "영화를 보다가 겪은 문제를 말해주세요."],
      ["추천", "Recommend a song or movie you like.", "좋아하는 노래나 영화를 추천해주세요."]
    ],
    answer: [
      ["Whenever I have free time, I listen to music.", "웬에버 아이 해브 프리 타임, 아이 리슨 투 뮤직."],
      ["I usually listen to music after work.", "아이 유주얼리 리슨 투 뮤직 애프터 워크."],
      ["Last weekend, I watched a movie with my friend.", "래스트 위켄드, 아이 워치트 어 무비 위드 마이 프렌드."],
      ["Sometimes I watch a movie near my home.", "섬타임즈 아이 워치 어 무비 니어 마이 홈."],
      ["Listening to music is one of my hobbies.", "리슨닝 투 뮤직 이즈 원 어브 마이 하비즈."],
      ["One time, the movie was too loud.", "원 타임, 더 무비 워즈 투 라우드."],
      ["But it was okay.", "벗 잇 워즈 오케이."],
      ["The place is small, quiet, and clean.", "더 플레이스 이즈 스몰, 콰이엇, 앤 클린."],
      ["I like it because it is fun.", "아이 라이크 잇 비커즈 잇 이즈 펀."],
      ["It makes me feel good and relaxed.", "잇 메익스 미 필 굿 앤 릴랙스트."]
    ]
  },
  {
    id: "cafe",
    label: "카페/쇼핑",
    patternNo: 4,
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
      ["돌발", "Tell me about a problem you had while shopping.", "쇼핑 중 겪은 문제를 말해주세요."],
      ["추천", "Recommend a cafe or store you like.", "좋아하는 카페나 가게를 추천해주세요."]
    ],
    answer: [
      ["Whenever I have free time, I go to a cafe near my home.", "웬에버 아이 해브 프리 타임, 아이 고 투 어 카페 니어 마이 홈."],
      ["I usually go there after work.", "아이 유주얼리 고 데어 애프터 워크."],
      ["Last weekend, I went there with my friend.", "래스트 위켄드, 아이 웬트 데어 위드 마이 프렌드."],
      ["I usually drink iced coffee there.", "아이 유주얼리 드링크 아이스드 커피 데어."],
      ["Going to a cafe is one of my hobbies.", "고잉 투 어 카페 이즈 원 어브 마이 하비즈."],
      ["One time, I lost my phone there.", "원 타임, 아이 로스트 마이 폰 데어."],
      ["But I found it later.", "벗 아이 파운드 잇 레이터."],
      ["It is small, quiet, and clean.", "잇 이즈 스몰, 콰이엇, 앤 클린."],
      ["Sometimes I go shopping near the cafe.", "섬타임즈 아이 고 쇼핑 니어 더 카페."],
      ["I like it because it is comfortable.", "아이 라이크 잇 비커즈 잇 이즈 컴퍼터블."],
      ["I recommend going there.", "아이 레커멘드 고잉 데어."]
    ]
  },
  {
    id: "travel",
    label: "여행",
    patternNo: 5,
    colorGroup: "travel",
    surveyItems: ["국내 여행", "해변 가기", "사진 촬영하기"],
    goal: "부산에 갔다, 바다를 봤다, 늦잠 문제도 있었다는 짧은 과거 경험으로 처리한다.",
    questions: [
      ["묘사", "Tell me about a place you visited.", "방문했던 장소에 대해 말해주세요."],
      ["묘사", "Describe a beach you went to.", "가봤던 해변을 묘사해주세요."],
      ["루틴", "Where do you usually go on vacation?", "휴가 때 보통 어디에 가나요?"],
      ["루틴", "What do you usually do when you travel?", "여행할 때 보통 무엇을 하나요?"],
      ["과거경험", "Tell me about a trip you took.", "다녀온 여행에 대해 말해주세요."],
      ["과거경험", "Tell me about a memorable trip.", "기억에 남는 여행을 말해주세요."],
      ["비교", "Compare traveling now and in the past.", "현재와 과거의 여행을 비교해주세요."],
      ["의견", "Why do people like traveling?", "사람들은 왜 여행을 좋아하나요?"],
      ["돌발", "Have you ever had a problem while traveling?", "여행 중 문제가 있었던 적이 있나요?"],
      ["추천", "Recommend a place to visit in your country.", "한국에서 방문할 만한 장소를 추천해주세요."]
    ],
    answer: [
      ["Whenever I have free time, I like traveling.", "웬에버 아이 해브 프리 타임, 아이 라이크 트래블링."],
      ["I usually travel with my family.", "아이 유주얼리 트래블 위드 마이 패밀리."],
      ["Last year, I went to Busan.", "래스트 이어, 아이 웬트 투 부산."],
      ["I went there with my family.", "아이 웬트 데어 위드 마이 패밀리."],
      ["We walked near the beach.", "위 워크트 니어 더 비치."],
      ["Traveling is one of my favorite things.", "트래블링 이즈 원 어브 마이 페이버릿 띵즈."],
      ["But there was a small problem.", "벗 데어 워즈 어 스몰 프라블럼."],
      ["I overslept in the morning.", "아이 오버슬렙트 인 더 모닝."],
      ["So we were a little late.", "쏘 위 워 어 리틀 레이트."],
      ["The place was quiet and clean.", "더 플레이스 워즈 콰이엇 앤 클린."],
      ["I took some pictures there.", "아이 툭 섬 픽처스 데어."],
      ["But it was okay.", "벗 잇 워즈 오케이."],
      ["I recommend going there.", "아이 레커멘드 고잉 데어."]
    ]
  },
  {
    id: "surprise",
    label: "돌발 유형",
    patternNo: 6,
    colorGroup: "surprise",
    surveyItems: ["직장/학교 돌발", "기술/전화 문제", "예약/변경 롤플레이", "모르는 질문"],
    goal: "돌발 문제를 받으면 장소나 상황을 짧게 말하고, 작은 문제를 설명한 뒤 도움 요청과 해결로 마무리한다.",
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
      ["돌발 문제", "Tell me about a time when you needed help from staff.", "직원의 도움이 필요했던 때를 말해주세요."]
    ],
    answer: [
      ["There is a small place near my home.", "데어 이즈 어 스몰 플레이스 니어 마이 홈."],
      ["I sometimes go there when I need help.", "아이 섬타임즈 고 데어 웬 아이 니드 헬프."],
      ["One time, I had a small problem with my phone.", "원 타임, 아이 해드 어 스몰 프라블럼 위드 마이 폰."],
      ["So I called the place and explained the situation.", "쏘 아이 콜드 더 플레이스 앤 익스플레인드 더 시추에이션."],
      ["I said, I am sorry, but I need your help.", "아이 세드, 아이 앰 쏘리, 벗 아이 니드 유어 헬프."],
      ["Can I change my appointment to another time?", "캔 아이 체인지 마이 어포인트먼트 투 어나더 타임?"],
      ["The staff was kind and helped me.", "더 스태프 워즈 카인드 앤 헬프트 미."],
      ["So I solved the problem.", "쏘 아이 솔브드 더 프라블럼."],
      ["It was a little stressful, but it was okay.", "잇 워즈 어 리틀 스트레스풀, 벗 잇 워즈 오케이."],
      ["I felt good after that.", "아이 펠트 굿 애프터 댓."]
    ]
  },
  {
    id: "escape",
    label: "위기탈출",
    patternNo: 7,
    colorGroup: "escape",
    surveyItems: ["질문 못 들었을 때", "질문을 이해 못 했을 때", "답변이 기억 안 날 때"],
    goal: "침묵을 피하고, 짧게 시간을 벌고, 아는 쉬운 경험으로 연결한다.",
    questions: [
      ["어려운 주제", "Tell me about a traditional holiday in your country.", "한국의 전통 명절에 대해 말해주세요."],
      ["어려운 주제", "Describe a public transportation system in your city.", "도시의 대중교통 시스템을 묘사해주세요."],
      ["어려운 주제", "Tell me about a famous building or landmark in your area.", "지역의 유명한 건물이나 랜드마크를 말해주세요."],
      ["어려운 주제", "What do people usually do when they have a problem with their phone?", "휴대폰 문제가 생기면 사람들이 보통 무엇을 하나요?"],
      ["어려운 주제", "Tell me about a time when you had to change your plan.", "계획을 바꿔야 했던 때를 말해주세요."],
      ["어려운 주제", "Describe a place that was difficult for you to find.", "찾기 어려웠던 장소를 묘사해주세요."],
      ["어려운 주제", "Tell me about a time when you were confused.", "혼란스러웠던 경험을 말해주세요."],
      ["어려운 주제", "What do you usually do when you need help?", "도움이 필요할 때 보통 무엇을 하나요?"],
      ["어려운 주제", "Tell me about a time when you solved a small problem.", "작은 문제를 해결했던 때를 말해주세요."],
      ["어려운 주제", "Describe something you do not know very well, but try to explain it.", "잘 알지는 못하지만 설명을 시도할 수 있는 것을 묘사해주세요."]
    ],
    answer: [
      ["I didn't think of that question.", "아이 디든트 씽크 오브 댓 퀘스천."],
      ["Why didn't I think of that? Wow!", "와이 디든트 아이 씽크 오브 댓? 와우!"],
      ["That is a very interesting question.", "댓 이즈 어 베리 인터레스팅 퀘스천."],
      ["I need a moment to think. Hmm.", "아이 니드 어 모먼트 투 씽크. 흠."],
      ["That is a little difficult for me.", "댓 이즈 어 리틀 디피컬트 포 미."],
      ["I am not sure, but I will try.", "아이 앰 낫 슈어, 벗 아이 윌 트라이."],
      ["I do not know much about it.", "아이 두 낫 노우 머치 어바웃 잇."],
      ["But I can talk about my experience.", "벗 아이 캔 토크 어바웃 마이 익스피리언스."],
      ["For example, I usually go to a park after work.", "포 이그잼플, 아이 유주얼리 고 투 어 파크 애프터 워크."],
      ["It makes me feel good.", "잇 메익스 미 필 굿."]
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

function getDeletedMemoIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem(deletedMemoStorageKey) || "[]"));
  } catch {
    return new Set();
  }
}

function saveDeletedMemoIds(ids) {
  localStorage.setItem(deletedMemoStorageKey, JSON.stringify([...ids]));
}

function deleteMemoNote(id) {
  const deletedIds = getDeletedMemoIds();
  deletedIds.add(id);
  saveDeletedMemoIds(deletedIds);
  renderMemoNotes();
}

function getActiveBundle() {
  return bundles.find((bundle) => bundle.id === activeBundleId) || bundles[0];
}

function speakText(text) {
  const synth = window.speechSynthesis || window.webkitSpeechSynthesis;
  if (!synth) return;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  synth.speak(utterance);
}

function speakTextSequence(texts, delayMs = 1000) {
  const synth = window.speechSynthesis || window.webkitSpeechSynthesis;
  if (!synth) return;
  synth.cancel();

  let index = 0;
  const speakNext = () => {
    if (index >= texts.length) return;
    const utterance = new SpeechSynthesisUtterance(texts[index]);
    utterance.lang = "en-US";
    utterance.rate = 0.82;
    utterance.onend = () => {
      index += 1;
      window.setTimeout(speakNext, delayMs);
    };
    synth.speak(utterance);
  };

  speakNext();
}

function createTtsButton(text, label) {
  const button = el("button", "tts-button", "▶");
  button.type = "button";
  button.setAttribute("aria-label", label);
  button.title = label;
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    speakText(text);
  });
  return button;
}

function getFullAnswerText(bundle) {
  return bundle.answer.map(([english]) => english).join(" ");
}

function createFullAnswerTtsButton(bundle) {
  const button = el("button", "full-tts-button", "▶ 전체 재생");
  button.type = "button";
  button.setAttribute("aria-label", `답변 패턴 #${bundle.patternNo} 전체 듣기`);
  button.title = "답변 전체 듣기";
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    speakText(getFullAnswerText(bundle));
  });
  return button;
}

function createAnswerToolbar(bundle) {
  const toolbar = el("div", "answer-toolbar");
  toolbar.append(createFullAnswerTtsButton(bundle));
  return toolbar;
}

function createQuestionTtsButton(questions) {
  const button = el("button", "question-tts-button", "▶ 질문 전체 재생");
  button.type = "button";
  button.setAttribute("aria-label", "질문 전체 재생");
  button.title = "질문 전체 재생";
  button.addEventListener("click", () => {
    speakTextSequence(questions.map(([, question]) => question), 1000);
  });
  return button;
}

function createLine([english, sound]) {
  const row = el("div", "script-line");
  const top = el("div", "line-top");
  const englishText = el("strong", "line-english", english);
  englishText.tabIndex = 0;
  englishText.setAttribute("role", "button");
  englishText.setAttribute("aria-expanded", "false");
  englishText.addEventListener("click", () => {
    const isOpen = row.classList.toggle("show-sound");
    englishText.setAttribute("aria-expanded", String(isOpen));
  });
  englishText.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    englishText.click();
  });
  top.append(englishText, createTtsButton(english, "영어 답변 듣기"));
  row.append(top, el("span", "pronunciation", sound));
  return row;
}

function createMemoLine(note) {
  const row = el("div", "script-line memo-line");

  const top = el("div", "line-top");
  const english = el("strong", "memo-english", note.en);
  english.tabIndex = 0;
  english.setAttribute("role", "button");
  english.setAttribute("aria-expanded", "false");
  english.addEventListener("click", () => {
    const isOpen = row.classList.toggle("show-sound");
    english.setAttribute("aria-expanded", String(isOpen));
  });
  english.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    english.click();
  });
  top.append(english, createTtsButton(note.en, "영어 메모 듣기"));

  const detail = el("div", "memo-detail");
  detail.append(el("span", "pronunciation", note.sound), el("p", "memo-translation", note.ko));

  row.append(top, detail);
  return row;
}

function createQuestionRow([pattern, question, ko]) {
  const row = el("p", "mini-question");
  const questionTop = el("div", "question-top");
  questionTop.append(el("strong", null, question), createTtsButton(question, "영어 질문 듣기"));
  row.append(el("em", null, pattern), questionTop, el("span", null, ko));
  return row;
}

function createMemoCard(note, index) {
  const card = el("article", "script-item memo-card");
  const title = el("div", "pattern-title memo-title");

  const deleteButton = el("button", "memo-delete-button", "삭제");
  deleteButton.type = "button";
  deleteButton.setAttribute("aria-label", `${note.title || "개인 문장"} 메모 삭제`);
  deleteButton.addEventListener("click", () => deleteMemoNote(note.id));
  title.append(el("span", null, `메모 #${index + 1}`), deleteButton);

  const lines = el("div", "script-lines");
  lines.append(createMemoLine(note));
  const meaning = el("p", "memo-meaning", note.meaning);

  card.append(title, lines, meaning);
  return card;
}

function createPatternTitle(bundle) {
  const title = el("div", "pattern-title");
  title.append(el("span", null, `답변 패턴 #${bundle.patternNo}`), el("strong", null, bundle.label));
  return title;
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
  const visibleQuestions = shuffle(bundle.questions).slice(0, 10);
  questionList.append(createQuestionTtsButton(visibleQuestions));
  visibleQuestions.forEach((question) => questionList.append(createQuestionRow(question)));

  const lines = el("div", "script-lines");
  bundle.answer.forEach((line) => lines.append(createLine(line)));
  card.append(surveyList, questionList, createPatternTitle(bundle), createAnswerToolbar(bundle), lines);
  wrap.append(card);
}

function renderAllPatterns() {
  const wrap = document.querySelector("#allPatternsBoard");
  wrap.innerHTML = "";

  bundles.forEach((bundle) => {
    const card = el("article", "script-item all-pattern-card");
    card.append(createPatternTitle(bundle));

    const lines = el("div", "script-lines");
    bundle.answer.forEach((line) => lines.append(createLine(line)));
    card.append(createAnswerToolbar(bundle), lines);
    wrap.append(card);
  });
}

function renderMemoNotes() {
  const wrap = document.querySelector("#memoBoard");
  wrap.innerHTML = "";
  const deletedIds = getDeletedMemoIds();
  const visibleNotes = personalNotes.filter((note) => !deletedIds.has(note.id));

  if (visibleNotes.length === 0) {
    const empty = el("article", "panel memo-empty");
    empty.append(
      el("h3", null, "아직 메모가 없습니다"),
      el("p", "muted", "한국어 문장을 말하고 메모장에 올려달라고 하면 영어 번역, 발음, 해석을 여기에 하나씩 추가합니다. 삭제한 메모는 이 브라우저에서 다시 보이지 않습니다.")
    );
    wrap.append(empty);
    return;
  }

  visibleNotes.forEach((note, index) => {
    wrap.append(createMemoCard(note, index));
  });
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
  document.querySelector("#resultAnswerTitle").textContent = `답변 패턴 #${bundle.patternNo}`;

  const answer = document.querySelector("#resultAnswer");
  answer.innerHTML = "";
  bundle.answer.forEach((line) => answer.append(createLine(line)));
  const title = document.querySelector("#resultAnswerTitle");
  document.querySelector("#resultFullTts")?.remove();
  const fullTtsButton = createFullAnswerTtsButton(bundle);
  fullTtsButton.id = "resultFullTts";
  title.after(fullTtsButton);
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

function bindAllPatternsToggle() {
  const button = document.querySelector("#toggleAllPatterns");
  const panel = document.querySelector("#allPatternsPanel");

  button.addEventListener("click", () => {
    const isHidden = panel.classList.toggle("hidden");
    button.setAttribute("aria-expanded", String(!isHidden));
    button.textContent = isHidden ? "모든 답변 패턴 보기" : "모든 답변 패턴 숨기기";
  });
}

function bindMemoToggle() {
  const button = document.querySelector("#toggleMemo");
  const panel = document.querySelector("#memoPanel");

  button.addEventListener("click", () => {
    const isHidden = panel.classList.toggle("hidden");
    button.setAttribute("aria-expanded", String(!isHidden));
    button.textContent = isHidden ? "메모장 보기" : "메모장 숨기기";
  });
}

function renderAll() {
  renderSurvey();
  renderBundles();
  renderScript();
  renderAllPatterns();
  renderMemoNotes();
}

document.querySelector("#practiceButton").addEventListener("click", handlePracticeButton);
document.querySelector("#reshuffleQuestions").addEventListener("click", renderScript);

renderLegend();
renderAll();
updateTimer();
bindNav();
bindAllPatternsToggle();
bindMemoToggle();

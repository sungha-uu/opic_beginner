const questionTypes = [
  { id: "description", label: "묘사", hint: "장소, 사람, 사물의 모습" },
  { id: "routine", label: "루틴", hint: "평소 하는 일과 빈도" },
  { id: "experience", label: "경험", hint: "과거에 있었던 일" },
  { id: "comparison", label: "비교", hint: "과거와 현재, 두 대상" },
  { id: "problem", label: "문제해결", hint: "문제와 해결 방법" },
  { id: "roleplay", label: "롤플레이", hint: "질문, 요청, 변경, 사과" },
  { id: "opinion", label: "의견", hint: "좋아하는 이유와 생각" }
];

// Source data is the only content authority. Update through #마스터 P07.
const sourceQuestions = [
  { id: "expected-park-description", typeId: "description", source: "expected", questionEn: "Tell me about a park near your home.", questionKo: "집 근처 공원에 대해 말해주세요.", originQuestionId: "" },
  { id: "expected-home-description", typeId: "description", source: "expected", questionEn: "Please describe your home.", questionKo: "사는 집을 묘사해주세요.", originQuestionId: "" },
  { id: "expected-after-work", typeId: "routine", source: "expected", questionEn: "What do you usually do after work?", questionKo: "퇴근 후 보통 무엇을 하나요?", originQuestionId: "" },
  { id: "expected-music-frequency", typeId: "routine", source: "expected", questionEn: "How often do you listen to music?", questionKo: "얼마나 자주 음악을 듣나요?", originQuestionId: "" },
  { id: "expected-shopping-last", typeId: "experience", source: "expected", questionEn: "Tell me about the last time you went shopping.", questionKo: "마지막으로 쇼핑했던 경험을 말해주세요.", originQuestionId: "" },
  { id: "expected-trip-memory", typeId: "experience", source: "expected", questionEn: "Tell me about a memorable trip.", questionKo: "기억에 남는 여행을 말해주세요.", originQuestionId: "" },
  { id: "expected-home-comparison", typeId: "comparison", source: "expected", questionEn: "Compare your home now and your old home.", questionKo: "지금 집과 예전 집을 비교해주세요.", originQuestionId: "" },
  { id: "expected-cafe-problem", typeId: "problem", source: "expected", questionEn: "Tell me about a problem you had at a cafe.", questionKo: "카페에서 겪은 문제를 말해주세요.", originQuestionId: "" },
  { id: "expected-reservation-roleplay", typeId: "roleplay", source: "expected", questionEn: "Call a restaurant and ask to change your reservation.", questionKo: "식당에 전화해 예약 변경을 요청하세요.", originQuestionId: "" },
  { id: "expected-walking-opinion", typeId: "opinion", source: "expected", questionEn: "Why do you like walking in the park?", questionKo: "왜 공원 산책을 좋아하나요?", originQuestionId: "" }
];

const answerCategories = [
  { id: "experience", label: "개인 경험" }, { id: "preference", label: "취향" },
  { id: "routine", label: "일상 루틴" }, { id: "place", label: "장소" },
  { id: "person", label: "사람" }, { id: "problem", label: "문제와 해결" },
  { id: "other", label: "기타 소재" }
];

// Start empty. Only add the user's own stories after a #마스터 P07 request.
const sourceAnswerPatterns = [];

const fillerFunctions = [
  { id: "connect", label: "말 연결하기" }, { id: "thinking", label: "생각할 시간 벌기" },
  { id: "example", label: "예시 시작하기" }, { id: "correct", label: "정정하기" },
  { id: "closing", label: "마무리하기" }
];

const sourceFillers = [
  { functionId: "connect", en: "As you know,", ko: "아시다시피," },
  { functionId: "connect", en: "And also,", ko: "그리고 또," },
  { functionId: "thinking", en: "Let me think.", ko: "잠시 생각해볼게요." },
  { functionId: "thinking", en: "Well, that is an interesting question.", ko: "음, 흥미로운 질문이네요." },
  { functionId: "thinking", en: "I am not sure, but I will try.", ko: "잘 모르지만 말해볼게요." },
  { functionId: "example", en: "For example,", ko: "예를 들면," },
  { functionId: "example", en: "One time,", ko: "한번은," },
  { functionId: "correct", en: "I mean,", ko: "제 말은," },
  { functionId: "correct", en: "Let me say that again.", ko: "다시 말해볼게요." },
  { functionId: "closing", en: "That is why I like it.", ko: "그래서 저는 그것을 좋아합니다." },
  { functionId: "closing", en: "That is all I can say about it.", ko: "그것에 대해서는 이 정도로 말할 수 있습니다." }
];

// Memo data is isolated. Recommendation code never reads this array.
const personalNotes = [
  { id: "danger-come-down", title: "위험 경고", ko: "위험해, 거기서 내려와.", en: "It's dangerous. Come down from there.", sound: "잇츠 데인저러스. 컴 다운 프롬 데어.", meaning: "위험한 상황에서 상대에게 내려오라고 말하는 표현입니다." },
  { id: "go-over-there", title: "이동 제안", ko: "저쪽으로 가자.", en: "Let's go over there.", sound: "렛츠 고 오버 데어.", meaning: "상대에게 저쪽으로 같이 가자고 제안하는 표현입니다." },
  { id: "tv-broke-movie", title: "영화 문제", ko: "한 번은 TV가 고장 나서 영화를 보지 못했다.", en: "One time, my TV did not work, so I could not watch the movie.", sound: "원 타임, 마이 티비 디드 낫 워크, 쏘 아이 쿠드 낫 워치 더 무비.", meaning: "TV 문제로 영화를 보지 못한 경험 표현입니다." },
  { id: "lotte-cinema-near-home", title: "영화관 묘사", ko: "우리 집 근처에는 롯데시네마라는 영화관이 있다.", en: "There is a movie theater called Lotte Cinema near my home. It is very big and modern.", sound: "데어 이즈 어 무비 씨어터 콜드 롯데 시네마 니어 마이 홈. 잇 이즈 베리 빅 앤 모던.", meaning: "집 근처 영화관을 묘사하는 표현입니다." },
  { id: "james-bond-movies", title: "영화 취향", ko: "나는 제임스 본드가 나오는 영화를 다 좋아한다.", en: "I like all movies with James Bond.", sound: "아이 라이크 올 무비즈 위드 제임스 본드.", meaning: "좋아하는 영화 취향 표현입니다." },
  { id: "lost-money-at-mall", title: "쇼핑몰 문제", ko: "쇼핑몰에서 돈을 잃어버렸지만 침착하게 집으로 돌아왔다.", en: "One time, I lost my money at a shopping mall. I stayed calm and went back home.", sound: "원 타임, 아이 로스트 마이 머니 앳 어 쇼핑 몰. 아이 스테이드 캄 앤 웬트 백 홈.", meaning: "쇼핑몰에서 겪은 문제 표현입니다." },
  { id: "met-old-friend-at-mall", title: "쇼핑몰 경험", ko: "쇼핑몰에서 오랜만에 친구를 만나 반가웠다.", en: "One time, I met an old friend at a shopping mall. I was really happy.", sound: "원 타임, 아이 멧 언 올드 프렌드 앳 어 쇼핑 몰. 아이 워즈 리얼리 해피.", meaning: "친구를 우연히 만난 경험 표현입니다." },
  { id: "reason-i-like-walking", title: "이유 설명", ko: "그게 내가 산책을 좋아하는 이유이다.", en: "That is why I like walking.", sound: "댓 이즈 와이 아이 라이크 워킹.", meaning: "산책을 좋아하는 이유를 정리하는 표현입니다." },
  { id: "prefer-iced-americano", title: "음료 취향", ko: "라떼보다 아이스 아메리카노를 더 좋아한다.", en: "I like iced Americano more than latte.", sound: "아이 라이크 아이스트 아메리카노 모어 댄 라테.", meaning: "두 음료를 비교하는 표현입니다." },
  { id: "apartment-rooms", title: "집 구조", ko: "우리 집은 방 2개, 화장실 1개, 거실 1개인 아파트다.", en: "My home is an apartment. It has two bedrooms, one bathroom, and one living room.", sound: "마이 홈 이즈 언 아파트먼트. 잇 해즈 투 베드룸즈, 원 배스룸, 앤 원 리빙 룸.", meaning: "집 구조를 설명하는 표현입니다." }
];

const state = { activeTypeId: questionTypes[0].id, practiceQuestion: null, timerId: null, remainingSeconds: 0 };

function el(tag, className, text) { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; }
function labelOf(items, id) { return items.find((item) => item.id === id)?.label || "기타"; }

function speak(text) {
  const synth = window.speechSynthesis || window.webkitSpeechSynthesis;
  if (!synth || !text) return;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  synth.speak(utterance);
}

function ttsButton(text, label = "영어 듣기") {
  const button = el("button", "icon-button", "▶");
  button.type = "button";
  button.setAttribute("aria-label", label);
  button.addEventListener("click", () => speak(text));
  return button;
}

function sourceBadge(source) { return el("span", `badge ${source === "actual" ? "badge-actual" : "badge-expected"}`, source === "actual" ? "기출 질문" : "예상 질문"); }

function getRecommendation(question) {
  // Only sourceAnswerPatterns is used. personalNotes is intentionally excluded.
  const preferred = {
    description: ["place", "person", "other"], routine: ["routine", "preference", "other"],
    experience: ["experience", "problem", "place"], comparison: ["preference", "place", "routine"],
    problem: ["problem", "experience"], roleplay: ["problem", "other"], opinion: ["preference", "routine", "experience"]
  }[question.typeId] || ["other"];
  const selected = sourceAnswerPatterns.filter((item) => preferred.includes(item.category)).slice(0, 2);
  const materials = selected.length ? selected : sourceAnswerPatterns.slice(0, 2);
  const extra = {
    description: "It is easy to remember, and I like it.", routine: "It is part of my daily routine.",
    experience: "It was a memorable experience for me.", comparison: "They are different, but I like both of them.",
    problem: "I stayed calm, and the problem was solved.", roleplay: "Could you please help me with this?",
    opinion: "That is why I like it so much."
  }[question.typeId];
  return { materials, extra };
}

function createRecommendation(question) {
  const wrap = el("div", "recommendation-content");
  const head = el("div", "recommendation-head");
  head.append(el("strong", "", "추천 답변"), el("span", "source-note", "내 답변 패턴 + 질문 맞춤 문장"));
  wrap.append(head);
  const { materials, extra } = getRecommendation(question);
  if (!materials.length) {
    wrap.append(el("p", "empty-note", "아직 등록된 내 답변 패턴이 없습니다. #마스터 P07로 한국어 답변 소재를 말하면 쉬운 영어로 정리해 반영합니다."));
    return wrap;
  }
  materials.forEach((material) => {
    const block = el("div", "answer-source-block");
    block.append(el("span", "badge badge-material", `내 소재 · ${material.title}`));
    material.en.forEach((line) => { const row = el("div", "spoken-line"); row.append(el("span", "", line), ttsButton(line)); block.append(row); });
    wrap.append(block);
  });
  const added = el("div", "answer-source-block added-sentence");
  added.append(el("span", "badge badge-added", "질문 맞춤 추가 문장"));
  const row = el("div", "spoken-line"); row.append(el("span", "", extra), ttsButton(extra)); added.append(row); wrap.append(added);
  return wrap;
}

function renderTypeTabs() {
  const wrap = document.querySelector("#typeTabs");
  wrap.replaceChildren(...questionTypes.map((type) => {
    const count = sourceQuestions.filter((q) => q.typeId === type.id).length;
    const button = el("button", `type-button${type.id === state.activeTypeId ? " active" : ""}`);
    button.type = "button";
    button.dataset.typeId = type.id;
    button.append(el("strong", "", type.label), el("span", "", `${count}개`));
    return button;
  }));
}

function renderQuestions() {
  const type = questionTypes.find((item) => item.id === state.activeTypeId);
  const questions = sourceQuestions.filter((question) => question.typeId === state.activeTypeId);
  document.querySelector("#activeTypeCount").textContent = `${questions.length}개`;
  const board = document.querySelector("#questionBoard");
  board.replaceChildren();
  const heading = el("div", "board-heading");
  heading.append(el("div", "", type.label), el("span", "", type.hint));
  board.append(heading);
  const grid = el("div", "question-grid");
  questions.forEach((question) => {
    const card = el("article", `question-card ${question.source}`);
    const meta = el("div", "card-meta");
    meta.append(sourceBadge(question.source), el("span", "badge badge-type", type.label));
    card.append(meta);
    const english = el("div", "question-english");
    english.append(el("strong", "", question.questionEn), ttsButton(question.questionEn, "질문 듣기"));
    card.append(english, el("p", "translation", question.questionKo));
    if (question.source === "expected") {
      const button = el("button", "answer-toggle", "추천 답변 보기");
      button.type = "button";
      button.setAttribute("aria-expanded", "false");
      const panel = el("div", "recommendation-panel hidden");
      panel.append(createRecommendation(question));
      button.addEventListener("click", () => {
        const isOpen = !panel.classList.toggle("hidden");
        button.setAttribute("aria-expanded", String(isOpen));
        button.textContent = isOpen ? "추천 답변 접기" : "추천 답변 보기";
      });
      card.append(button, panel);
    }
    grid.append(card);
  });
  board.append(grid);
}

function renderAnswers() {
  const board = document.querySelector("#answerBoard");
  if (!sourceAnswerPatterns.length) {
    board.replaceChildren(el("p", "empty-note", "아직 등록된 내 답변 패턴이 없습니다. #마스터 P07로 한국어 답변 소재를 말해주세요."));
    return;
  }
  board.replaceChildren(...sourceAnswerPatterns.map((item) => {
    const card = el("article", "library-card");
    card.append(el("span", "badge badge-material", labelOf(answerCategories, item.category)), el("h3", "", item.title), el("p", "korean-source", item.ko));
    const lines = el("div", "english-material");
    item.en.forEach((line) => { const row = el("div", "spoken-line"); row.append(el("span", "", line), ttsButton(line)); lines.append(row); });
    card.append(lines);
    return card;
  }));
}

function renderFillers() {
  const board = document.querySelector("#fillerBoard");
  board.replaceChildren(...fillerFunctions.map((group) => {
    const section = el("section", "filler-group");
    section.append(el("h3", "", group.label));
    const grid = el("div", "filler-grid");
    sourceFillers.filter((item) => item.functionId === group.id).forEach((item) => {
      const card = el("article", "filler-card");
      const line = el("div", "spoken-line"); line.append(el("strong", "", item.en), ttsButton(item.en));
      card.append(line, el("p", "", item.ko)); grid.append(card);
    });
    section.append(grid); return section;
  }));
}

function getDeletedMemoIds() {
  try { return new Set(JSON.parse(localStorage.getItem("opicDeletedMemoIds") || "[]")); } catch { return new Set(); }
}

function renderMemos() {
  const deleted = getDeletedMemoIds();
  const board = document.querySelector("#memoBoard");
  board.replaceChildren(...personalNotes.filter((note) => !deleted.has(note.id)).map((note) => {
    const card = el("article", "library-card memo-card");
    card.append(el("span", "badge badge-memo", "독립 메모"), el("h3", "", note.title), el("p", "korean-source", note.ko));
    const line = el("div", "spoken-line"); line.append(el("strong", "", note.en), ttsButton(note.en));
    card.append(line, el("p", "pronunciation", note.sound), el("p", "memo-meaning", note.meaning)); return card;
  }));
}

function bindTypeTabs() {
  document.querySelector("#typeTabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-type-id]");
    if (!button) return;
    state.activeTypeId = button.dataset.typeId;
    renderTypeTabs();
    renderQuestions();
  });
}

function bindResourceToggles() {
  document.querySelectorAll(".resource-toggle").forEach((button) => button.addEventListener("click", () => {
    const panel = document.querySelector(`#${button.dataset.panel}`);
    const isOpen = !panel.classList.toggle("hidden");
    button.setAttribute("aria-expanded", String(isOpen));
    button.querySelector(".toggle-label").textContent = isOpen ? "접기" : "펼쳐 보기";
  }));
}

function updateTimer() {
  const minutes = String(Math.floor(state.remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(state.remainingSeconds % 60).padStart(2, "0");
  document.querySelector("#timer").textContent = `${minutes}:${seconds}`;
}

function finishPractice() {
  clearInterval(state.timerId); state.timerId = null; state.remainingSeconds = 0; updateTimer();
  document.querySelector("#practiceState").textContent = "답변 확인";
  document.querySelector("#practiceButton").textContent = "다시 연습";
  const result = document.querySelector("#practiceResult");
  result.replaceChildren(createRecommendation(state.practiceQuestion)); result.classList.remove("hidden");
}

function startPractice() {
  state.practiceQuestion = sourceQuestions[Math.floor(Math.random() * sourceQuestions.length)];
  state.remainingSeconds = 60;
  document.querySelector("#practiceState").textContent = "말하는 중";
  document.querySelector("#practiceButton").textContent = "연습 종료";
  document.querySelector("#practiceTag").replaceChildren(sourceBadge(state.practiceQuestion.source), el("span", "badge badge-type", labelOf(questionTypes, state.practiceQuestion.typeId)));
  document.querySelector("#practiceQuestion").textContent = state.practiceQuestion.questionEn;
  document.querySelector("#practiceQuestionKo").textContent = state.practiceQuestion.questionKo;
  document.querySelector("#practiceResult").classList.add("hidden"); updateTimer();
  state.timerId = setInterval(() => { state.remainingSeconds -= 1; updateTimer(); if (state.remainingSeconds <= 0) finishPractice(); }, 1000);
}

function bindPractice() { document.querySelector("#practiceButton").addEventListener("click", () => state.timerId ? finishPractice() : startPractice()); }

function bindNavigation() {
  const links = [...document.querySelectorAll(".nav-link")];
  links.forEach((link) => link.addEventListener("click", () => links.forEach((item) => item.classList.toggle("active", item === link))));
}

function init() {
  renderTypeTabs(); renderQuestions(); renderAnswers(); renderFillers(); renderMemos();
  bindTypeTabs(); bindResourceToggles(); bindPractice(); bindNavigation();
}

init();

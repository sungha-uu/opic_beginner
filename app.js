const STORAGE_KEYS = {
  questions: "opicP07Questions",
  answerPatterns: "opicP07AnswerPatterns",
  fillers: "opicP07Fillers"
};

// Legacy compatibility: existing memo deletions keep using the original key.
const deletedMemoStorageKey = "opicDeletedMemoIds";

const questionTypes = [
  { id: "description", label: "묘사", hint: "장소, 사람, 사물의 모습 설명" },
  { id: "routine", label: "루틴", hint: "평소 하는 일과 빈도 설명" },
  { id: "experience", label: "경험", hint: "과거에 있었던 일 설명" },
  { id: "comparison", label: "비교", hint: "과거와 현재, 두 대상을 비교" },
  { id: "problem", label: "문제해결", hint: "문제와 해결 방법 설명" },
  { id: "roleplay", label: "롤플레이", hint: "질문, 요청, 변경, 사과" },
  { id: "opinion", label: "의견", hint: "좋아하는 이유나 생각 설명" }
];

const answerCategories = [
  { id: "experience", label: "개인 경험" },
  { id: "preference", label: "취향" },
  { id: "routine", label: "일상 루틴" },
  { id: "place", label: "장소" },
  { id: "person", label: "사람" },
  { id: "problem", label: "문제와 해결" },
  { id: "other", label: "기타 소재" }
];

const fillerFunctions = [
  { id: "connect", label: "말 연결하기" },
  { id: "thinking", label: "생각할 시간 벌기" },
  { id: "example", label: "예시 시작하기" },
  { id: "correct", label: "정정하기" },
  { id: "closing", label: "마무리하기" }
];

const initialQuestions = [
  ["description", "Tell me about a park near your home.", "집 근처 공원에 대해 말해주세요."],
  ["description", "Please describe your home.", "사는 집을 묘사해주세요."],
  ["routine", "What do you usually do after work?", "퇴근 후 보통 무엇을 하나요?"],
  ["routine", "How often do you listen to music?", "얼마나 자주 음악을 듣나요?"],
  ["experience", "Tell me about the last time you went shopping.", "마지막으로 쇼핑했던 경험을 말해주세요."],
  ["experience", "Tell me about a memorable trip.", "기억에 남는 여행을 말해주세요."],
  ["comparison", "Compare your home now and your old home.", "지금 집과 예전 집을 비교해주세요."],
  ["problem", "Tell me about a problem you had at a cafe.", "카페에서 겪은 문제를 말해주세요."],
  ["roleplay", "Call a restaurant and ask to change your reservation.", "식당에 전화해 예약 변경을 요청하세요."],
  ["opinion", "Why do you like walking in the park?", "왜 공원 산책을 좋아하나요?"]
].map(([typeId, questionEn, questionKo], index) => ({
  id: `seed-question-${index + 1}`,
  typeId,
  source: "expected",
  questionEn,
  questionKo,
  originQuestionId: "",
  createdAt: "2026-06-12T00:00:00.000Z",
  updatedAt: "2026-06-12T00:00:00.000Z"
}));

const initialFillers = [
  ["connect", "As you know,", "아시다시피,"],
  ["connect", "And also,", "그리고 또,"],
  ["thinking", "Let me think.", "잠시 생각해볼게요."],
  ["thinking", "Well, that is an interesting question.", "음, 흥미로운 질문이네요."],
  ["thinking", "I am not sure, but I will try.", "잘 모르지만 말해볼게요."],
  ["example", "For example,", "예를 들면,"],
  ["example", "One time,", "한번은,"],
  ["correct", "I mean,", "제 말은,"],
  ["correct", "Let me say that again.", "다시 말해볼게요."],
  ["closing", "That is why I like it.", "그래서 저는 그것을 좋아합니다."],
  ["closing", "That is all I can say about it.", "그것에 대해서는 이 정도로 말할 수 있습니다."]
].map(([functionId, en, ko], index) => ({
  id: `seed-filler-${index + 1}`,
  functionId,
  en,
  ko,
  createdAt: "2026-06-12T00:00:00.000Z",
  updatedAt: "2026-06-12T00:00:00.000Z"
}));

// Memo data is intentionally isolated. Recommendation code never reads this array.
const personalNotes = [
  { id: "danger-come-down", title: "위험 경고", ko: "위험해, 거기서 내려와.", en: "It's dangerous. Come down from there.", sound: "잇츠 데인저러스. 컴 다운 프롬 데어.", meaning: "위험한 상황에서 상대에게 그 장소에서 내려오라고 말하는 표현입니다." },
  { id: "go-over-there", title: "이동 제안", ko: "저쪽으로 가자.", en: "Let's go over there.", sound: "렛츠 고 오버 데어.", meaning: "상대에게 저쪽 방향이나 장소로 같이 가자고 제안하는 표현입니다." },
  { id: "tv-broke-movie", title: "영화 문제", ko: "한 번은 TV가 고장 나서 영화를 보지 못했다.", en: "One time, my TV did not work, so I could not watch the movie.", sound: "원 타임, 마이 티비 디드 낫 워크, 쏘 아이 쿠드 낫 워치 더 무비.", meaning: "TV가 고장 나서 영화를 보지 못했던 작은 문제를 설명하는 표현입니다." },
  { id: "lotte-cinema-near-home", title: "영화관 묘사", ko: "우리 집 근처에는 롯데시네마라는 영화관이 있다. 거기는 매우 크고 신식이다.", en: "There is a movie theater called Lotte Cinema near my home. It is very big and modern.", sound: "데어 이즈 어 무비 씨어터 콜드 롯데 시네마 니어 마이 홈. 잇 이즈 베리 빅 앤 모던.", meaning: "집 근처 영화관을 묘사할 때 쓸 수 있는 표현입니다." },
  { id: "james-bond-movies", title: "영화 취향", ko: "나는 제임스 본드가 나오는 영화를 다 좋아한다.", en: "I like all movies with James Bond.", sound: "아이 라이크 올 무비즈 위드 제임스 본드.", meaning: "제임스 본드가 나오는 영화들을 좋아한다고 말하는 표현입니다." },
  { id: "a-the-movie-theater", title: "a/the 설명", ko: "우리 집 근처에 크고 신식인 영화관이 있다. 그 영화관의 이름은 롯데시네마이다.", en: "There is a big and modern movie theater near my home. The name of the theater is Lotte Cinema.", sound: "데어 이즈 어 빅 앤 모던 무비 씨어터 니어 마이 홈. 더 네임 오브 더 씨어터 이즈 롯데 시네마.", meaning: "처음 말하는 영화관은 a movie theater, 다시 말하는 그 영화관은 the theater라고 한다. a는 처음 소개할 때, the는 이미 말한 대상을 다시 가리킬 때 쓴다." },
  { id: "lost-money-at-mall", title: "쇼핑몰 문제", ko: "한 번은 쇼핑몰에서 돈을 잃어버린 적이 있다. 나는 그때 매우 당황했지만 침착하게 행동했고 집에 돌아온 기억이 있다.", en: "One time, I lost my money at a shopping mall. I was very surprised, but I stayed calm and went back home.", sound: "원 타임, 아이 로스트 마이 머니 앳 어 쇼핑 몰. 아이 워즈 베리 서프라이즈드, 벗 아이 스테이드 캄 앤 웬트 백 홈.", meaning: "쇼핑몰에서 돈을 잃어버렸지만 침착하게 행동하고 집에 돌아왔다는 과거 경험 표현입니다." },
  { id: "met-old-friend-at-mall", title: "쇼핑몰 경험", ko: "나는 쇼핑몰에서 오랜만에 친구를 만난 적이 있다. 그때 정말 반가웠었다.", en: "One time, I met an old friend at a shopping mall. I was really happy to see my friend.", sound: "원 타임, 아이 멧 언 올드 프렌드 앳 어 쇼핑 몰. 아이 워즈 리얼리 해피 투 씨 마이 프렌드.", meaning: "쇼핑몰에서 오랜만에 친구를 만나서 반가웠던 경험을 말하는 표현입니다." },
  { id: "reason-i-like-walking", title: "이유 설명", ko: "그게 내가 산책을 좋아하는 이유이다.", en: "That is why I like walking.", sound: "댓 이즈 와이 아이 라이크 워킹.", meaning: "어떤 이유를 말한 뒤, 그것 때문에 산책을 좋아한다고 정리하는 표현입니다." },
  { id: "prefer-iced-americano", title: "음료 취향", ko: "라떼보다는 아이스 아메리카노를 더 좋아한다.", en: "I like iced Americano more than latte.", sound: "아이 라이크 아이스트 아메리카노 모어 댄 라테.", meaning: "두 음료를 비교하면서 아이스 아메리카노를 더 좋아한다고 말하는 표현입니다." },
  { id: "apartment-rooms", title: "집 구조", ko: "우리 집은 아파트이고 방 2개, 화장실 1개, 거실 1개이다.", en: "My home is an apartment. It has two bedrooms, one bathroom, and one living room.", sound: "마이 홈 이즈 언 아파트먼트. 잇 해즈 투 베드룸즈, 원 배스룸, 앤 원 리빙 룸.", meaning: "집의 종류와 방, 화장실, 거실 개수를 간단히 설명하는 표현입니다." }
];

const state = {
  questions: loadCollection(STORAGE_KEYS.questions, initialQuestions),
  answerPatterns: loadCollection(STORAGE_KEYS.answerPatterns, []),
  fillers: loadCollection(STORAGE_KEYS.fillers, initialFillers),
  sourceFilter: "all",
  typeFilter: "all",
  practiceQuestion: null,
  timerId: null,
  remainingSeconds: 0
};

function loadCollection(key, fallback) {
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (Array.isArray(saved)) return saved;
  } catch (error) {
    console.warn(`${key} 데이터를 읽지 못했습니다.`, error);
  }
  const initial = structuredClone(fallback);
  localStorage.setItem(key, JSON.stringify(initial));
  return initial;
}

function saveCollection(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function createId(prefix) {
  const suffix = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `${prefix}-${suffix}`;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function getLabel(items, id) {
  return items.find((item) => item.id === id)?.label || "기타";
}

function fillSelect(select, items, includeAll = false) {
  select.replaceChildren();
  if (includeAll) select.append(new Option("모든 유형", "all"));
  items.forEach((item) => select.append(new Option(item.label, item.id)));
}

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

function sourceBadge(source) {
  return el("span", `badge ${source === "actual" ? "badge-actual" : "badge-expected"}`, source === "actual" ? "기출 질문" : "예상 질문");
}

function actionButton(label, action, id, extraClass = "") {
  const button = el("button", `text-button ${extraClass}`.trim(), label);
  button.type = "button";
  button.dataset.action = action;
  button.dataset.id = id;
  return button;
}

function getRecommendation(question) {
  // Deliberately reads only answerPatterns. personalNotes is never an input.
  const preferred = {
    description: ["place", "person", "other"],
    routine: ["routine", "preference", "other"],
    experience: ["experience", "person", "place"],
    comparison: ["preference", "place", "routine"],
    problem: ["problem", "experience"],
    roleplay: ["problem", "other"],
    opinion: ["preference", "experience", "routine"]
  }[question.typeId] || ["other"];
  const ranked = [...state.answerPatterns].sort((a, b) => preferred.indexOf(a.category) - preferred.indexOf(b.category));
  const selected = ranked.filter((item) => preferred.includes(item.category)).slice(0, 2);
  const materials = selected.length ? selected : ranked.slice(0, 2);
  const additions = {
    description: "It is easy to remember, and I like it.",
    routine: "I usually do it after work, so it is part of my routine.",
    experience: "It was a simple but memorable experience for me.",
    comparison: "They are different, but I like both of them.",
    problem: "I stayed calm, and the problem was solved.",
    roleplay: "Could you please help me with this?",
    opinion: "That is why I like it so much."
  };
  return { materials, extra: additions[question.typeId] || "That is all I can say about it." };
}

function createRecommendation(question, compact = false) {
  const wrap = el("div", "recommendation-box");
  const title = el("div", "recommendation-title");
  title.append(el("strong", "", "추천 답변"), el("span", "source-note", "출처: 내 답변 패턴 + 질문 맞춤 문장"));
  wrap.append(title);
  const { materials, extra } = getRecommendation(question);
  if (!materials.length) {
    wrap.append(el("p", "empty-note", "내 답변 패턴을 먼저 추가하면 이 질문에 맞는 추천 답변이 여기에 표시됩니다."));
    return wrap;
  }
  materials.forEach((material) => {
    const block = el("div", "answer-source-block");
    block.append(el("span", "badge badge-material", `내 소재 · ${material.title}`));
    material.en.split(/\r?\n/).filter(Boolean).forEach((line) => {
      const row = el("div", "spoken-line");
      row.append(el("span", "", line.trim()), ttsButton(line.trim()));
      block.append(row);
    });
    wrap.append(block);
  });
  const added = el("div", "answer-source-block added-sentence");
  added.append(el("span", "badge badge-added", "질문 맞춤 추가 문장"));
  const row = el("div", "spoken-line");
  row.append(el("span", "", extra), ttsButton(extra));
  added.append(row);
  wrap.append(added);
  if (!compact) wrap.append(el("p", "source-explain", "추천 답변은 저장된 개인 소재를 뼈대로 사용하고, 질문 유형에 맞는 쉬운 문장을 마지막에 붙입니다."));
  return wrap;
}

function renderSummary() {
  const counts = [
    ["기출 질문", state.questions.filter((q) => q.source === "actual").length],
    ["예상 질문", state.questions.filter((q) => q.source === "expected").length],
    ["내 답변 패턴", state.answerPatterns.length],
    ["필러", state.fillers.length]
  ];
  const wrap = document.querySelector("#summaryGrid");
  wrap.replaceChildren(...counts.map(([label, count]) => {
    const card = el("div", "summary-card");
    card.append(el("strong", "", String(count)), el("span", "", label));
    return card;
  }));
}

function renderQuestionOriginOptions(selected = "") {
  const select = document.querySelector("#originQuestionInput");
  select.replaceChildren(new Option("직접 만든 예상 질문", ""));
  state.questions.filter((q) => q.source === "actual").forEach((q) => select.append(new Option(`${getLabel(questionTypes, q.typeId)} · ${q.questionKo}`, q.id)));
  select.value = selected;
}

function renderQuestions() {
  const board = document.querySelector("#questionBoard");
  board.replaceChildren();
  const filtered = state.questions.filter((q) => (state.sourceFilter === "all" || q.source === state.sourceFilter) && (state.typeFilter === "all" || q.typeId === state.typeFilter));
  questionTypes.forEach((type) => {
    const questions = filtered.filter((q) => q.typeId === type.id);
    if (!questions.length) return;
    const section = el("section", "type-group");
    const heading = el("div", "type-heading");
    heading.append(el("div", "", type.label), el("span", "", `${questions.length}개 · ${type.hint}`));
    section.append(heading);
    const grid = el("div", "question-grid");
    questions.forEach((question) => {
      const card = el("article", `question-card ${question.source}`);
      const meta = el("div", "card-meta");
      meta.append(sourceBadge(question.source), el("span", "badge badge-type", type.label));
      const actions = el("div", "card-actions");
      if (question.source === "actual") actions.append(actionButton("유사 질문 만들기", "derive-question", question.id));
      actions.append(actionButton("수정", "edit-question", question.id), actionButton("삭제", "delete-question", question.id, "danger-text"));
      meta.append(actions);
      card.append(meta);
      const english = el("div", "question-english");
      english.append(el("strong", "", question.questionEn), ttsButton(question.questionEn, "질문 듣기"));
      card.append(english, el("p", "question-korean", question.questionKo));
      if (question.source === "expected") {
        if (question.originQuestionId) card.append(el("p", "origin-note", "연결된 기출 질문을 바탕으로 만든 연습 질문"));
        card.append(createRecommendation(question, true));
      }
      grid.append(card);
    });
    section.append(grid);
    board.append(section);
  });
  if (!filtered.length) board.append(el("div", "empty-state", "이 조건에 저장된 질문이 없습니다."));
  renderQuestionOriginOptions();
  renderSummary();
}

function renderAnswers() {
  const board = document.querySelector("#answerBoard");
  board.replaceChildren();
  state.answerPatterns.forEach((item) => {
    const card = el("article", "library-card answer-pattern-card");
    const header = el("div", "card-meta");
    header.append(el("span", "badge badge-material", getLabel(answerCategories, item.category)));
    const actions = el("div", "card-actions");
    actions.append(actionButton("수정", "edit-answer", item.id), actionButton("삭제", "delete-answer", item.id, "danger-text"));
    header.append(actions);
    card.append(header, el("h3", "", item.title), el("p", "korean-source", item.ko));
    const english = el("div", "english-material");
    item.en.split(/\r?\n/).filter(Boolean).forEach((line) => {
      const row = el("div", "spoken-line");
      row.append(el("span", "", line.trim()), ttsButton(line.trim()));
      english.append(row);
    });
    card.append(english);
    if (item.tags?.length) {
      const tags = el("div", "tag-list");
      item.tags.forEach((tag) => tags.append(el("span", "mini-tag", tag)));
      card.append(tags);
    }
    board.append(card);
  });
  if (!state.answerPatterns.length) board.append(el("div", "empty-state", "아직 저장된 개인 답변 소재가 없습니다. 한국어 원문과 쉬운 영어 정리문을 함께 추가해보세요."));
  renderQuestions();
}

function renderFillers() {
  const board = document.querySelector("#fillerBoard");
  board.replaceChildren();
  fillerFunctions.forEach((group) => {
    const items = state.fillers.filter((item) => item.functionId === group.id);
    if (!items.length) return;
    const section = el("section", "type-group filler-group");
    const heading = el("div", "type-heading");
    heading.append(el("div", "", group.label), el("span", "", `${items.length}개`));
    section.append(heading);
    const grid = el("div", "filler-grid");
    items.forEach((item) => {
      const card = el("article", "filler-card");
      const line = el("div", "spoken-line");
      line.append(el("strong", "", item.en), ttsButton(item.en));
      card.append(line, el("p", "", item.ko));
      const actions = el("div", "card-actions");
      actions.append(actionButton("수정", "edit-filler", item.id), actionButton("삭제", "delete-filler", item.id, "danger-text"));
      card.append(actions);
      grid.append(card);
    });
    section.append(grid);
    board.append(section);
  });
  if (!state.fillers.length) board.append(el("div", "empty-state", "저장된 필러가 없습니다."));
  renderSummary();
}

function getDeletedMemoIds() {
  try { return new Set(JSON.parse(localStorage.getItem(deletedMemoStorageKey) || "[]")); }
  catch { return new Set(); }
}

function renderMemos() {
  const board = document.querySelector("#memoBoard");
  const deleted = getDeletedMemoIds();
  board.replaceChildren();
  personalNotes.filter((note) => !deleted.has(note.id)).forEach((note) => {
    const card = el("article", "library-card memo-card");
    const header = el("div", "card-meta");
    header.append(el("span", "badge badge-memo", "독립 메모"));
    const remove = actionButton("삭제", "delete-memo", note.id, "danger-text");
    header.append(remove);
    card.append(header, el("h3", "", note.title), el("p", "korean-source", note.ko));
    const line = el("div", "spoken-line");
    line.append(el("strong", "", note.en), ttsButton(note.en));
    card.append(line, el("p", "pronunciation", note.sound), el("p", "memo-meaning", note.meaning));
    board.append(card);
  });
  if (!board.children.length) board.append(el("div", "empty-state", "표시할 메모가 없습니다."));
}

function openForm(panelId) {
  document.querySelector(`#${panelId}`).classList.remove("hidden");
  document.querySelector(`#${panelId} input:not([type='hidden']), #${panelId} select, #${panelId} textarea`)?.focus();
}

function closeForm(panelId) {
  const panel = document.querySelector(`#${panelId}`);
  panel.classList.add("hidden");
  panel.querySelector("form")?.reset();
  panel.querySelector("input[name='id']").value = "";
  if (panelId === "questionFormPanel") renderQuestionOriginOptions();
}

function editQuestion(id, derive = false) {
  const item = state.questions.find((q) => q.id === id);
  if (!item) return;
  const form = document.querySelector("#questionForm");
  form.elements.id.value = derive ? "" : item.id;
  form.elements.source.value = derive ? "expected" : item.source;
  form.elements.typeId.value = item.typeId;
  form.elements.questionKo.value = derive ? `${item.questionKo}와 비슷한 연습 질문` : item.questionKo;
  form.elements.questionEn.value = derive ? "" : item.questionEn;
  renderQuestionOriginOptions(derive ? item.id : item.originQuestionId);
  openForm("questionFormPanel");
}

function editAnswer(id) {
  const item = state.answerPatterns.find((a) => a.id === id);
  if (!item) return;
  const form = document.querySelector("#answerForm");
  ["id", "title", "category", "ko", "en"].forEach((name) => { form.elements[name].value = item[name] || ""; });
  form.elements.tags.value = (item.tags || []).join(", ");
  openForm("answerFormPanel");
}

function editFiller(id) {
  const item = state.fillers.find((f) => f.id === id);
  if (!item) return;
  const form = document.querySelector("#fillerForm");
  ["id", "functionId", "en", "ko"].forEach((name) => { form.elements[name].value = item[name] || ""; });
  openForm("fillerFormPanel");
}

function bindForms() {
  document.querySelector("#questionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const existing = state.questions.find((q) => q.id === data.id);
    const item = { ...existing, ...data, id: data.id || createId("question"), createdAt: existing?.createdAt || new Date().toISOString(), updatedAt: new Date().toISOString() };
    state.questions = existing ? state.questions.map((q) => q.id === item.id ? item : q) : [item, ...state.questions];
    saveCollection(STORAGE_KEYS.questions, state.questions);
    closeForm("questionFormPanel");
    renderQuestions();
  });
  document.querySelector("#answerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const existing = state.answerPatterns.find((a) => a.id === data.id);
    const item = { ...existing, ...data, id: data.id || createId("answer"), tags: data.tags.split(",").map((tag) => tag.trim()).filter(Boolean), createdAt: existing?.createdAt || new Date().toISOString(), updatedAt: new Date().toISOString() };
    state.answerPatterns = existing ? state.answerPatterns.map((a) => a.id === item.id ? item : a) : [item, ...state.answerPatterns];
    saveCollection(STORAGE_KEYS.answerPatterns, state.answerPatterns);
    closeForm("answerFormPanel");
    renderAnswers();
  });
  document.querySelector("#fillerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const existing = state.fillers.find((f) => f.id === data.id);
    const item = { ...existing, ...data, id: data.id || createId("filler"), createdAt: existing?.createdAt || new Date().toISOString(), updatedAt: new Date().toISOString() };
    state.fillers = existing ? state.fillers.map((f) => f.id === item.id ? item : f) : [item, ...state.fillers];
    saveCollection(STORAGE_KEYS.fillers, state.fillers);
    closeForm("fillerFormPanel");
    renderFillers();
  });
}

function bindActions() {
  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-toggle-form]");
    if (toggle) openForm(toggle.dataset.toggleForm);
    const cancel = event.target.closest("[data-cancel-form]");
    if (cancel) closeForm(cancel.dataset.cancelForm);
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const { action, id } = button.dataset;
    if (action === "edit-question") editQuestion(id);
    if (action === "derive-question") editQuestion(id, true);
    if (action === "delete-question") {
      state.questions = state.questions.filter((q) => q.id !== id);
      saveCollection(STORAGE_KEYS.questions, state.questions);
      renderQuestions();
    }
    if (action === "edit-answer") editAnswer(id);
    if (action === "delete-answer") {
      state.answerPatterns = state.answerPatterns.filter((a) => a.id !== id);
      saveCollection(STORAGE_KEYS.answerPatterns, state.answerPatterns);
      renderAnswers();
    }
    if (action === "edit-filler") editFiller(id);
    if (action === "delete-filler") {
      state.fillers = state.fillers.filter((f) => f.id !== id);
      saveCollection(STORAGE_KEYS.fillers, state.fillers);
      renderFillers();
    }
    if (action === "delete-memo") {
      const deleted = getDeletedMemoIds();
      deleted.add(id);
      localStorage.setItem(deletedMemoStorageKey, JSON.stringify([...deleted]));
      renderMemos();
    }
  });
}

function bindFilters() {
  document.querySelector("#questionSourceFilters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-source-filter]");
    if (!button) return;
    state.sourceFilter = button.dataset.sourceFilter;
    document.querySelectorAll("[data-source-filter]").forEach((item) => item.classList.toggle("active", item === button));
    renderQuestions();
  });
  document.querySelector("#questionTypeFilter").addEventListener("change", (event) => {
    state.typeFilter = event.target.value;
    renderQuestions();
  });
}

function updateTimer() {
  const minutes = String(Math.floor(state.remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(state.remainingSeconds % 60).padStart(2, "0");
  document.querySelector("#timer").textContent = `${minutes}:${seconds}`;
}

function finishPractice() {
  clearInterval(state.timerId);
  state.timerId = null;
  state.remainingSeconds = 0;
  updateTimer();
  document.querySelector("#practiceState").textContent = "답변 확인";
  document.querySelector("#practiceButton").textContent = "다시 연습";
  const result = document.querySelector("#practiceResult");
  result.replaceChildren(createRecommendation(state.practiceQuestion));
  result.classList.remove("hidden");
}

function startPractice() {
  if (!state.questions.length) return;
  state.practiceQuestion = state.questions[Math.floor(Math.random() * state.questions.length)];
  state.remainingSeconds = 60;
  document.querySelector("#practiceState").textContent = "말하는 중";
  document.querySelector("#practiceButton").textContent = "연습 종료";
  document.querySelector("#practiceTag").replaceChildren(sourceBadge(state.practiceQuestion.source), el("span", "badge badge-type", getLabel(questionTypes, state.practiceQuestion.typeId)));
  document.querySelector("#practiceQuestion").textContent = state.practiceQuestion.questionEn;
  document.querySelector("#practiceQuestionKo").textContent = state.practiceQuestion.questionKo;
  document.querySelector("#practiceResult").classList.add("hidden");
  updateTimer();
  state.timerId = setInterval(() => {
    state.remainingSeconds -= 1;
    updateTimer();
    if (state.remainingSeconds <= 0) finishPractice();
  }, 1000);
}

function bindPractice() {
  document.querySelector("#practiceButton").addEventListener("click", () => state.timerId ? finishPractice() : startPractice());
}

function bindNavigation() {
  const links = [...document.querySelectorAll(".nav-link")];
  links.forEach((link) => link.addEventListener("click", () => {
    links.forEach((item) => item.classList.toggle("active", item === link));
  }));
}

function init() {
  fillSelect(document.querySelector("#questionTypeInput"), questionTypes);
  fillSelect(document.querySelector("#questionTypeFilter"), questionTypes, true);
  fillSelect(document.querySelector("#answerCategoryInput"), answerCategories);
  fillSelect(document.querySelector("#fillerFunctionInput"), fillerFunctions);
  bindForms();
  bindActions();
  bindFilters();
  bindPractice();
  bindNavigation();
  renderAnswers();
  renderFillers();
  renderMemos();
}

init();

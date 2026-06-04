const storageKey = "opic-il-dashboard-v1";

const data = {
  defaultExamDate: "2026-07-04",
  checklist: [
    { id: "words", label: "단어 10개 따라 말하기", points: 15 },
    { id: "script", label: "개인 고정 스크립트 1개 읽기", points: 20 },
    { id: "record", label: "답변 녹음 2개 만들기", points: 25 },
    { id: "question", label: "랜덤 질문 1개 답변하기", points: 20 },
    { id: "review", label: "녹음 다시 듣고 메모하기", points: 20 }
  ],
  selfCheck: [
    { id: "three", label: "3문장 이상 말했다" },
    { id: "silence", label: "긴 침묵 없이 끝까지 말했다" },
    { id: "topic", label: "질문 주제를 벗어나지 않았다" },
    { id: "slow", label: "천천히 또박또박 말했다" }
  ],
  topics: ["전체", "자기소개", "공원", "게임", "집", "카페", "롤플레이"],
  scripts: [
    {
      topic: "공원",
      title: "자유시간/공원",
      question: "What do you usually do in your free time?",
      lines: [
        ["Whenever I have free time, I go to a park.", "웬에버 아이 해브 프리 타임, 아이 고 투 어 파크."],
        ["Walking in the park is one of my hobbies.", "워킹 인 더 파크 이즈 원 어브 마이 하비즈."],
        ["The park is quiet and clean.", "더 파크 이즈 콰이엇 앤 클린."],
        ["I usually walk there after work.", "아이 유주얼리 워크 데어 애프터 워크."],
        ["It helps me relax.", "잇 헬프스 미 릴랙스."]
      ]
    },
    {
      topic: "자기소개",
      title: "자기소개 기본",
      question: "Tell me something about yourself.",
      lines: [
        ["Hello, my name is Sungha Yoo.", "헬로, 마이 네임 이즈 성하 유."],
        ["I am 40 years old.", "아이 앰 포티 이어즈 올드."],
        ["I work for Samsung Electronics.", "아이 워크 포 삼성 일렉트로닉스."],
        ["I have worked there for 10 years.", "아이 해브 워크트 데어 포 텐 이어즈."],
        ["There are four people in my family.", "데어 아 포 피플 인 마이 패밀리."],
        ["I live in Daegu, Korea.", "아이 리브 인 대구, 코리아."],
        ["Playing games is one of my hobbies.", "플레이잉 게임즈 이즈 원 어브 마이 하비즈."],
        ["These days, I study English after work.", "디즈 데이즈, 아이 스터디 잉글리시 애프터 워크."]
      ]
    },
    {
      topic: "게임",
      title: "게임 취미",
      question: "What is your hobby?",
      lines: [
        ["Playing games is one of my hobbies.", "플레이잉 게임즈 이즈 원 어브 마이 하비즈."],
        ["I usually play games at home.", "아이 유주얼리 플레이 게임즈 앳 홈."],
        ["I play games after work.", "아이 플레이 게임즈 애프터 워크."],
        ["It is fun and exciting.", "잇 이즈 펀 앤 익사이팅."],
        ["It helps me relax.", "잇 헬프스 미 릴랙스."]
      ]
    },
    {
      topic: "집",
      title: "집 묘사",
      question: "Please describe your home.",
      lines: [
        ["I live in an apartment.", "아이 리브 인 언 아파트먼트."],
        ["My home is small but clean.", "마이 홈 이즈 스몰 벗 클린."],
        ["There is a bedroom and a living room.", "데어 이즈 어 베드룸 앤 어 리빙 룸."],
        ["My room is quiet.", "마이 룸 이즈 콰이엇."],
        ["I like my home because it is comfortable.", "아이 라이크 마이 홈 비커즈 잇 이즈 컴퍼터블."]
      ]
    },
    {
      topic: "카페",
      title: "자주 가는 카페",
      question: "Tell me about a cafe you often go to.",
      lines: [
        ["I often go to a cafe near my home.", "아이 오프튼 고 투 어 카페 니어 마이 홈."],
        ["It is small and quiet.", "잇 이즈 스몰 앤 콰이엇."],
        ["I usually drink iced coffee there.", "아이 유주얼리 드링크 아이스드 커피 데어."],
        ["Sometimes I study English at the cafe.", "섬타임즈 아이 스터디 잉글리시 앳 더 카페."],
        ["I like it because it is comfortable.", "아이 라이크 잇 비커즈 잇 이즈 컴퍼터블."]
      ]
    },
    {
      topic: "롤플레이",
      title: "예약 변경",
      question: "You need to change your reservation. Ask two or three questions.",
      lines: [
        ["Hello, I have a reservation today.", "헬로, 아이 해브 어 레저베이션 투데이."],
        ["But I cannot go at 6 p.m.", "벗 아이 캐낫 고 앳 식스 피엠."],
        ["Can I change the time to 7 p.m.?", "캔 아이 체인지 더 타임 투 세븐 피엠?"],
        ["Is that okay?", "이즈 댓 오케이?"],
        ["Thank you for your help.", "땡큐 포 유어 헬프."]
      ]
    }
  ],
  vocab: [
    ["comfortable", "편안한", "컴퍼터블"],
    ["quiet", "조용한", "콰이엇"],
    ["usually", "보통", "유주얼리"],
    ["after work", "퇴근 후", "애프터 워크"],
    ["hobby", "취미", "하비"],
    ["relax", "쉬다", "릴랙스"],
    ["reservation", "예약", "레저베이션"],
    ["change", "바꾸다", "체인지"],
    ["neighborhood", "동네", "네이버후드"],
    ["every day", "매일", "에브리 데이"]
  ]
};

const state = loadState();
let activeTopic = "전체";
let timerId = null;
let timerSeconds = 0;
let recorder = null;
let chunks = [];

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) {
    return {
      checked: {},
      self: {},
      examDate: data.defaultExamDate,
      latestResult: "",
      weakMemo: ""
    };
  }

  try {
    return JSON.parse(saved);
  } catch {
    return {
      checked: {},
      self: {},
      examDate: data.defaultExamDate,
      latestResult: "",
      weakMemo: ""
    };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderChecklist() {
  const wrap = document.querySelector("#checklist");
  wrap.innerHTML = "";

  data.checklist.forEach((item) => {
    const label = el("label", "check-row");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = Boolean(state.checked[item.id]);
    input.addEventListener("change", () => {
      state.checked[item.id] = input.checked;
      saveState();
      renderReadiness();
    });

    label.append(input, document.createTextNode(item.label), el("span", null, `${item.points}점`));
    wrap.append(label);
  });
}

function renderSelfCheck() {
  const wrap = document.querySelector("#selfCheck");
  wrap.innerHTML = "";

  data.selfCheck.forEach((item) => {
    const label = el("label", "check-row");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = Boolean(state.self[item.id]);
    input.addEventListener("change", () => {
      state.self[item.id] = input.checked;
      saveState();
    });

    label.append(input, document.createTextNode(item.label), el("span", null, "연습"));
    wrap.append(label);
  });
}

function renderReadiness() {
  const score = data.checklist.reduce((sum, item) => sum + (state.checked[item.id] ? item.points : 0), 0);
  document.querySelector("#readinessScore").textContent = score;
  document.querySelector("#scoreFill").style.width = `${score}%`;

  const text =
    score >= 90
      ? "실전 루틴이 아주 좋습니다."
      : score >= 70
        ? "오늘 시험 준비 흐름이 좋습니다."
        : score >= 40
          ? "기본 루틴은 잡혔습니다. 녹음 1개를 더 해보세요."
          : "오늘은 짧게라도 입으로 5문장만 말하면 됩니다.";
  document.querySelector("#readinessText").textContent = text;
}

function renderPriority() {
  const wrap = document.querySelector("#priorityScript");
  wrap.innerHTML = "";
  data.scripts[0].lines.forEach(([english, sound]) => {
    const row = el("div", "script-line");
    row.append(el("strong", null, english), el("span", null, sound));
    wrap.append(row);
  });
}

function renderTopicTabs() {
  const wrap = document.querySelector("#topicTabs");
  wrap.innerHTML = "";

  data.topics.forEach((topic) => {
    const button = el("button", `segment-button${topic === activeTopic ? " active" : ""}`, topic);
    button.type = "button";
    button.addEventListener("click", () => {
      activeTopic = topic;
      renderTopicTabs();
      renderScripts();
    });
    wrap.append(button);
  });
}

function renderScripts() {
  const wrap = document.querySelector("#scriptBoard");
  wrap.innerHTML = "";
  const scripts = activeTopic === "전체" ? data.scripts : data.scripts.filter((script) => script.topic === activeTopic);

  scripts.forEach((script) => {
    const item = el("article", "script-item");
    item.append(el("p", "eyebrow", script.topic), el("h3", null, script.title), el("p", "muted", script.question));
    const lines = el("div", "script-lines");
    script.lines.forEach(([english, sound]) => {
      const row = el("div", "script-line");
      row.append(el("strong", null, english), el("span", null, sound));
      lines.append(row);
    });
    item.append(lines);
    wrap.append(item);
  });
}

function renderVocab(items = data.vocab) {
  const wrap = document.querySelector("#vocabGrid");
  wrap.innerHTML = "";

  items.forEach(([word, meaning, sound]) => {
    const card = el("article", "vocab-card");
    card.append(el("strong", null, word), el("span", null, sound), el("p", null, meaning));
    wrap.append(card);
  });
}

function renderExam() {
  const input = document.querySelector("#examDate");
  const result = document.querySelector("#latestResult");
  const memo = document.querySelector("#weakMemo");
  input.value = state.examDate;
  result.value = state.latestResult;
  memo.value = state.weakMemo;
  updateDday();

  input.addEventListener("change", () => {
    state.examDate = input.value;
    saveState();
    updateDday();
  });

  result.addEventListener("change", () => {
    state.latestResult = result.value;
    saveState();
  });

  memo.addEventListener("input", () => {
    state.weakMemo = memo.value;
    saveState();
  });
}

function updateDday() {
  const target = new Date(`${state.examDate || data.defaultExamDate}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.ceil((target - today) / 86400000);
  const text = diff > 0 ? `D-${diff}` : diff === 0 ? "D-Day" : `D+${Math.abs(diff)}`;
  document.querySelector("#dDay").textContent = text;
}

function setRandomQuestion() {
  const script = data.scripts[Math.floor(Math.random() * data.scripts.length)];
  document.querySelector("#randomQuestion").textContent = script.question;
}

function startPracticeTimer() {
  clearInterval(timerId);
  timerSeconds = 60;
  updateTimer();
  timerId = setInterval(() => {
    timerSeconds -= 1;
    updateTimer();
    if (timerSeconds <= 0) clearInterval(timerId);
  }, 1000);
}

function updateTimer() {
  const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const seconds = String(timerSeconds % 60).padStart(2, "0");
  document.querySelector("#timer").textContent = `${minutes}:${seconds}`;
}

async function toggleRecording() {
  const button = document.querySelector("#recordButton");
  const audio = document.querySelector("#audioPlayback");

  if (recorder && recorder.state === "recording") {
    recorder.stop();
    button.textContent = "녹음 시작";
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    button.textContent = "녹음 불가";
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    chunks = [];
    recorder = new MediaRecorder(stream);
    recorder.addEventListener("dataavailable", (event) => chunks.push(event.data));
    recorder.addEventListener("stop", () => {
      const blob = new Blob(chunks, { type: "audio/webm" });
      audio.src = URL.createObjectURL(blob);
      audio.hidden = false;
      stream.getTracks().forEach((track) => track.stop());
    });
    recorder.start();
    button.textContent = "녹음 중지";
  } catch {
    button.textContent = "마이크 확인";
  }
}

function bindEvents() {
  document.querySelector("#resetToday").addEventListener("click", () => {
    state.checked = {};
    state.self = {};
    saveState();
    renderChecklist();
    renderSelfCheck();
    renderReadiness();
  });

  document.querySelector("#copyPriority").addEventListener("click", async () => {
    const text = data.scripts[0].lines.map((line) => line.join("\n")).join("\n\n");
    await navigator.clipboard?.writeText(text);
  });

  document.querySelector("#nextQuestion").addEventListener("click", setRandomQuestion);
  document.querySelector("#startTimer").addEventListener("click", startPracticeTimer);
  document.querySelector("#recordButton").addEventListener("click", toggleRecording);
  document.querySelector("#shuffleVocab").addEventListener("click", () => {
    renderVocab([...data.vocab].sort(() => Math.random() - 0.5).slice(0, 10));
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

renderChecklist();
renderSelfCheck();
renderReadiness();
renderPriority();
renderTopicTabs();
renderScripts();
renderVocab();
renderExam();
setRandomQuestion();
updateTimer();
bindEvents();

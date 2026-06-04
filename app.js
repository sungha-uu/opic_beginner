const questionTypes = [
  {
    id: "intro",
    label: "자기소개",
    title: "자기소개",
    goal: "이름, 나이, 직장, 사는 곳, 취미를 짧게 말한다.",
    questions: [
      ["Tell me something about yourself.", "자기소개를 해주세요."],
      ["Please introduce yourself.", "자신을 소개해주세요."],
      ["Tell me about yourself and your daily life.", "자기소개와 일상에 대해 말해주세요."],
      ["What should I know about you?", "당신에 대해 제가 무엇을 알면 좋을까요?"],
      ["Tell me about your job and your family.", "직장과 가족에 대해 말해주세요."],
      ["Tell me about where you live.", "사는 곳에 대해 말해주세요."],
      ["Tell me about your hobbies.", "취미에 대해 말해주세요."],
      ["Please tell me about your typical day.", "보통 하루에 대해 말해주세요."],
      ["Tell me about yourself in detail.", "자신에 대해 자세히 말해주세요."],
      ["What do you usually do after work?", "퇴근 후 보통 무엇을 하나요?"],
      ["Tell me about your life these days.", "요즘 생활에 대해 말해주세요."],
      ["Tell me three things about yourself.", "자신에 대해 세 가지를 말해주세요."]
    ],
    answer: [
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
    id: "description",
    label: "묘사",
    title: "장소/대상 묘사",
    goal: "장소가 어떤지, 무엇이 있는지, 왜 좋은지 말한다.",
    questions: [
      ["Please describe your home.", "집을 묘사해주세요."],
      ["Tell me about your neighborhood.", "동네에 대해 말해주세요."],
      ["Describe a park near your home.", "집 근처 공원을 묘사해주세요."],
      ["Tell me about a cafe you often go to.", "자주 가는 카페에 대해 말해주세요."],
      ["Describe your room.", "당신의 방을 묘사해주세요."],
      ["What does your apartment look like?", "당신의 아파트는 어떻게 생겼나요?"],
      ["Describe your favorite place in your neighborhood.", "동네에서 가장 좋아하는 장소를 묘사해주세요."],
      ["Tell me about a quiet place you like.", "좋아하는 조용한 장소에 대해 말해주세요."],
      ["Describe a place where you relax.", "쉬는 장소를 묘사해주세요."],
      ["Tell me what you can see near your home.", "집 근처에서 볼 수 있는 것들을 말해주세요."],
      ["Describe a place you visit after work.", "퇴근 후 가는 장소를 묘사해주세요."],
      ["Tell me about a comfortable place you know.", "아는 편안한 장소에 대해 말해주세요."]
    ],
    answer: [
      ["I live in Daegu, Korea.", "아이 리브 인 대구, 코리아."],
      ["There is a park near my home.", "데어 이즈 어 파크 니어 마이 홈."],
      ["The park is quiet and clean.", "더 파크 이즈 콰이엇 앤 클린."],
      ["There are many trees and benches.", "데어 아 매니 트리즈 앤 벤치즈."],
      ["I usually go there after work.", "아이 유주얼리 고 데어 애프터 워크."],
      ["I like it because it is comfortable.", "아이 라이크 잇 비커즈 잇 이즈 컴퍼터블."],
      ["It helps me relax.", "잇 헬프스 미 릴랙스."]
    ]
  },
  {
    id: "routine",
    label: "루틴",
    title: "평소 하는 일",
    goal: "보통 언제, 어디서, 무엇을 하는지 말한다.",
    questions: [
      ["What do you usually do in your free time?", "여가 시간에 보통 무엇을 하나요?"],
      ["What do you usually do after work?", "퇴근 후 보통 무엇을 하나요?"],
      ["How often do you go to a park?", "얼마나 자주 공원에 가나요?"],
      ["What do you usually do on weekends?", "주말에 보통 무엇을 하나요?"],
      ["Tell me about your daily routine.", "일상 루틴에 대해 말해주세요."],
      ["When do you usually study English?", "보통 언제 영어를 공부하나요?"],
      ["What do you do when you want to relax?", "쉬고 싶을 때 무엇을 하나요?"],
      ["How do you spend your evenings?", "저녁 시간을 어떻게 보내나요?"],
      ["What do you usually do at home?", "집에서 보통 무엇을 하나요?"],
      ["What do you do before going to bed?", "잠자기 전에 무엇을 하나요?"],
      ["What is your routine on a busy day?", "바쁜 날의 루틴은 무엇인가요?"],
      ["What do you usually do alone?", "혼자 있을 때 보통 무엇을 하나요?"]
    ],
    answer: [
      ["Whenever I have free time, I go to a park.", "웬에버 아이 해브 프리 타임, 아이 고 투 어 파크."],
      ["Walking in the park is one of my hobbies.", "워킹 인 더 파크 이즈 원 어브 마이 하비즈."],
      ["I usually walk there after work.", "아이 유주얼리 워크 데어 애프터 워크."],
      ["Sometimes I listen to music there.", "섬타임즈 아이 리슨 투 뮤직 데어."],
      ["The park is quiet and clean.", "더 파크 이즈 콰이엇 앤 클린."],
      ["It is fun and relaxing.", "잇 이즈 펀 앤 릴랙싱."],
      ["So I like going to the park.", "쏘 아이 라이크 고잉 투 더 파크."]
    ]
  },
  {
    id: "past",
    label: "과거경험",
    title: "최근 경험",
    goal: "언제, 누구와, 무엇을 했고, 어땠는지 말한다.",
    questions: [
      ["Tell me about the last time you went to a park.", "마지막으로 공원에 갔던 때를 말해주세요."],
      ["Tell me about a memorable weekend.", "기억에 남는 주말에 대해 말해주세요."],
      ["Tell me about the last time you went to a cafe.", "마지막으로 카페에 갔던 때를 말해주세요."],
      ["Tell me about a recent fun experience.", "최근 재미있었던 경험을 말해주세요."],
      ["Tell me about what you did after work recently.", "최근 퇴근 후 무엇을 했는지 말해주세요."],
      ["Tell me about the last time you played games.", "마지막으로 게임했던 때를 말해주세요."],
      ["Tell me about a time you felt relaxed.", "편안함을 느꼈던 때를 말해주세요."],
      ["Tell me about a place you visited recently.", "최근 방문한 장소에 대해 말해주세요."],
      ["Tell me about something you did last weekend.", "지난 주말에 한 일을 말해주세요."],
      ["Tell me about a recent walk.", "최근 산책에 대해 말해주세요."],
      ["Tell me about a good day you had recently.", "최근 좋았던 하루에 대해 말해주세요."],
      ["Tell me about a simple but nice experience.", "간단하지만 좋았던 경험을 말해주세요."]
    ],
    answer: [
      ["Last weekend, I went to a park near my home.", "래스트 위켄드, 아이 웬트 투 어 파크 니어 마이 홈."],
      ["I went there alone after work.", "아이 웬트 데어 얼론 애프터 워크."],
      ["The weather was nice.", "더 웨더 워즈 나이스."],
      ["I walked for about 30 minutes.", "아이 워크트 포 어바웃 써티 미닛츠."],
      ["I also listened to music.", "아이 올쏘 리슨드 투 뮤직."],
      ["It was quiet and relaxing.", "잇 워즈 콰이엇 앤 릴랙싱."],
      ["I had a nice time.", "아이 해드 어 나이스 타임."]
    ]
  },
  {
    id: "comparison",
    label: "비교",
    title: "과거와 현재 비교",
    goal: "예전과 지금이 어떻게 다른지 쉬운 문장으로 말한다.",
    questions: [
      ["How has your neighborhood changed?", "당신의 동네는 어떻게 변했나요?"],
      ["How have your hobbies changed?", "취미는 어떻게 변했나요?"],
      ["Compare your free time now and in the past.", "현재와 과거의 여가 시간을 비교해주세요."],
      ["How has your daily routine changed?", "일상 루틴은 어떻게 변했나요?"],
      ["How is your life different now from before?", "지금 생활은 예전과 어떻게 다른가요?"],
      ["How has your English study changed?", "영어 공부는 어떻게 변했나요?"],
      ["Compare your weekends now and before.", "지금과 예전의 주말을 비교해주세요."],
      ["How has your work life changed?", "직장 생활은 어떻게 변했나요?"],
      ["How has your way of relaxing changed?", "휴식 방법은 어떻게 변했나요?"],
      ["Compare your home now and your old home.", "지금 집과 예전 집을 비교해주세요."],
      ["How are your evenings different now?", "요즘 저녁 시간은 어떻게 달라졌나요?"],
      ["What did you do before, and what do you do now?", "예전에는 무엇을 했고 지금은 무엇을 하나요?"]
    ],
    answer: [
      ["In the past, I did not study English.", "인 더 패스트, 아이 디드 낫 스터디 잉글리시."],
      ["I usually played games at home.", "아이 유주얼리 플레이드 게임즈 앳 홈."],
      ["But these days, I study English after work.", "벗 디즈 데이즈, 아이 스터디 잉글리시 애프터 워크."],
      ["I also go to a park when I have free time.", "아이 올쏘 고 투 어 파크 웬 아이 해브 프리 타임."],
      ["My routine is a little different now.", "마이 루틴 이즈 어 리틀 디퍼런트 나우."],
      ["It is hard, but it is good for me.", "잇 이즈 하드, 벗 잇 이즈 굿 포 미."]
    ]
  },
  {
    id: "roleAsk",
    label: "롤플레이 질문",
    title: "질문하기",
    goal: "상대에게 2~3개의 쉬운 질문을 한다.",
    questions: [
      ["You want to go to a park. Call your friend and ask two or three questions.", "공원에 가고 싶습니다. 친구에게 전화해서 질문 2~3개를 하세요."],
      ["You want to reserve a table at a cafe. Ask two or three questions.", "카페 자리를 예약하고 싶습니다. 질문 2~3개를 하세요."],
      ["You want to buy a game. Ask the store clerk two or three questions.", "게임을 사고 싶습니다. 직원에게 질문 2~3개를 하세요."],
      ["You want to join an English class. Ask two or three questions.", "영어 수업에 참여하고 싶습니다. 질문 2~3개를 하세요."],
      ["You want to visit a new place. Ask your friend two or three questions.", "새로운 장소에 가고 싶습니다. 친구에게 질문 2~3개를 하세요."],
      ["You want to change your reservation. Ask two or three questions.", "예약을 변경하고 싶습니다. 질문 2~3개를 하세요."],
      ["You want to go shopping. Ask the clerk two or three questions.", "쇼핑하고 싶습니다. 직원에게 질문 2~3개를 하세요."],
      ["You want to meet your friend after work. Ask two or three questions.", "퇴근 후 친구를 만나고 싶습니다. 질문 2~3개를 하세요."],
      ["You want to use a gym. Ask two or three questions.", "헬스장을 이용하고 싶습니다. 질문 2~3개를 하세요."],
      ["You want to visit a restaurant. Ask two or three questions.", "식당에 가고 싶습니다. 질문 2~3개를 하세요."],
      ["You want to take a bus. Ask two or three questions.", "버스를 타고 싶습니다. 질문 2~3개를 하세요."],
      ["You want to buy coffee. Ask two or three questions.", "커피를 사고 싶습니다. 질문 2~3개를 하세요."]
    ],
    answer: [
      ["Hello, I have a question.", "헬로, 아이 해브 어 퀘스천."],
      ["I want to go there today.", "아이 원트 투 고 데어 투데이."],
      ["What time do you open?", "왓 타임 두 유 오픈?"],
      ["Is it close to my home?", "이즈 잇 클로즈 투 마이 홈?"],
      ["Can I go there after work?", "캔 아이 고 데어 애프터 워크?"],
      ["Thank you for your help.", "땡큐 포 유어 헬프."]
    ]
  },
  {
    id: "roleProblem",
    label: "롤플레이 문제",
    title: "문제 설명/해결",
    goal: "문제를 말하고 도움이나 변경을 요청한다.",
    questions: [
      ["You have a reservation, but you cannot go. Explain the problem and ask for help.", "예약이 있지만 갈 수 없습니다. 문제를 설명하고 도움을 요청하세요."],
      ["You bought a product, but there is a problem. Explain and ask for help.", "물건을 샀는데 문제가 있습니다. 설명하고 도움을 요청하세요."],
      ["You are late for an appointment. Call your friend and explain.", "약속에 늦었습니다. 친구에게 전화해서 설명하세요."],
      ["You cannot attend an English class today. Explain and ask to change the time.", "오늘 영어 수업에 참석할 수 없습니다. 설명하고 시간 변경을 요청하세요."],
      ["Your phone is not working. Explain the problem and ask for help.", "휴대폰이 작동하지 않습니다. 문제를 설명하고 도움을 요청하세요."],
      ["You cannot meet your friend today. Explain and suggest another time.", "오늘 친구를 만날 수 없습니다. 설명하고 다른 시간을 제안하세요."],
      ["You lost something at a cafe. Explain and ask for help.", "카페에서 물건을 잃어버렸습니다. 설명하고 도움을 요청하세요."],
      ["Your order is wrong. Explain the problem and ask for help.", "주문이 잘못됐습니다. 설명하고 도움을 요청하세요."],
      ["You cannot go to work on time. Explain the problem.", "제시간에 출근할 수 없습니다. 문제를 설명하세요."],
      ["You need to cancel a plan. Explain and apologize.", "계획을 취소해야 합니다. 설명하고 사과하세요."],
      ["You have a problem with a ticket. Explain and ask for help.", "티켓에 문제가 있습니다. 설명하고 도움을 요청하세요."],
      ["You cannot use a service. Explain and ask what to do.", "서비스를 사용할 수 없습니다. 설명하고 어떻게 해야 하는지 물어보세요."]
    ],
    answer: [
      ["Hello, I am sorry.", "헬로, 아이 앰 쏘리."],
      ["There is a problem.", "데어 이즈 어 프라블럼."],
      ["I cannot go there today.", "아이 캐낫 고 데어 투데이."],
      ["I have to work late.", "아이 해브 투 워크 레이트."],
      ["Can I change the time?", "캔 아이 체인지 더 타임?"],
      ["Thank you for your help.", "땡큐 포 유어 헬프."]
    ]
  },
  {
    id: "unexpected",
    label: "돌발",
    title: "돌발 질문 버티기",
    goal: "잘 모르는 질문도 아는 경험으로 연결한다.",
    questions: [
      ["Tell me about a problem you had while studying English.", "영어 공부 중 겪은 문제에 대해 말해주세요."],
      ["Tell me about a problem you had at a park.", "공원에서 겪은 문제에 대해 말해주세요."],
      ["Tell me about a time when your plan changed.", "계획이 바뀌었던 때를 말해주세요."],
      ["Tell me about a difficult experience after work.", "퇴근 후 힘들었던 경험을 말해주세요."],
      ["Tell me about something you do to relax.", "쉬기 위해 하는 일을 말해주세요."],
      ["Tell me about a time when you were very tired.", "매우 피곤했던 때에 대해 말해주세요."],
      ["Tell me about a time when you could not do something.", "무언가를 할 수 없었던 때를 말해주세요."],
      ["Tell me about a small mistake you made.", "작은 실수를 했던 때를 말해주세요."],
      ["Tell me about an unexpected event.", "예상하지 못한 일에 대해 말해주세요."],
      ["Tell me about a time when you needed help.", "도움이 필요했던 때에 대해 말해주세요."],
      ["Tell me about a stressful day.", "스트레스 받았던 하루를 말해주세요."],
      ["Tell me about a time when you solved a problem.", "문제를 해결했던 때를 말해주세요."]
    ],
    answer: [
      ["That is an interesting question.", "댓 이즈 언 인터레스팅 퀘스천."],
      ["I am not sure, but I will try.", "아이 앰 낫 슈어, 벗 아이 윌 트라이."],
      ["I had a small problem last week.", "아이 해드 어 스몰 프라블럼 래스트 위크."],
      ["I was tired after work.", "아이 워즈 타이어드 애프터 워크."],
      ["So I went to a park near my home.", "쏘 아이 웬트 투 어 파크 니어 마이 홈."],
      ["I walked there and listened to music.", "아이 워크트 데어 앤 리슨드 투 뮤직."],
      ["It helped me relax.", "잇 헬프트 미 릴랙스."]
    ]
  },
  {
    id: "opinion",
    label: "의견",
    title: "선호/이유",
    goal: "좋아하는 것과 이유를 짧게 말한다.",
    questions: [
      ["Why do you like walking in the park?", "왜 공원 걷기를 좋아하나요?"],
      ["Why do you like playing games?", "왜 게임하는 것을 좋아하나요?"],
      ["Which do you prefer, staying home or going outside?", "집에 있는 것과 밖에 나가는 것 중 무엇을 더 좋아하나요?"],
      ["What is your favorite way to relax?", "가장 좋아하는 휴식 방법은 무엇인가요?"],
      ["Do you prefer studying alone or with other people?", "혼자 공부하는 것과 다른 사람과 공부하는 것 중 무엇을 선호하나요?"],
      ["Why do you like quiet places?", "왜 조용한 장소를 좋아하나요?"],
      ["Do you like weekdays or weekends more?", "평일과 주말 중 무엇을 더 좋아하나요?"],
      ["What kind of place do you like?", "어떤 종류의 장소를 좋아하나요?"],
      ["Why is free time important to you?", "여가 시간이 왜 중요하나요?"],
      ["Do you prefer coffee shops or parks?", "카페와 공원 중 무엇을 선호하나요?"],
      ["What makes you happy these days?", "요즘 무엇이 당신을 행복하게 하나요?"],
      ["What is important when you study English?", "영어 공부할 때 무엇이 중요한가요?"]
    ],
    answer: [
      ["I like walking in the park.", "아이 라이크 워킹 인 더 파크."],
      ["It is one of my hobbies.", "잇 이즈 원 어브 마이 하비즈."],
      ["The park is quiet and clean.", "더 파크 이즈 콰이엇 앤 클린."],
      ["I can walk there after work.", "아이 캔 워크 데어 애프터 워크."],
      ["It is easy and comfortable.", "잇 이즈 이지 앤 컴퍼터블."],
      ["It helps me relax.", "잇 헬프스 미 릴랙스."],
      ["So I like it very much.", "쏘 아이 라이크 잇 베리 머치."]
    ]
  },
  {
    id: "escape",
    label: "위기탈출",
    title: "아무 생각 안 날 때",
    goal: "질문을 못 알아들어도 침묵하지 않고 아는 경험으로 연결한다.",
    questions: [
      ["Use this when you do not understand the question.", "질문을 이해하지 못했을 때 사용하세요."],
      ["Use this when you cannot think of an answer.", "답변이 생각나지 않을 때 사용하세요."],
      ["Use this when the topic is too difficult.", "주제가 너무 어려울 때 사용하세요."],
      ["Use this when you need time to answer.", "답변할 시간이 필요할 때 사용하세요."],
      ["Use this when you want to talk about your experience.", "내 경험으로 연결하고 싶을 때 사용하세요."],
      ["Use this when you are nervous.", "긴장했을 때 사용하세요."],
      ["Use this when you know only a little about the topic.", "주제에 대해 조금만 알 때 사용하세요."],
      ["Use this when you want to avoid silence.", "침묵을 피하고 싶을 때 사용하세요."]
    ],
    answer: [
      ["That is an interesting question.", "댓 이즈 언 인터레스팅 퀘스천."],
      ["I am not sure, but I will try.", "아이 앰 낫 슈어, 벗 아이 윌 트라이."],
      ["I do not know much about it.", "아이 두 낫 노우 머치 어바웃 잇."],
      ["But I can talk about my experience.", "벗 아이 캔 토크 어바웃 마이 익스피리언스."],
      ["These days, I study English after work.", "디즈 데이즈, 아이 스터디 잉글리시 애프터 워크."],
      ["Whenever I have free time, I go to a park.", "웬에버 아이 해브 프리 타임, 아이 고 투 어 파크."],
      ["It helps me relax.", "잇 헬프스 미 릴랙스."]
    ]
  }
];

let activeType = questionTypes[0].id;
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

function createLine([english, sound]) {
  const row = el("div", "script-line");
  row.append(el("strong", null, english), el("span", null, sound));
  return row;
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getActiveType() {
  return questionTypes.find((type) => type.id === activeType) || questionTypes[0];
}

function renderTabs() {
  const wrap = document.querySelector("#typeTabs");
  wrap.innerHTML = "";

  questionTypes.forEach((type) => {
    const button = el("button", `segment-button${activeType === type.id ? " active" : ""}`, type.label);
    button.type = "button";
    button.addEventListener("click", () => {
      activeType = type.id;
      renderTabs();
      renderScripts();
    });
    wrap.append(button);
  });
}

function renderScripts() {
  const wrap = document.querySelector("#scriptBoard");
  wrap.innerHTML = "";
  const type = getActiveType();
  const card = el("article", "script-item wide");
  card.append(el("p", "eyebrow", type.label), el("h3", null, type.title), el("p", "muted", type.goal));

  const questionList = el("div", "question-list");
  shuffle(type.questions)
    .slice(0, 5)
    .forEach(([question, ko]) => {
      const questionRow = el("p", "mini-question");
      questionRow.append(el("strong", null, question), el("span", null, ko));
      questionList.append(questionRow);
    });

  const lines = el("div", "script-lines");
  type.answer.forEach((line) => lines.append(createLine(line)));
  card.append(questionList, lines);
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
  const type = pickRandom(questionTypes);
  const question = pickRandom(type.questions);
  currentPractice = { type, question };
  remainingSeconds = 60;
  isPracticing = true;

  const button = document.querySelector("#practiceButton");
  button.textContent = "종료";
  button.classList.add("danger-button");

  document.querySelector("#practiceResult").classList.add("hidden");
  document.querySelector("#practiceState").textContent = "말하는 중";
  document.querySelector("#practiceQuestion").textContent = question[0];
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
  const { type, question } = currentPractice;
  document.querySelector("#practiceState").textContent = "답변 확인";
  document.querySelector("#practiceGuide").textContent = "답변을 보면서 같은 표현을 다시 소리 내서 읽으세요.";
  document.querySelector("#resultType").textContent = `${type.label} - ${type.title}`;
  document.querySelector("#resultQuestionKo").textContent = question[1];

  const answer = document.querySelector("#resultAnswer");
  answer.innerHTML = "";
  type.answer.forEach((line) => answer.append(createLine(line)));
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

document.querySelector("#practiceButton").addEventListener("click", handlePracticeButton);

renderTabs();
renderScripts();
updateTimer();
bindNav();

const activities = [

/* ===========================================================
   1–10 MINI PROJECT PLANNING
=========================================================== */

{
question:"Complete:",
prompt:"I am ___ developer.",
type:"input",
answers:["a"]
},

{
question:"Complete:",
prompt:"This is ___ project.",
type:"input",
answers:["the"]
},

{
question:"Choose:",
prompt:"Correct sentence:",
type:"choice",
options:[
"I am creating a game.",
"I creating a game.",
"I am create a game."
],
answer:"I am creating a game."
},

{
question:"Complete:",
prompt:"These ___ my files.",
type:"input",
answers:["are"]
},

{
question:"Choose:",
prompt:"Correct:",
type:"choice",
options:[
"Those are my images.",
"Those is my images.",
"That are my images."
],
answer:"Those are my images."
},

{
question:"Translate:",
prompt:"This is my first project.",
type:"choice",
options:[
"Aquele é meu primeiro projeto.",
"Este é meu primeiro projeto.",
"Este é meu computador."
],
answer:"Este é meu primeiro projeto."
},

{
question:"Translate:",
prompt:"Those are my ideas.",
type:"choice",
options:[
"Estas são minhas ideias.",
"Aquilo é minha ideia.",
"Aquelas são minhas ideias."
],
answer:"Aquelas são minhas ideias."
},

{
question:"Complete:",
prompt:"I am learning ___.",
type:"choice",
options:[
"programming",
"banana",
"window"
],
answer:"programming"
},

{
question:"Choose:",
prompt:"Correct article:",
type:"choice",
options:[
"a computer",
"an computer",
"the computer is apple"
],
answer:"a computer"
},

{
question:"Complete:",
prompt:"___ internet is important.",
type:"input",
answers:["the"]
},

/* ===========================================================
11–20 ARTICLES + VOCABULARY
=========================================================== */

{
question:"Choose:",
prompt:"Correct:",
type:"choice",
options:[
"a application",
"the application",
"an application"
],
answer:"an application"
},

{
question:"Choose:",
prompt:"Correct:",
type:"choice",
options:[
"an keyboard",
"a keyboard",
"the keyboard"
],
answer:"a keyboard"
},

{
question:"Translate:",
prompt:"The project is ready.",
type:"choice",
options:[
"O projeto está pronto.",
"O computador está pronto.",
"O código acabou."
],
answer:"O projeto está pronto."
},

{
question:"Complete:",
prompt:"I have ___ idea.",
type:"input",
answers:["an"]
},

{
question:"Choose:",
prompt:"Correct:",
type:"choice",
options:[
"This is a image.",
"This an image.",
"This is an image."
],
answer:"This is an image."
},

{
question:"Translate:",
prompt:"These are the files.",
type:"choice",
options:[
"Estes são os arquivos.",
"Estas são imagens.",
"Aqueles são arquivos."
],
answer:"Estes são os arquivos."
},

{
question:"Complete:",
prompt:"Those are ___ computers.",
type:"input",
answers:["the"]
},

{
question:"Choose:",
prompt:"Correct:",
type:"choice",
options:[
"Browser the open.",
"The browser open is.",
"The browser is open."
],
answer:"The browser is open."
},

{
question:"Translate:",
prompt:"An error happened.",
type:"choice",
options:[
"Um computador apareceu.",
"Um erro aconteceu.",
"O erro terminou."
],
answer:"Um erro aconteceu."
},

{
question:"Complete:",
prompt:"I am using ___ editor.",
type:"input",
answers:["an"]
},

/* ===========================================================
21–30 READING COMPREHENSION
=========================================================== */

{
question:"Reading:",
prompt:"The student is creating a website.",
type:"choice",
options:[
"O estudante está estudando matemática.",
"O estudante está criando um site.",
"O professor criou um computador."
],
answer:"O estudante está criando um site."
},

{
question:"Reading:",
prompt:"These are the pages.",
type:"choice",
options:[
"Estas são as páginas.",
"Essas são mesas.",
"Aquelas são janelas."
],
answer:"Estas são as páginas."
},

{
question:"Reading:",
prompt:"Those are the users.",
type:"choice",
options:[
"Estes são professores.",
"Aqueles são livros.",
"Aqueles são os usuários."
],
answer:"Aqueles são os usuários."
},

{
question:"Complete:",
prompt:"The project ___ finished.",
type:"input",
answers:["is"]
},

{
question:"Complete:",
prompt:"These ___ examples.",
type:"input",
answers:["are"]
},

{
question:"Translate:",
prompt:"I am presenting my project.",
type:"choice",
options:[
"Estou apresentando meu projeto.",
"Estou iniciando meu computador.",
"Estou estudando inglês."
],
answer:"Estou apresentando meu projeto."
},

{
question:"Choose:",
prompt:"Correct:",
type:"choice",
options:[
"The application is working.",
"The application are working.",
"Application the working."
],
answer:"The application is working."
},

{
question:"Complete:",
prompt:"That ___ my website.",
type:"input",
answers:["is"]
},

{
question:"Translate:",
prompt:"These are my classmates.",
type:"choice",
options:[
"Aqueles são meus professores.",
"Estas são minhas cadeiras.",
"Estes são meus colegas."
],
answer:"Estes são meus colegas."
},

{
question:"Choose:",
prompt:"Correct:",
type:"choice",
options:[
"I this like project.",
"I like this project.",
"Like I project."
],
answer:"I like this project."
},
/* ===========================================================
31–40 LISTENING
=========================================================== */

{
question:"Listening – Ouça:",
audio:"This is my project.",
type:"choice",
options:[
"That is my project.",
"This is my project.",
"This is project my."
],
answer:"This is my project."
},

{
question:"Listening – Ouça:",
audio:"These are my files.",
type:"choice",
options:[
"These are my files.",
"Those are my files.",
"This is my files."
],
answer:"These are my files."
},

{
question:"Listening – Ouça:",
audio:"The browser is open.",
type:"choice",
options:[
"The browser is open.",
"The browser are open.",
"Browser the is open."
],
answer:"The browser is open."
},

{
question:"Listening – Ouça:",
audio:"I am creating an application.",
type:"choice",
options:[
"I creating an application.",
"I am creating a application.",
"I am creating an application."
],
answer:"I am creating an application."
},

{
question:"Listening – Ouça:",
audio:"Those are the users.",
type:"choice",
options:[
"These are the users.",
"Those are the users.",
"That are the users."
],
answer:"Those are the users."
},

{
question:"Listening – Ouça:",
audio:"This is an image.",
type:"choice",
options:[
"This is a image.",
"These is an image.",
"This is an image."
],
answer:"This is an image."
},

{
question:"Listening – Ouça:",
audio:"The project is finished.",
type:"choice",
options:[
"The project is finished.",
"The projects are finished.",
"Project is the finished."
],
answer:"The project is finished."
},

{
question:"Listening – Ouça:",
audio:"I like this website.",
type:"choice",
options:[
"I like this website.",
"I like those website.",
"I this like website."
],
answer:"I like this website."
},

{
question:"Listening – Ouça:",
audio:"These are my classmates.",
type:"choice",
options:[
"Those is my classmates.",
"This are classmates.",
"These are my classmates.",
],
answer:"These are my classmates."
},

{
question:"Listening – Ouça:",
audio:"That is the computer.",
type:"choice",
options:[
"This is the computer.",
"That is the computer.",
"Those is computer."
],
answer:"That is the computer."
},

/* ===========================================================
41–50 SPEAKING
=========================================================== */

{
question:"Speaking – Say:",
prompt:"This is my project.",
type:"speech",
answers:["this is my project"]
},

{
question:"Speaking – Say:",
prompt:"These are my files.",
type:"speech",
answers:["these are my files"]
},

{
question:"Speaking – Say:",
prompt:"Those are my ideas.",
type:"speech",
answers:["those are my ideas"]
},

{
question:"Speaking – Say:",
prompt:"The browser is open.",
type:"speech",
answers:["the browser is open"]
},

{
question:"Speaking – Say:",
prompt:"I am creating an application.",
type:"speech",
answers:["i am creating an application"]
},

{
question:"Speaking – Say:",
prompt:"This is an image.",
type:"speech",
answers:["this is an image"]
},

{
question:"Speaking – Say:",
prompt:"I like this project.",
type:"speech",
answers:["i like this project"]
},

{
question:"Speaking – Say:",
prompt:"The project is ready.",
type:"speech",
answers:["the project is ready"]
},

{
question:"Speaking – Say:",
prompt:"These are the pages.",
type:"speech",
answers:["these are the pages"]
},

{
question:"Speaking – Say:",
prompt:"That is my website.",
type:"speech",
answers:["that is my website"]
},
/* ===========================================================
51–60 WRITING
=========================================================== */

{
question:"Escreva em inglês:",
prompt:"Este é meu projeto.",
type:"input",
answers:["this is my project"]
},

{
question:"Escreva em inglês:",
prompt:"Estas são minhas imagens.",
type:"input",
answers:["these are my images"]
},

{
question:"Escreva em inglês:",
prompt:"Aqueles são meus arquivos.",
type:"input",
answers:["those are my files"]
},

{
question:"Escreva em inglês:",
prompt:"O navegador está aberto.",
type:"input",
answers:["the browser is open"]
},

{
question:"Escreva em inglês:",
prompt:"Eu estou criando um aplicativo.",
type:"input",
answers:["i am creating an application"]
},

{
question:"Escreva em inglês:",
prompt:"Esta é uma imagem.",
type:"input",
answers:["this is an image"]
},

{
question:"Escreva em inglês:",
prompt:"O projeto está pronto.",
type:"input",
answers:["the project is ready"]
},

{
question:"Escreva em inglês:",
prompt:"Eu gosto deste projeto.",
type:"input",
answers:["i like this project"]
},

{
question:"Escreva em inglês:",
prompt:"Estas são as páginas.",
type:"input",
answers:["these are the pages"]
},

{
question:"Escreva em inglês:",
prompt:"Aquele é meu site.",
type:"input",
answers:["that is my website"]
},

/* ===========================================================
61–70 MIXED REVIEW
=========================================================== */

{
question:"Choose:",
prompt:"Complete: ___ is my keyboard.",
type:"choice",
options:[
"This",
"These",
"Those"
],
answer:"This"
},

{
question:"Choose:",
prompt:"Complete: ___ are my computers.",
type:"choice",
options:[
"This",
"These",
"That"
],
answer:"These"
},

{
question:"Choose:",
prompt:"Complete: ___ is an editor.",
type:"choice",
options:[
"This",
"These",
"Those"
],
answer:"This"
},

{
question:"Choose:",
prompt:"Correct article:",
type:"choice",
options:[
"a editor",
"the editor an",
"an editor"
],
answer:"an editor"
},

{
question:"Choose:",
prompt:"Correct article:",
type:"choice",
options:[
"a browser",
"an browser",
"the browser a"
],
answer:"a browser"
},

{
question:"Translate:",
prompt:"These are the users.",
type:"choice",
options:[
"Estes são os usuários.",
"Aqueles são os usuários.",
"Este é o usuário."
],
answer:"Estes são os usuários."
},

{
question:"Translate:",
prompt:"The application is working.",
type:"choice",
options:[
"O aplicativo terminou.",
"O computador está desligado.",
"O aplicativo está funcionando."
],
answer:"O aplicativo está funcionando."
},

{
question:"Complete:",
prompt:"I have ___ computer.",
type:"input",
answers:["a"]
},

{
question:"Complete:",
prompt:"I have ___ idea.",
type:"input",
answers:["an"]
},

{
question:"Complete:",
prompt:"___ internet is very useful.",
type:"input",
answers:["the"]
},
/* ===========================================================
71–75 FINAL MISSION
=========================================================== */

{
question:"Mission:",
prompt:"Escreva uma pequena apresentação (4 frases) sobre você e um projeto usando THIS, THESE, A/AN/THE. : Eu sou estudante. Este é o meu projeto. Estes são os meus arquivos. O projeto está pronto.",
type:"textarea",
answers:[
"i am a student this is my project these are my files the project is ready"
]
},

{
question:"Mission – Speaking:",
prompt:"I am a student. This is my project. These are my files.",
type:"speech",
answers:[
"i am a student this is my project these are my files"
]
},

{
question:"Mission – Speaking:",
prompt:"That is my website. The application is working.",
type:"speech",
answers:[
"that is my website the application is working"
]
},

{
question:"Final Review:",
prompt:"Choose the correct sentence:",
type:"choice",
options:[
"These are my computers.",
"These is my computers.",
"This are my computers."
],
answer:"These are my computers."
},

{
question:"🎉 Final Challenge:",
prompt:"Choose the best presentation:",
type:"choice",
options:[
"I developer am. This project my is. Files these my.",
"I am developer. This are project. Those is files.",
"I am a developer. This is my project. These are my files. The project is ready."
],
answer:"I am a developer. This is my project. These are my files. The project is ready."
}

];

let index = 0;
let spokenResult = "";

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";

function normalize(text){
  return text
    .toLowerCase()
    .trim()
    .replace(/\n/g," ")
    .replace(/\s+/g," ")
    .replace(/[.,!?]/g,"");
}

function speak(text){
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  speechSynthesis.speak(u);
}

function loadActivity(){

  const a = activities[index];

  document.getElementById("question").innerText = `📝 ${a.question}`;
  document.getElementById("prompt").innerText = a.prompt || "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("feedback").className = "feedback";
  document.getElementById("nextBtn").disabled = true;

  const area = document.getElementById("input-area");
  area.innerHTML = "";

  if(a.audio){
    const btn=document.createElement("button");
    btn.innerText="🔊 Ouvir áudio";
    btn.onclick=()=>speak(a.audio);
    area.appendChild(btn);
  }

  if(a.type==="input"){
    const input=document.createElement("input");
    input.placeholder="Digite sua resposta...";
    input.oninput=()=>checkAnswer(input.value);
    area.appendChild(input);
  }

  if(a.type==="textarea"){
    const ta=document.createElement("textarea");
    ta.placeholder="Escreva sua resposta...";
    ta.oninput=()=>checkAnswer(ta.value);
    area.appendChild(ta);
  }

  if(a.type==="choice"){
    const div=document.createElement("div");
    div.className="options";

    a.options.forEach(opt=>{
      const b=document.createElement("button");
      b.className="secondary";
      b.innerText=opt;
      b.onclick=()=>checkAnswer(opt);
      div.appendChild(b);
    });

    area.appendChild(div);
  }

  if(a.type==="speech"){
    const btn=document.createElement("button");
    btn.innerText="🎙️ Gravar fala";

    btn.onclick=()=>{
      recognition.start();

      recognition.onresult=(e)=>{
        spokenResult=normalize(e.results[0][0].transcript);
        checkAnswer(spokenResult);
      };
    };

    area.appendChild(btn);
  }

  document.getElementById("progress").innerText =
    `Atividade ${index+1} de ${activities.length}`;

}

function checkAnswer(answer){

  const a=activities[index];
  let correct=false;

  if(a.type==="input"){
    correct=a.answers.includes(normalize(answer));
  }

  if(a.type==="textarea"){
    const text=normalize(answer);

    correct=a.answers.some(model=>{
      const words=normalize(model).split(" ");
      let hits=0;

      words.forEach(w=>{
        if(text.includes(w)) hits++;
      });

      return hits>=Math.max(8,Math.floor(words.length*0.7));
    });
  }

  if(a.type==="choice"){
    correct=(answer===a.answer);
  }

  if(a.type==="speech"){
    correct=a.answers
      .map(normalize)
      .includes(answer);
  }

  const fb=document.getElementById("feedback");

  if(correct){
    fb.innerHTML="✅ Muito bem! Pode avançar.";
    fb.className="feedback success";
    document.getElementById("nextBtn").disabled=false;
  }else{
    fb.innerHTML="❌ Ainda não. Revise o conteúdo e tente novamente.";
    fb.className="feedback error";
  }

}

function nextActivity(){

  index++;

  if(index<activities.length){

    loadActivity();

  }else{

    document.querySelector(".card").innerHTML=`

      <h1>🎉 Parabéns!</h1>

      <p>Você concluiu a <strong>Aula 9 – Mini Project</strong>.</p>

      <p>Agora você consegue:</p>

      <ul style="text-align:left;line-height:1.8;">
        <li>✅ Usar <strong>this / that / these / those</strong></li>
        <li>✅ Escolher corretamente <strong>a / an / the</strong></li>
        <li>✅ Escrever pequenas apresentações</li>
        <li>✅ Traduzir frases simples</li>
        <li>✅ Fazer uma apresentação curta em inglês</li>
        <li>✅ Utilizar vocabulário básico de tecnologia</li>
      </ul>

      <button onclick="window.location.href='mod1.html'">
      Voltar ao Módulo 1
      </button>

    `;
  }

}

loadActivity();
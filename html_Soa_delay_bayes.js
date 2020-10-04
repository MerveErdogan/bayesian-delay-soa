/************************ 
 * Soa_Delay_Bayes Test *
 ************************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Soa_delay_bayes';  // from the Builder filename that created this script
let expInfo = {'Katilimci Numarasi (Kendi belirlediginiz 6 haneli sayiyi giriniz.)': '', 'Seans': '001', 'Cinsiyet': '', 'Yas': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(ConsentRoutineBegin());
flowScheduler.add(ConsentRoutineEachFrame());
flowScheduler.add(ConsentRoutineEnd());
flowScheduler.add(Consent2RoutineBegin());
flowScheduler.add(Consent2RoutineEachFrame());
flowScheduler.add(Consent2RoutineEnd());
flowScheduler.add(Consent3RoutineBegin());
flowScheduler.add(Consent3RoutineEachFrame());
flowScheduler.add(Consent3RoutineEnd());
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
flowScheduler.add(instruction2RoutineBegin());
flowScheduler.add(instruction2RoutineEachFrame());
flowScheduler.add(instruction2RoutineEnd());
flowScheduler.add(trial_begRoutineBegin());
flowScheduler.add(trial_begRoutineEachFrame());
flowScheduler.add(trial_begRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin, blocksLoopScheduler);
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var ConsentClock;
var Consent_form;
var Consent_resp;
var Consent2Clock;
var Consent_text2;
var Consent_resp2;
var Consent3Clock;
var Consent_text3;
var Consent_resp3;
var instructionClock;
var briefing;
var key_resp;
var instruction2Clock;
var inst_text2;
var inst2_resp;
var trial_begClock;
var begin;
var trialClock;
var fix_dur;
var f;
var a;
var counteksik;
var fixation;
var key_press;
var key_start;
var outcomeClock;
var compcircle;
var text;
var circle;
var testClock;
var text_2;
var slider;
var ending_slider;
var Blok_breakClock;
var count;
var Break;
var break_resp;
var endClock;
var thanks;
var globalClock;
var routineTimer;
var group = new Array(1,2,3);

function experimentInit() {
  // Initialize components for Routine "Consent"
  ConsentClock = new util.Clock();
  Consent_form = new visual.TextStim({
    win: psychoJS.window,
    name: 'Consent_form',
    text: 'AYDINLATILMIŞ ONAM FORMU\n\nKoç Üniversitesi Psikoloji Bölümü öğretim üyesi Prof. Dr. Fuat Balcı yönetiminde yüksek lisans öğrencisi Merve Erdoğan tarafından\naksiyon alma hissi konusunda yürütülen araştırmaya katılımınız rica olunmaktadır. Bu çalışmada katılımınız tamamen gönüllülük esasına dayanır. \n\nÇALIŞMANIN ADI: Göreceli Zaman ve Aksiyonda Sebebiyet \n\nÇALIŞMANIN AMACI\nKoç Üniversitesi tarafından yürütülen bu çalışmanın amacı, aksiyon alma hissini kontrol eden bilişsel mekanizmayı araştırmaktır.\n\nPROSEDÜRLER\nBu çalışmaya gönüllü katılmak istemeniz halinde yürütülecek çalışmalar şöyledir;\nDeneyin ne kadar süreceği size bağlı olmakla birlikte yaklaşık 15 dakika sürmesi tahmin edilen, bilgisayar üzerinde yapılacak olan bir davranış deneyine katılmanız beklenmektedir.\nSizden bir tuşa basmanız ve sonrasında oluşan görsele sizin sebep olup olmadığınıza dair hissinizi değerlendirmeniz istenmektedir.\n\nOnam formunun devamı için herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Consent_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Consent2"
  Consent2Clock = new util.Clock();
  Consent_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Consent_text2',
    text: 'OLASI RİSKLER VE RAHATSIZLIKLAR\nDeneyin risk ya da rahatsızlığı yoktur.\nDeney Koç Üniversitesi etik kurulu tarafından onaylanmıştır.\n\nTOPLUMA VE/VEYA DENEKLERE OLASI FAYDALARI\nBu çalışmanın amacı aksiyon alma hissini kontrol eden bilişsel mekanizmayı ve etkileyen faktörleri araştırmaktır. Çalışmanın sonuçları, bu mekanizma hakkında topluma bilgi sağlayacaktır.\n\nGİZLİLİK\nBu çalışmayla bağlantılı olarak elde edilen ve sizinle özdeşleşmiş her bilgi gizli kalacak, kişilerle paylaşılmayacak ve yalnızca sizin izniniz veya\nkanunun gerektirdiği ölçüde ifşa edilecektir. Gizlilik tanımlanmış bir\nkodlama prosedürüyle sağlanacak ve kod çözümüne erişim yalnızca çalışmanın sorumlusu araştırmacıyla sınırlı kalacaktır.\nTüm veriler, sınırlı erişime sahip güvenli ve şifreli bir veri tabanında tutulacaktır.\n\nOnam formunun devamı için herhangi bir tuşa basınız.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Consent_resp2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Consent3"
  Consent3Clock = new util.Clock();
  Consent_text3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Consent_text3',
    text: 'KATILIM VE AYRILMA\nBu çalışmanın içinde olmak isteyip istemediğinize tamamı ile bağımsız ve etki altında kalmadan karar verebilirsiniz.Çalışmadan çekilmek isterseniz bir cezası yoktur ve sahip olduğunuz faydaları kaybetmezsiniz.\n\nARAŞTIRMACILARIN KİMLİĞİ\nBu araştırma ile ilgili herhangi bir sorunuz veya endişeniz varsa,\nlütfen iletişime geçiniz:\nProf. Dr. Fuat Balcı\nKoç Üniversitesi\nT: 0212 338 1138\nE: fbalci@ku.edu.tr\nMerve Erdoğan\nKoç Üniversitesi\nE: merdogan19@ku.edu.tr\n\nYukarıda açıklanan prosedürleri anladım. Sorularım tatmin olacağım şekilde yanıtlandı ve dilediğim zaman ayrılma hakkım\nsaklı kalmak koşulu ile bu çalışmaya katılmayı onaylıyorum diyorsanız ‘e’ tuşuna, deneyden çekilmek için ‘h’ tuşuna basınız.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Consent_resp3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  briefing = new visual.TextStim({
    win: psychoJS.window,
    name: 'briefing',
    text: 'Merhaba! \nBu deneyde sizden her denemede istediginiz herhangi bir an SPACE tuşuna basmanız istenmektedir. \n\nTuşa basış bazı denemelerde bir topun oluşmasına sebep olmakta bazılarında olmamaktadır.\n\nBazı denemelerde ise bilgisayar kendiliğinden topu oluşturmaktadır.\n\n\nDevam etmek için lütfen herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction2"
  instruction2Clock = new util.Clock();
  inst_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_text2',
    text: 'Sizden istenen topun oluşmasına sizin tuşa basışınızın sebep olup olmadığına dair hissinizi değerlendirmeniz.\n\nEğer siz daha tuşa basış yapmadan bilgisayar topu üretmişse, değerlendirmede "Hiç"i işaretleyiniz.\n\n\nHazırsanız deneye başlamak için herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  inst2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_beg"
  trial_begClock = new util.Clock();
  begin = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin',
    text: 'Ekranda + işareti olduğu sürece ona bakınız.\n\nİşaret ekrandan gittikten ve tuşa basabileceğinizi belirten yazı çıktıktan SONRA\n\nistediğiniz herhangi bir an SPACE tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
    
  
    
    function shuffle(group) {
    var j, x, i;
    for (i = group.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = group[i];
      group[i] = group[j];
      group[j] = x;
   }
    return group;
   }
// and shuffle it
    shuffle(group) 
    
    
    a = [];
  
  for (var m = 10, _pj_a = 45; (m < _pj_a); m += 1) {
      a.push((m / 10));
  }

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

// and shuffle it
shuffle(a) 
  
  a[0] = 0.6;
  a[1] = 3.5;
  
  
  fix_dur = [];
  for (var m = 5, _pj_a = 15; (m < _pj_a); m += 0.1) {
      fix_dur.push((m / 10));
  }
  
function shuffle(fix_dur) {
    var j, x, i;
    for (i = fix_dur.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = fix_dur[i];
      fix_dur[i] = fix_dur[j];
      fix_dur[j] = x;
  }
  return fix_dur;
}
  
  shuffle(fix_dur);
 
 
  f = 0;
  counteksik = 0;
  
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.09,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_start = new visual.TextStim({
    win: psychoJS.window,
    name: 'key_start',
    text: 'İstediğiniz an tuşa basabilirsiniz.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "outcome"
  outcomeClock = new util.Clock();
  compcircle = 0;
  
  

    
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'İstediğiniz an tuşa basabilirsiniz.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  circle = new visual.Polygon ({
    win: psychoJS.window, name: 'circle', 
    edges: 100, size:[0.12, 0.12],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Topun oluşmasına ne kadar sizin tuşa basmanızın sebep olduğunu hissettiniz?\nAşağıda işaretleyin ve <Enter> tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    size: [1.0, 0.1], pos: [0, (- 0.25)], units: 'height',
    labels: ['Hic', 'Tamamen'], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  ending_slider = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blok_break"
  Blok_breakClock = new util.Clock();
  count = 0;
  
  Break = new visual.TextStim({
    win: psychoJS.window,
    name: 'Break',
    text: '1. blok bitti.\n\n2. bloğa devam etmek için herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  break_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks',
    text: 'Deney bitti. Katılımınız için teşekkürler!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _Consent_resp_allKeys;
var ConsentComponents;
function ConsentRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Consent'-------
    t = 0;
    ConsentClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Consent_resp.keys = undefined;
    Consent_resp.rt = undefined;
    _Consent_resp_allKeys = [];
    // keep track of which components have finished
    ConsentComponents = [];
    ConsentComponents.push(Consent_form);
    ConsentComponents.push(Consent_resp);
    
    for (const thisComponent of ConsentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function ConsentRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Consent'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ConsentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Consent_form* updates
    if (t >= 0.0 && Consent_form.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_form.tStart = t;  // (not accounting for frame time here)
      Consent_form.frameNStart = frameN;  // exact frame index
      
      Consent_form.setAutoDraw(true);
    }

    
    // *Consent_resp* updates
    if (t >= 0.0 && Consent_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_resp.tStart = t;  // (not accounting for frame time here)
      Consent_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Consent_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Consent_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Consent_resp.clearEvents(); });
    }

    if (Consent_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Consent_resp.getKeys({keyList: [], waitRelease: false});
      _Consent_resp_allKeys = _Consent_resp_allKeys.concat(theseKeys);
      if (_Consent_resp_allKeys.length > 0) {
        Consent_resp.keys = _Consent_resp_allKeys[_Consent_resp_allKeys.length - 1].name;  // just the last key pressed
        Consent_resp.rt = _Consent_resp_allKeys[_Consent_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ConsentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ConsentRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Consent'-------
    for (const thisComponent of ConsentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Consent_resp2_allKeys;
var Consent2Components;
function Consent2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Consent2'-------
    t = 0;
    Consent2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Consent_resp2.keys = undefined;
    Consent_resp2.rt = undefined;
    _Consent_resp2_allKeys = [];
    // keep track of which components have finished
    Consent2Components = [];
    Consent2Components.push(Consent_text2);
    Consent2Components.push(Consent_resp2);
    
    for (const thisComponent of Consent2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Consent2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Consent2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Consent2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Consent_text2* updates
    if (t >= 0.0 && Consent_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_text2.tStart = t;  // (not accounting for frame time here)
      Consent_text2.frameNStart = frameN;  // exact frame index
      
      Consent_text2.setAutoDraw(true);
    }

    
    // *Consent_resp2* updates
    if (t >= 0.0 && Consent_resp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_resp2.tStart = t;  // (not accounting for frame time here)
      Consent_resp2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Consent_resp2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Consent_resp2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Consent_resp2.clearEvents(); });
    }

    if (Consent_resp2.status === PsychoJS.Status.STARTED) {
      let theseKeys = Consent_resp2.getKeys({keyList: [], waitRelease: false});
      _Consent_resp2_allKeys = _Consent_resp2_allKeys.concat(theseKeys);
      if (_Consent_resp2_allKeys.length > 0) {
        Consent_resp2.keys = _Consent_resp2_allKeys[_Consent_resp2_allKeys.length - 1].name;  // just the last key pressed
        Consent_resp2.rt = _Consent_resp2_allKeys[_Consent_resp2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Consent2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Consent2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Consent2'-------
    for (const thisComponent of Consent2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Consent2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Consent_resp3_allKeys;
var Consent3Components;
function Consent3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Consent3'-------
    t = 0;
    Consent3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Consent_resp3.keys = undefined;
    Consent_resp3.rt = undefined;
    _Consent_resp3_allKeys = [];
    // keep track of which components have finished
    Consent3Components = [];
    Consent3Components.push(Consent_text3);
    Consent3Components.push(Consent_resp3);
    
    for (const thisComponent of Consent3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Consent3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Consent3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Consent3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Consent_text3* updates
    if (t >= 0.0 && Consent_text3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_text3.tStart = t;  // (not accounting for frame time here)
      Consent_text3.frameNStart = frameN;  // exact frame index
      
      Consent_text3.setAutoDraw(true);
    }

    
    // *Consent_resp3* updates
    if (t >= 0.0 && Consent_resp3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_resp3.tStart = t;  // (not accounting for frame time here)
      Consent_resp3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Consent_resp3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Consent_resp3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Consent_resp3.clearEvents(); });
    }

    if (Consent_resp3.status === PsychoJS.Status.STARTED) {
      let theseKeys = Consent_resp3.getKeys({keyList: ['e', 'h'], waitRelease: false});
      _Consent_resp3_allKeys = _Consent_resp3_allKeys.concat(theseKeys);
      if (_Consent_resp3_allKeys.length > 0) {
        Consent_resp3.keys = _Consent_resp3_allKeys[_Consent_resp3_allKeys.length - 1].name;  // just the last key pressed
        Consent_resp3.rt = _Consent_resp3_allKeys[_Consent_resp3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Consent3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Consent3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Consent3'-------
    for (const thisComponent of Consent3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Consent3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var instructionComponents;
function instructionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction'-------
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(briefing);
    instructionComponents.push(key_resp);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instructionRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *briefing* updates
    if (t >= 0.0 && briefing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      briefing.tStart = t;  // (not accounting for frame time here)
      briefing.frameNStart = frameN;  // exact frame index
      
      briefing.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: [], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction'-------
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _inst2_resp_allKeys;
var instruction2Components;
function instruction2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction2'-------
    t = 0;
    instruction2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    inst2_resp.keys = undefined;
    inst2_resp.rt = undefined;
    _inst2_resp_allKeys = [];
    // keep track of which components have finished
    instruction2Components = [];
    instruction2Components.push(inst_text2);
    instruction2Components.push(inst2_resp);
    
    for (const thisComponent of instruction2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instruction2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instruction2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_text2* updates
    if (t >= 0.0 && inst_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_text2.tStart = t;  // (not accounting for frame time here)
      inst_text2.frameNStart = frameN;  // exact frame index
      
      inst_text2.setAutoDraw(true);
    }

    
    // *inst2_resp* updates
    if (t >= 0.0 && inst2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst2_resp.tStart = t;  // (not accounting for frame time here)
      inst2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { inst2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { inst2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { inst2_resp.clearEvents(); });
    }

    if (inst2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = inst2_resp.getKeys({keyList: ['space'], waitRelease: false});
      _inst2_resp_allKeys = _inst2_resp_allKeys.concat(theseKeys);
      if (_inst2_resp_allKeys.length > 0) {
        inst2_resp.keys = _inst2_resp_allKeys[_inst2_resp_allKeys.length - 1].name;  // just the last key pressed
        inst2_resp.rt = _inst2_resp_allKeys[_inst2_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction2'-------
    for (const thisComponent of instruction2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instruction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var trial_begComponents;
function trial_begRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial_beg'-------
    t = 0;
    trial_begClock.reset(); // clock
    frameN = -1;
    routineTimer.add(5.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    trial_begComponents = [];
    trial_begComponents.push(begin);
    
    for (const thisComponent of trial_begComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function trial_begRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial_beg'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial_begClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *begin* updates
    if (t >= 0.0 && begin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin.tStart = t;  // (not accounting for frame time here)
      begin.frameNStart = frameN;  // exact frame index
      
      begin.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (begin.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      begin.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_begComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_begRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial_beg'-------
    for (const thisComponent of trial_begComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}



var blocks;
var currentLoop;
function blocksLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blocks'
  });
  psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
  currentLoop = blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlock of blocks) {
    const snapshot = blocks.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    const conditionsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(conditionsLoopBegin, conditionsLoopScheduler);
    thisScheduler.add(conditionsLoopScheduler);
    thisScheduler.add(conditionsLoopEnd);
    thisScheduler.add(Blok_breakRoutineBegin(snapshot));
    thisScheduler.add(Blok_breakRoutineEachFrame(snapshot));
    thisScheduler.add(Blok_breakRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var conditions;
function conditionsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  conditions = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions1.xlsx',
    seed: undefined, name: 'conditions'
  });
  psychoJS.experiment.addLoop(conditions); // add the loop to the experiment
  currentLoop = conditions;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCondition of conditions) {
    const snapshot = conditions.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(outcomeRoutineBegin(snapshot));
    thisScheduler.add(outcomeRoutineEachFrame(snapshot));
    thisScheduler.add(outcomeRoutineEnd(snapshot));
    thisScheduler.add(testRoutineBegin(snapshot));
    thisScheduler.add(testRoutineEachFrame(snapshot));
    thisScheduler.add(testRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function conditionsLoopEnd() {
  psychoJS.experiment.removeLoop(conditions);

  return Scheduler.Event.NEXT;
}


function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}




var pressed;
var pressTime;
var automatic;
var tStart;
var _key_press_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat

    pressed = false;
    pressTime = Number.parseFloat("inf");
    automatic = false;
    tStart = t;
    if ((random_ball === 1)) {
        automatic = true;
    }
    if (((counteksik !== 0) && (random_ball === 0))) {
        automatic = true;
        counteksik = (counteksik - 1);
    }
    
    key_press.keys = undefined;
    key_press.rt = undefined;
    _key_press_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fixation);
    trialComponents.push(key_press);
    trialComponents.push(key_start);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((key_press.keys === "space") && (! pressed))) {
        pressed = true;
        pressTime = t;
    }
    if ((((automatic === true) && (! pressed)) && (t > a[compcircle]))) {
        continueRoutine = false;
    }
    
    
     document.body.style.cursor='none';
  
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + fix_dur[f] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *key_press* updates
    if (t >= (fix_dur[f] + 1) && key_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_press.tStart = t;  // (not accounting for frame time here)
      key_press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_press.clearEvents(); });
    }

    if (key_press.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_press.getKeys({keyList: ['space'], waitRelease: false});
      _key_press_allKeys = _key_press_allKeys.concat(theseKeys);
      if (_key_press_allKeys.length > 0) {
        key_press.keys = _key_press_allKeys[_key_press_allKeys.length - 1].name;  // just the last key pressed
        key_press.rt = _key_press_allKeys[_key_press_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *key_start* updates
    if (t >= (fix_dur[f] + 1) && key_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_start.tStart = t;  // (not accounting for frame time here)
      key_start.frameNStart = frameN;  // exact frame index
      
      key_start.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    f = (f + 1);
    
    psychoJS.experiment.addData('key_press.keys', key_press.keys);
    psychoJS.experiment.addData('group', group[0]);
    if (typeof key_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_press.rt', key_press.rt);
        routineTimer.reset();
        }
    
    key_press.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var outcomeComponents;
function outcomeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'outcome'-------
    t = 0;
    outcomeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((((compcircle < 27) && (automatic === true)) && (key_press.keys === "space"))) {
        counteksik = (counteksik + 1);
    }
    if (((automatic === true) && (key_press.keys === undefined))) {
        compcircle = (compcircle + 1);
    }
    
    // keep track of which components have finished
    outcomeComponents = [];
    outcomeComponents.push(text);
    outcomeComponents.push(circle);
    
    for (const thisComponent of outcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function outcomeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'outcome'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = outcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    if (group[0] === 1) {
    frameRemains = 0.0 + (delay1 + 0.5) - psychoJS.window.monitorFramePeriod * 0.75; // most of one frame period left

    }
    if (group[0] === 2) {
    frameRemains = 0.0 + (delay2 + 0.5) - psychoJS.window.monitorFramePeriod * 0.75; // most of one frame period left

    }
    if (group[0] === 3) {
    frameRemains = 0.0 + (delay3 + 0.5) - psychoJS.window.monitorFramePeriod * 0.75; // most of one frame period left

    }
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // *circle* updates
    if (group[0] === 1) {
    if (t >= delay1 && circle.status === PsychoJS.Status.NOT_STARTED){
      // keep track of start time/frame for later
      circle.tStart = t;  // (not accounting for frame time here)
      circle.frameNStart = frameN;  // exact frame index
      
      circle.setAutoDraw(true);
    }
    frameRemains = delay1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75; // most of one frame period left
    }  
    
    if (group[0] === 2) {
    if  (t >= delay2 && circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle.tStart = t;  // (not accounting for frame time here)
      circle.frameNStart = frameN;  // exact frame index
      
      circle.setAutoDraw(true);
    }
    frameRemains = delay2 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75; 
    } 
    
    if (group[0] === 3) {
    if  (t >= delay3 && circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle.tStart = t;  // (not accounting for frame time here)
      circle.frameNStart = frameN;  // exact frame index
      
      circle.setAutoDraw(true);
    }
    frameRemains = delay3 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;
    }
    
    
    if (circle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      circle.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of outcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function outcomeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'outcome'-------
    for (const thisComponent of outcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "outcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _ending_slider_allKeys;
var testComponents;
function testRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'test'-------
    t = 0;
    testClock.reset(); // clock
    frameN = -1;
    
    
    // update component parameters for each repeat
    slider.reset()
    ending_slider.keys = undefined;
    ending_slider.rt = undefined;
    _ending_slider_allKeys = [];
    // keep track of which components have finished
    testComponents = [];
    testComponents.push(text_2);
    testComponents.push(slider);
    testComponents.push(ending_slider);
    
    for (const thisComponent of testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function testRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'test'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    document.body.style.cursor='auto';
    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    
    // *ending_slider* updates
    if (t >= 0.0 && ending_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ending_slider.tStart = t;  // (not accounting for frame time here)
      ending_slider.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ending_slider.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ending_slider.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ending_slider.clearEvents(); });
    }

    if (ending_slider.status === PsychoJS.Status.STARTED) {
      let theseKeys = ending_slider.getKeys({keyList: ['return'], waitRelease: false});
      _ending_slider_allKeys = _ending_slider_allKeys.concat(theseKeys);
      if (_ending_slider_allKeys.length > 0) {
        ending_slider.keys = _ending_slider_allKeys[_ending_slider_allKeys.length - 1].name;  // just the last key pressed
        ending_slider.rt = _ending_slider_allKeys[_ending_slider_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'test'-------
    for (const thisComponent of testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _break_resp_allKeys;
var Blok_breakComponents;
function Blok_breakRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Blok_break'-------
    t = 0;
    Blok_breakClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    count = (count + 1);
    if ((count === 2)) {
        continueRoutine = false;
    }
    
  
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

// and shuffle it
shuffle(a) 
  

function shuffle(fix_dur) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = fix_dur[i];
      fix_dur[i] = fix_dur[j];
      fix_dur[j] = x;
  }
  return fix_dur;
}
  
  shuffle(fix_dur);
  
  counteksik = 0;
  compcircle = 0;
    
    break_resp.keys = undefined;
    break_resp.rt = undefined;
    _break_resp_allKeys = [];
    // keep track of which components have finished
    Blok_breakComponents = [];
    Blok_breakComponents.push(Break);
    Blok_breakComponents.push(break_resp);
    
    for (const thisComponent of Blok_breakComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Blok_breakRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Blok_break'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Blok_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((count === 2)) {
        continueRoutine = false;
    }
    
    
    // *Break* updates
    if (t >= 0.0 && Break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Break.tStart = t;  // (not accounting for frame time here)
      Break.frameNStart = frameN;  // exact frame index
      
      Break.setAutoDraw(true);
    }

    
    // *break_resp* updates
    if (t >= 0.0 && break_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_resp.tStart = t;  // (not accounting for frame time here)
      break_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { break_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { break_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { break_resp.clearEvents(); });
    }

    if (break_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = break_resp.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _break_resp_allKeys = _break_resp_allKeys.concat(theseKeys);
      if (_break_resp_allKeys.length > 0) {
        break_resp.keys = _break_resp_allKeys[_break_resp_allKeys.length - 1].name;  // just the last key pressed
        break_resp.rt = _break_resp_allKeys[_break_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Blok_breakComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Blok_breakRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Blok_break'-------
    for (const thisComponent of Blok_breakComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Blok_break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var endComponents;
function endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(thanks);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks* updates
    if (t >= 0.0 && thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks.tStart = t;  // (not accounting for frame time here)
      thanks.frameNStart = frameN;  // exact frame index
      
      thanks.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thanks.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thanks.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

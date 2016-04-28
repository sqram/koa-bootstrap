// Initializes SPF and creates progress bar
spf.init()

var progress = document.getElementById('progress');
var position = -1;
var start = -1;
var timer = -1;
var animation = {
  REQUEST: [0, 300, '95%', 'waiting'],
  PROCESS: [100, 25, '101%', 'waiting'],
  DONE: [125, 150, '101%', 'done']
};
document.addEventListener('spfrequest', handleRequest);
document.addEventListener('spfprocess', handleProcess);
document.addEventListener('spfdone', handleDone);
function setProgress(anim) {
  clearTimeout(timer);
  var elapsed = (new Date()).getTime() - start;
  var scheduled = anim[0];
  var duration = anim[1];
  var percentage = anim[2];
  var classes = anim[3];
  var wait = scheduled - elapsed;
  if (classes == 'done' && wait > 0) {
    timer = setTimeout(function() {
      setProgress(anim);
    }, wait);
    return;
  }
  progress.className = '';
  var ps = progress.style;
  ps.transitionDuration = ps.TransitionDuration = duration + 'ms';
  ps.width = percentage;
  if (classes == 'done') {
    progress.className = classes;
    timer = setTimeout(function() {
      ps.width = '0%';
    }, duration);
  } else {
    timer = setTimeout(function() {
      progress.className = classes;
    }, duration);
  }
}
function handleRequest(event) {
  start = (new Date()).getTime();
  setProgress(animation.REQUEST);
}
function handleProcess(event) {
  setProgress(animation.PROCESS);
}
function handleDone(event) {
  setProgress(animation.DONE);
}
function clearProgress() {
  clearTimeout(timer);
  progress.className = '';
  var ps = progress.style;
  ps.transitionDuration = ps.TransitionDuration = '0ms';
  ps.width = '0%';
}
/**
 * SPF progress
 */

spf.init()

var progress = document.getElementById('progress');
var position = -1;
var start = -1;
var timer = -1;
var animation = {
  REQUEST: [0, 300, '95%', 'waiting'],
  PROCESS: [100, 25, '101%', 'waiting'],
  DONE: [125, 150, '101%', 'done']
};
document.addEventListener('spfrequest', handleRequest);
document.addEventListener('spfprocess', handleProcess);
document.addEventListener('spfdone', handleDone);
function setProgress(anim) {
  clearTimeout(timer);
  var elapsed = (new Date()).getTime() - start;
  var scheduled = anim[0];
  var duration = anim[1];
  var percentage = anim[2];
  var classes = anim[3];
  var wait = scheduled - elapsed;
  if (classes == 'done' && wait > 0) {
    timer = setTimeout(function() {
      setProgress(anim);
    }, wait);
    return;
  }
  progress.className = '';
  var ps = progress.style;
  ps.transitionDuration = ps.TransitionDuration = duration + 'ms';
  ps.width = percentage;
  if (classes == 'done') {
    progress.className = classes;
    timer = setTimeout(function() {
      ps.width = '0%';
    }, duration);
  } else {
    timer = setTimeout(function() {
      progress.className = classes;
    }, duration);
  }
}
function handleRequest(event) {
  start = (new Date()).getTime();
  setProgress(animation.REQUEST);
}
function handleProcess(event) {
  setProgress(animation.PROCESS);
}
function handleDone(event) {
  setProgress(animation.DONE);
}
function clearProgress() {
  clearTimeout(timer);
  progress.className = '';
  var ps = progress.style;
  ps.transitionDuration = ps.TransitionDuration = '0ms';
  ps.width = '0%';
}
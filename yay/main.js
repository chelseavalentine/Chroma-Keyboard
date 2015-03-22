window.onload = function() {
  CameraInit();
};

var mediaConstraints = { video: true };
var index = 1;
var mediaRecorder;
var video;
var stream;

function CameraInit() {
  navigator.getUserMedia(mediaConstraints, onMediaInit, onMediaError);
}

function startRecording() {
  var videosContainer = document.getElementById("source");
  videosContainer.appendChild(video);
  videosContainer.appendChild(document.createElement('hr'));
  video.play();
  mediaRecorder = new MediaStreamRecorder(stream);
  mediaRecorder.mimeType = 'video/webm'; // this line is mandatory
  mediaRecorder.videoWidth  = 320;
  mediaRecorder.videoHeight = 240;
  mediaRecorder.ondataavailable = function(blob) {
    var video = document.getElementById("videodata");
    video.src = URL.createObjectURL(blob);
    video.play();
  };
  console.log(mediaRecorder);

  var timeInterval = 600 * 1000;
  timeInterval = parseInt(timeInterval);
  // get blob after specific time interval
  setTimeout(function() {
    video.pause();
    mediaRecorder.stop();
  }, timeInterval);
  mediaRecorder.start(timeInterval);
}

//
function onMediaInit(Stream) {
  video = document.getElementById('videodata');
  video.src = URL.createObjectURL(Stream);
  console.log(video);
  video.height = 240;
  video.width = 320;
  video.autoplay = "true";
  stream = Stream;
}

  function onMediaError(e) {
    console.error('media error', e);
  }
  var videosContainer = document.getElementById('videos-container');
  var index = 1;

// below function via: http://goo.gl/B3ae8c
function bytesToSize(bytes) {
 var k = 1000;
 var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
 if (bytes === 0) return '0 Bytes';
 var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)),10);
 return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

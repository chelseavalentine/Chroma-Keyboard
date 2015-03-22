var keys = ['#key1', '#key2', '#key3', '#key4', '#key5', '#key6', '#key7',
'#key8', '#key9', '#key10', '#key11', '#key12', '#key13', '#key14', '#key15', '#key16', '#key17', '#key18', '#key19', '#key20', '#key21', '#key22', '#key23', '#key24', '#key25', '#key26', '#key27', '#key28'];

//For white key
function keyed (number){
	$(keys[number] + ", " + keys[number] + "name").mousedown(
		function(){
			$(keys[number]).css({
				"background-color": "#f9f9f9",
				"border-right": "solid #BDBDBD 2px",
				"border-bottom": "solid #BDBDBD 2px"
			})
		}
	)
	$(keys[number] +", " + keys[number]+"name").hover(function(){
			$(keys[number]+"name").transition({
			opacity: 1
			}, 0)
		},
		function(){
			$(keys[number] + "name").transition({
				opacity: 0.4
			}, 0)
		}
	)
	$(keys[number] + ", " + keys[number] + "name").mouseup(
		function(){
			$(keys[number]).css({
				"background-color": "#F5F5F5",
				"border-right": "solid #E0E0E0 2px",
				"border-bottom": "solid #E0E0E0 2px"
			})
		})
}

//For black keys
function blackkeyed (number){
	$(keys[number] + ", " + keys[number] + "name").mousedown(
		function(){
			$(keys[number]).css({
				"background-color": "#202020",
				"border-right": "solid black 2px",
				"border-bottom": "solid black 2px"
			})
		}
	)
	$(keys[number] +", " + keys[number]+"name").hover(function(){
			$(keys[number]+"name").transition({
			opacity: 1
			}, 0)
		},
		function(){
			$(keys[number] + "name").transition({
				opacity: 0.4
			}, 0)
		}
	)
	$(keys[number] + ", " + keys[number] + "name").mouseup(
		function(){
			$(keys[number]).css({
				"background-color": "black",
				"border-left": "solid #424242 3px",
				"border-bottom": "solid #424242 2px",
				"border-right": "solid black 1px"
			})
		})
}
keyed(0);
blackkeyed(1);
keyed(2);
blackkeyed(3);
keyed(4);
keyed(5);
blackkeyed(6);
keyed(7);
blackkeyed(8);
keyed(9);
blackkeyed(10);
keyed(11);
keyed(12);
blackkeyed(13);
keyed(14);
blackkeyed(15);
keyed(16);
keyed(17);
blackkeyed(18);
keyed(19);
blackkeyed(20);
keyed(21);
blackkeyed(22);
keyed(23);
keyed(24);
blackkeyed(25);
keyed(26);
blackkeyed(27);


//Julie's script
 window.onload = function() {
    trackingInit();
    CameraInit();
  }

  var mediaConstraints = { video: true };
  var index = 1;
  var mediaRecorder;
  var video;
  var stream;
  var os_index = 0;
  var offset = new Array(2);
  var motion_index;
  var play_count = 0;

  function CameraInit() {
    navigator.getUserMedia(mediaConstraints, onMediaInit, onMediaError);
  }

  function startRecording() {

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
    video = document.getElementById('video');
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

  // below function via: http://goo.gl/B3ae8c
  function bytesToSize(bytes) {
   var k = 1000;
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes === 0) return '0 Bytes';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)),10);
   return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
  }

  function trackingInit() {
      var count = 0;
      var vid = document.getElementById('video');
      var inputContainer = document.querySelector('.input-container');

      tracking.ColorTracker.registerColor('green', function(r, g, b) {
        if (r < 50 && g > 200 && b < 50) {
          return true;
        }
        return false;
      });

      tracking.ColorTracker.registerColor('purple', function(r, g, b) {
        if (r > 120 && g < 10 && b > 120) {
          return true;
        }
        return false;
      });

      tracking.ColorTracker.registerColor('red', function(r, g, b) {
         if (r > 220 && g < 80 && b < 60) {
          return true;
          }
          return false;
        });

      var tracker = new tracking.ColorTracker(['magenta', 'cyan', 'red', 'yellow', 'green', 'purple']);

      tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
          if (os_index == 0) {
            os_index++;
            offset[os_index] = rect.y;
          } else {
            os_index--;
            offset[os_index] = rect.y;
          }
          window.plot(rect.x, rect.y, rect.width, rect.height, rect.color);
        $(".rect").transition({delay: 1, opacity: 0}, '0');
        motion_index = Math.abs(offset[1] - offset[0])
        console.log(rect.color);

        if (motion_index > 45) {
          // playSound(rect.color)
          console.log(play_count)
          play_count++;
          if (play_count==2) {
            playSound(rect.color);
            play_count = 0;
          }
        };

      });
    });

    tracking.track('#video', tracker);


    window.plot = function(x, y, w, h, color) {
      var rect = document.createElement('div');
      document.querySelector('.input-container').appendChild(rect);
      rect.classList.add('rect');
      rect.style.border = '2px solid ' + color;
      rect.style.width = w + 'px';
      rect.style.height = h + 'px';
      rect.style.left = (vid.offsetLeft + x) + 'px';
      rect.style.top = (vid.offsetTop + y) + 'px';
    };
  };

  function playSound(color) {

    if (color == "cyan") {
      console.log("cyan played");
      var a1 = beeplay()
      .play('C4', 1)
    } else if (color == "magenta") {
      console.log("magenta played");
      var a2 = beeplay()
      .play('D4', 1)
    } else if (color == "yellow") {
      console.log("yellow played");
      var a3 = beeplay()
      .play('E4', 1)
    } else if (color == "purple") {
      console.log("purple played");
      var a4 = beeplay()
      .play('F4', 1)
    } else if (color == "red") {
      console.log("red played");
      var a4 = beeplay()
      .play('G4', 1)
    }
  };

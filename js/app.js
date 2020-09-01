var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

function onReceiveStream(stream){
  var audio = document.querySelector('audio');
  audio.srcObject = stream;
  audio.onloadedmetadata = function(e){
     console.log('now playing the audio');
     audio.play();
  }
}

function call() {
  var person_to_call = document.getElementById('callings').value;

  var peer = new Peer();
  getUserMedia({video: false, audio: true}, function(stream) {
    var call = peer.call(person_to_call, stream);
    call.on('stream', function(remoteStream) {
      console.log(remoteStream);
      onReceiveStream(remoteStream);
    });
  }, function(err) {
    console.log('Failed to get local stream' ,err);
  });
}

function generateAns() {
  var peer = new Peer();
  peer.on('open', (id) => {
    document.getElementById('peerid').innerHTML = id;
  });
  peer.on('call', function(call) {
    getUserMedia({video: false, audio: true}, function(stream) {
      call.answer(stream); 
      call.on('stream', function(remoteStream) { 
        console.log(remoteStream);
        onReceiveStream(remoteStream);
      });
  }, function(err) {
    console.log('Failed to get local stream', err);
    });
  });
}

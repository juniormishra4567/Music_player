window.addEventListener('load', function () {
    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const skipButton = document.getElementById('skip-button');
  
    playButton.addEventListener('click', function () {
      audioPlayer.play();
    });
  
    pauseButton.addEventListener('click', function () {
      audioPlayer.pause();
    });
  
    skipButton.addEventListener('click', function () {
      // Add your logic here to skip to the next track
    });
  });
  
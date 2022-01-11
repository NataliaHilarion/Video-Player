const $video = document.querySelector('#video');
    const $play = document.querySelector('#play');
    const $pause = document.querySelector('#pause');

    $play.addEventListener('click', handlePlay);
    $pause.addEventListener('click', handlePause);

    function handlePlay(){
      $video.play();
      $play.hidden = true
      $pause.hidden = false
      console.log('le dio click en play')
    }

    function handlePause() {
      $video.pause();
      $play.hidden = false
      $pause.hidden = true
      console.log('di click en pause')
    }

    const $forward = document.querySelector('#forward')
    const $backward = document.querySelector('#backward')

    $forward.addEventListener('click', handleForward)
    $backward.addEventListener('click', handleBackward)

    function handleForward(){
      $video.currentTime = $video.currentTime + 10
      console.log('estoy en adelantar', $video.currentTime)
    }

    function handleBackward(){
      $video.currentTime = $video.currentTime - 10
      console.log('estoy en atrasar', $video.currentTime)
    }


    const $progress = document.querySelector('#progress')
    $video.addEventListener('loadedmetadata', handleLoaded)
    $video.addEventListener('timeupdate', handleUpdate)

    function handleLoaded(){
      $progress.max = $video.duration
      console.log('video cargado')
    }

    function handleUpdate(){
      $progress.value = $video.currentTime
      // console.log('hla', $video.currentTime)
    }

    $progress.addEventListener('input', handleInput )

    function handleInput(){
      $video.currentTime = $progress.value
    }


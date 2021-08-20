const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')

$play.addEventListener('click', handlePlay )
$pause.addEventListener('click', handlePause )

function handlePlay() {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  // console.log('le diste click en el boton de PLAY')
}

function handlePause(){
  $video.pause()
  $play.hidden = false
  $pause.hidden = true
  // console.log('diste click en el boton de PAUSE')
}

const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$backward.addEventListener('click', handleBackward )
$forward.addEventListener('click', handleForward)


function handleBackward(){
  $video.currentTime -= 10
  console.log('se retrocedieron 10 segundos', $video.currentTime)
}

function handleForward() {
  $video.currentTime += 10
  console.log('se adelantaron 10 segundos', $video.currentTime)
}

const $progress = document.querySelector('#progress')

$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded(){
  $progress.max = $video.duration
  // console.log('cada vez que carga la pagina')
}

function handleTimeUpdate(){
  $progress.value = $video.currentTime
  // console.log('cada vez que se actualice el tiempo', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput(){
  $video.currentTime = $progress.value
  console.log($progress.value)
}

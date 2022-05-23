const video = document.querySelector('video')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
const toggle = document.querySelector('.toggle');
const ranges = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('.player__button[data-skip]');


function togglePlay() {
  video.paused ? video.play() : video.pause()
}
function updateButton() {
  toggle.innerHTML = video.paused ? '►' : '❚ ❚'
}
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}
function handleRangeUpdate() {
  video[this.name] = this.value
}
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}
function handleSkip() {
  video.currentTime += parseFloat(this.dataset.skip) 
}


video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay)

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

let mousedown = false
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('click', scrub)

skipButtons.forEach(button => button.addEventListener('click', handleSkip))


// HTML Audio and Video DOM Reference
// https://www.w3schools.com/tags/ref_av_dom.asp
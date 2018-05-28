function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '') // takes "px" out so just numbers remain
  var left = parseInt(leftNumbers, 10) // converts string to integer
  if (left > 0) {
    dodger.style.left = `${left - 1}px`  // changes the styl.left of the dodger by -1
  }
}

function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', '')
  var right = parseInt(rightNumbers, 10)
  if (right < 360) { // box length is 400, dodger length is 40
    dodger.style.left = `${right + 1}px`
  }
}

function moveDodgerUp() {
  var upNumbers = dodger.style.bottom.replace('px', '')
  var up = parseInt(upNumbers, 10)
  if (up < 380) {
    dodger.style.bottom = `${up + 1}px`
  }
}

function moveDodgerDown() {
  var downNumbers = dodger.style.bottom.replace('px', '')
  var down = parseInt(downNumbers, 10)
  if (down > 0) { // box height is 400, dodger height is 20
    dodger.style.bottom = `${down - 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
  if (e.which === 39) {
    moveDodgerRight()
  }
  if (e.which === 38) {
    moveDodgerUp()
  }
  if (e.which === 40) {
    moveDodgerDown()
  }
 })

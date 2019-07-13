import $ from 'jquery'

$('#div1').hide(4500)


// vanilla hide animation made by myself
const vanilla = document.getElementById('vanilla1')

function handler() {
  const cssStyles = window.getComputedStyle(vanilla)

  const width = parseFloat(cssStyles.width)
  const height = parseFloat(cssStyles.height)
  const opacity = parseFloat(cssStyles.opacity)

  const newWidth = width - 300 / 500
  const newHeight = height - 300 / 500
  vanilla.style.width = newWidth + 'px'
  vanilla.style.height = newHeight + 'px'
  vanilla.style.opacity = opacity - 1 / 500
  if (opacity <= 0) {
    vanilla.style.display = 'none'
  }
  requestAnimationFrame(handler)
}

handler()

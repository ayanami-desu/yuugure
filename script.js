let sun = document.getElementById('sun')
let mountain = document.getElementById('mountain')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let header = document.querySelector('header')

window.addEventListener('scroll', function () {
  let value = window.scrollY
  sun.style.top = value * 0.75 + 'px'
  mountain.style.top = value*0.5+'px'
  text.style.marginRight = value * 3.5 + 'px'
  text.style.marginTop = value * 1.5 + 'px'
  btn.style.marginTop = value * 1.5 + 'px'
  header.style.top = value * 0.5 + 'px'
})

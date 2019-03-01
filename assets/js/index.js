const sects = document.querySelectorAll('.container')

let IO;

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
}

const callback = (entries) => {
  entries.forEach((entry) => {
    
  })
}

IO = new IntersectionObserver(callback, options)

sects.forEach(sect => IO.observe(sect))
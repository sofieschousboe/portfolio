// FIX SLIDER INTERVAL

const next=document.querySelector('#next')
const prev=document.querySelector('#prev')

function handleScrollNext (direction) {
  const cards = document.querySelector('.card-content')
  cards.scrollLeft=cards.scrollLeft += window.innerWidth / 1 > 600 ? window.innerWidth /3 : window.innerWidth -100
}

function handleScrollPrev (direction) {
  const cards = document.querySelector('.card-content')
  cards.scrollLeft=cards.scrollLeft -= window.innerWidth / 1 > 600 ? window.innerWidth /3 : window.innerWidth -100
}

next.addEventListener('click', handleScrollNext)
prev.addEventListener('click', handleScrollPrev)


/* ------- FUTURE PROJECTS ON SITE ------- */
// Make Title scroll up with main content and attach in header and make header get background color --white when main content reaches
//Make "Frontend developer" and "creativity" change fonts on timed intervals
// LAV PROJEKTER TIL ARRAY OG GØR MULIGT AT FILTRERE UD FRA ARBEJDSOMRÅDER SÅSOM DEVELOPMENT, DESIGN, RESEARCH, UX, UI
//comentários!!
//String(texto)
//Number(números)
//Boolean(true or false)


window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection (section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha imaginária
  //quais dados é preciso?

  // o topo da seção
  const sectionTop = section.offsetTop 
  // a altura da seção
  const sectionHeight = section.offsetHeight 
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //informações dos dados
  //console.log('O topo da seção passou da target line?', sectionTopReachOrPassedTargetLine)

  //verificar se o final da seção está abaixo da target line

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //console.log('O fim da seção passou da target line?', sectionEndPassedTargetLine)

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const  menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add{'active'}
  }
  }


function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

//ScrollReveal só aceita objetos!!
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)

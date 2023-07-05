const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.navbar__mobile')
const navItems = navMobile.querySelectorAll('.navbar__item')
const shadow = document.querySelector('.shadow')
const scrollToTopBtn = document.querySelector('.scroll-to-top-btn')
const footerYear = document.querySelector('.footer__year')
let root = document.documentElement

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('navbar__mobile--active')
    shadow.classList.toggle('shadow--active')
    document.body.classList.toggle('fixed-body')
}

const handleScrollBar = () => {
	const scroll = window.scrollY
	const leftToScroll = document.body.getBoundingClientRect().height - window.innerHeight
	const scrollBarWidth = Math.floor((scroll / leftToScroll) * 100)

	root.style.setProperty('--scroll-width', `${scrollBarWidth}%`)

    if(scrollBarWidth > 10) {
        nav.classList.add('nav--active')
    } else {
        nav.classList.remove('nav--active')
    }

    if(scrollBarWidth > 95) {
        scrollToTopBtn.classList.add('scroll-to-top-btn--active')
    } else {
        scrollToTopBtn.classList.remove('scroll-to-top-btn--active')
    }

}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleScrollBar()
handleCurrentYear()
window.addEventListener('scroll', handleScrollBar)
navBtn.addEventListener('click', handleNav)
shadow.addEventListener('click', handleNav)
navItems.forEach(navItem => navItem.addEventListener('click', handleNav))
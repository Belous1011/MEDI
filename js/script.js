const rec = document.querySelector('.recommendations-new')
const iso = document.querySelector('.iso-new')
const nov = document.querySelector('.novelty-new')
const recText = document.querySelector('.recommendations')
const isoText = document.querySelector('.iso')
const novText = document.querySelector('.novelty')
rec.onclick = function(){
	rec.classList.add('dark')
	iso.classList.remove('dark')
	nov.classList.remove('dark')
	recText.classList.remove('hide')
	isoText.classList.add('hide')
	novText.classList.add('hide')
}
iso.onclick = function(){
	rec.classList.remove('dark')
	iso.classList.add('dark')
	nov.classList.remove('dark')
	recText.classList.add('hide')
	isoText.classList.remove('hide')
	novText.classList.add('hide')
}
nov.onclick = function(){
	rec.classList.remove('dark')
	iso.classList.remove('dark')
	nov.classList.add('dark')
	recText.classList.add('hide')
	isoText.classList.add('hide')
	novText.classList.remove('hide')
}
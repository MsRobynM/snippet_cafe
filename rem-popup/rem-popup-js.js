console.log('JS is operational');

const popupEl = document.querySelector('.mypopup');
const openpopEl = document.querySelector('#openpop');
const hidepopEl = document.querySelector('#hidepop');

openpopEl.addEventListener('click', () => {
	console.log('hi');
	popupEl.classList.add('showme');
	openpopEl.classList.add('hideme');
});

hidepopEl.addEventListener('click', () => {
	console.log('bye');
	popupEl.classList.remove('showme');
	openpopEl.classList.remove('hideme');
});

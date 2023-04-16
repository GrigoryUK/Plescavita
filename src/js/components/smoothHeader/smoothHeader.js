import { addClass, removeClass } from "../shared/helpers";



function smoothHeader() {
	const trigger = document.getElementById('triggerHeader').offsetTop;
	const header = document.querySelector('.header--pre--fixed'); 
	

	if (header) {
		document.addEventListener('scroll', (el) => {
			let scrollDistance = window.scrollY;
	 
			if (scrollDistance >= trigger) {
				addClass(header, 'header--fixed') 
			} else {
				removeClass(header, 'header--fixed')
			}
		})
	}

	
}

export { smoothHeader }


function checkboxAddress() {
	const container = document.querySelector('.adresses'); 

	if (container) {
		const inputs = container.querySelectorAll('input[type="checkbox"]'); 
		// inputs.forEach((input) => {
		// 	input.addEventListener('click', (el) => {
		// 		inputs.forEach(input => {
		// 			input.removeAttribute('checked', 'checked')
		// 		})
		// 		input.setAttribute('checked', 'checked')
		// 	})
			
		// })
		
		// function toggleCaret(open, icon) {
		// 	for (let i = 0; i < open.length; i++) {
		// 		open[i].addEventListener("click", function () {
		// 			open[i].setAttribute('checked', 'checked')
		// 			for (var j = 0; j < open.length; j++) {
		// 				if (i != j) {
		// 					open[j].removeAttribute('checked', 'checked')
		// 				}
		// 			}
		// 		});
		// 	}
		// }

		// toggleCaret(inputs)
	}
}

export {
	checkboxAddress
}
import { addClass, removeClass } from "../shared/helpers";

export default function Tabs() {
	const containerTabs = document.querySelector('.sectionTabs__buttons');

	if (containerTabs) {
		const buttons = containerTabs.querySelectorAll('button');
		buttons.forEach((button) => {
			button.addEventListener('click', (el) => {

				if (button.classList.contains('button-default-active')) {
					return;
				}
				buttons.forEach((button) => {
					removeClass(button, 'button-default-active')
				})
				addClass(button, 'button-default-active')
				TabsChange(button)
			});
		});
	}

	function TabsChange(button) {
		const container = document.querySelector('.sectionTabs'); 
		const blocks  = container.querySelectorAll('.sectionTabs__block'); 
		const id = button.id;

		if (id === 'all') {
			blocks.forEach((block) => {
				removeClass(block, 'block-none')
				addClass(block, 'block-active')
			});
			return;
		}
		
		
		blocks.forEach((block) => {
			addClass(block, 'block-none')
		});

		blocks.forEach((block) => {
			const category = block.getAttribute('data-tab'); 
			console.log(category);

			if (category !== id) {
				removeClass(block, 'block-active')
				addClass(block, 'block-none')
			} else {
				removeClass(block, 'block-none')
				addClass(block, 'block-active')
			}
			
		});
		
		

		 

		
	}

}
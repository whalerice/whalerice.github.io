window.onload = () => {
	const icon = document.querySelectorAll('.material-icons-round');
	for (let i = 0; i < icon.length; i++) {
		icon[i].classList.add('notranslate');
	}
	// document.body.addEventListener('click', clickHandler);

	window.addEventListener('resize', resizeHandler);
};

// while (!elem.classList.contains('sidebar')) {
// 	elem = elem.parentNode;
// 	console.log(elem.nodeName);
// 	if (elem.nodeName === 'BODY') {
// 		elem = null;
// 		return;
// 	}
// 	// console.log(elem);
// }

const resizeHandler = (e) => {
	const sidebarElem = document.querySelector('.sidebar').classList;
	const winW = window.innerWidth;
	if (winW >= 992 && sidebarElem.contains('show')) {
		toggleSidebar();
	}
};

const clickHandler = (e) => {};

// sidebar Event
const toggleSidebar = () => {
	const body = document.body;
	const sidebarElem = document.querySelector('.sidebar').classList;
	if (!sidebarElem.contains('show')) {
		sidebarElem.add('show');
		body.style.overflow = 'hidden';
	} else {
		sidebarElem.remove('show');
		body.style.overflow = '';
	}
};

// search box Event
// const toggleSearchBox = () => {
// 	const searchBoxElem = document.querySelector('.search-box').classList;
// 	if (!searchBoxElem.contains('show')) {
// 		searchBoxElem.add('show');
// 	} else {
// 		searchBoxElem.remove('show');
// 	}
// };

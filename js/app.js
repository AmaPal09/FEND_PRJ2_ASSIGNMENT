/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
console.log("File is attached");

// Get all sections on the page.
const sectionsList = document.querySelectorAll('section');

// Get the navigation bar list element which be the parent element
const navBarParent = document.querySelector('#navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/




/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

function addNavItems() {
	// Document fragment to load nav list item
	const navDocFragment = document.createDocumentFragment();

	for(let i = 0; i < sectionsList.length; i++) {
		const secElem = sectionsList[i];

		// create list item element
		const navListItem = document.createElement('li');
		// create anchor element to add in the list item
		const anchorElem = document.createElement('a');
		anchorElem.href = `#${secElem.id}`;
		anchorElem.innerText = secElem.querySelector('h2').innerText;
		// anchorElem.style.textDecoration = "none";
		// anchorElem.style.color = "black";
		anchorElem.classList.add('menu__link');

		anchorElem.addEventListener('click', (event) => {
			event.preventDefault();
			console.log("scroll activated");
			secElem.scrollIntoView({behavior: "smooth"});
		});

		navListItem.appendChild(anchorElem);
		// navListItem.style.padding = "1rem";

		navDocFragment.appendChild(navListItem);
	}

	navBarParent.appendChild(navDocFragment);

}

addNavItems();


// Add class 'active' to section when near top of viewport

var isInViewport = function(elem) {
	var bounding = elem.getBoundingClientRect();
	return (
		bounding.top  + 150 >=0 &&
		bounding.left + 150 >= 0 &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
		);
};

function correspondingMenu(sectionId) {
	// console.log(`correspondingMenu called with ${sectionId}`);
	const menuList = document.querySelectorAll(".menu__link");
	// console.log(menuList);
	for (let i = 0; i < menuList.length; i++) {

		const menuAnchor = menuList[i].getAttribute('href').substring(1);
		if (sectionId === menuAnchor){
			// console.log(menuList[i]);
			return menuList[i];
		}
	}
}


function activeSections() {
	console.log("activeSections called");
	window.addEventListener('scroll', () => {
			console.log("scroll event listner funciton called ");

			sectionsList.forEach((section) => {
				console.log("check for each section");


				const sectionId = section.id;
				const menuItem = correspondingMenu(sectionId);

				if (isInViewport(section)) {
					menuItem.classList.add("highlightNav");
					section.classList.add("your-active-class");
				}
				else {
					menuItem.classList.remove("highlightNav");
					section.classList.remove("your-active-class");
				}
			});

	});
}

activeSections();


//To top button
const toTopButton = document.getElementById("toTopButton");

toTopButton.addEventListener('click', (event) => {
	document.body.scrollTop = 0; //For safari
	document.documentElement.scrollTop = 0; //For chrome, firefox, ie, opera, etc.
});


//display to top button on scrolling
window.addEventListener('scroll', (event) => {
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
		toTopButton.style.display = "block";
	}
	else {
		toTopButton.style.display = "none";
	}
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active



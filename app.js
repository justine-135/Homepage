window.addEventListener("load", () => {
	//buttons
	const hamburger = document.querySelector(".header-bg__navbar__menu-btn");
	const close = document.querySelector(
		".header-bg__mobile-nav__close-mobile-nav"
	);
	const prevBtn = document.querySelector("#prev-btn");
	const nextBtn = document.querySelector("#next-btn");

	//text
	const headingText = document.querySelector(".nav-page__text h1");
	const paragraph = document.querySelector(".nav-page__text p");

	//mobile navbar
	const mobileNavbar = document.querySelector(".header-bg__mobile-nav");

	//curtain
	const curtain = document.querySelector(".curtain");

	//big image
	const header = document.querySelector(".header-bg");

	//media query
	const x = window.matchMedia("(max-width: 768px)");

	let counter = 0;
	prevBtn.addEventListener("click", () => {
		if (counter == 1) {
			headingText.textContent = `  Discover innovative ways to decorate
		`;
			paragraph.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
		Our experts combine form and function in bringing your vision to life. Create a room in your 
		own style with our collection and make your property a reflection of you and what you love.`;
		} else if (counter == 2) {
			headingText.textContent = `  We are available all across the globe
			`;
			paragraph.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
			Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
			store locator. Any questions? Don't hesitate to contact us today.`;
		} else if (counter == 3) {
			headingText.textContent = `  Manufactured with the best materials
			`;
			paragraph.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
			to ensure that every product is made as perfect and as consistent as possible. With three decades of 
			experience in this industry, we understand what customers want for their home and office.`;
		} else if (counter == 0) {
			headingText.textContent = `  Manufactured with the best materials
			`;
			paragraph.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
			to ensure that every product is made as perfect and as consistent as possible. With three decades of 
			experience in this industry, we understand what customers want for their home and office.`;
		}
		if (x.matches) {
			if (counter == 1) {
				header.style.backgroundImage =
					'url("../images/mobile-image-hero-1.jpg")';
			} else if (counter == 2) {
				header.style.backgroundImage =
					'url("../images/mobile-image-hero-2.jpg")';
			} else if (counter == 3) {
				header.style.backgroundImage =
					'url("../images/mobile-image-hero-3.jpg")';
			} else if (counter == 0) {
				header.style.backgroundImage =
					'url("../images/mobile-image-hero-3.jpg")';
				counter = 3;
			}
		} else {
			if (counter == 1) {
				header.style.backgroundImage =
					'url("../images/desktop-image-hero-1.jpg")';
			} else if (counter == 2) {
				header.style.backgroundImage =
					'url("../images/desktop-image-hero-2.jpg")';
			} else if (counter == 3) {
				header.style.backgroundImage =
					'url("../images/desktop-image-hero-3.jpg")';
			} else if (counter == 0) {
				header.style.backgroundImage =
					'url("../images/desktop-image-hero-3.jpg")';
				counter = 3;
			}
		}

		counter--;
	});

	nextBtn.addEventListener("click", () => {
		counter++;
		if (counter == 1) {
			headingText.textContent = `  We are available all across the globe
			`;
			paragraph.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
			Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
			store locator. Any questions? Don't hesitate to contact us today.`;
		} else if (counter == 2) {
			headingText.textContent = `  Manufactured with the best materials
			`;
			paragraph.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
			to ensure that every product is made as perfect and as consistent as possible. With three decades of 
			experience in this industry, we understand what customers want for their home and office.`;
		} else if (counter == 3) {
			headingText.textContent = `  Discover innovative ways to decorate
			`;
			paragraph.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
			Our experts combine form and function in bringing your vision to life. Create a room in your 
			own style with our collection and make your property a reflection of you and what you love.`;
		}
		if (x.matches) {
			if (counter == 1) {
				header.style.backgroundImage =
					'url("../images/mobile-image-hero-2.jpg")';
			} else if (counter == 2) {
				header.style.backgroundImage =
					'url("../images/mobile-image-hero-3.jpg")';
			} else if (counter == 3) {
				header.style.backgroundImage =
					'url("../images/mobile-image-hero-1.jpg")';
				counter = 0;
			}
		} else {
			if (counter == 1) {
				header.style.backgroundImage =
					'url("../images/desktop-image-hero-2.jpg")';
			} else if (counter == 2) {
				header.style.backgroundImage =
					'url("../images/desktop-image-hero-3.jpg")';
			} else if (counter == 3) {
				header.style.backgroundImage =
					'url("../images/desktop-image-hero-1.jpg")';
				counter = 0;
			}
		}
	});

	hamburger.addEventListener("click", () => {
		mobileNavbar.style.transform = "translateY(0%)";
		curtain.style.display = "block";
		document.querySelector("body").style.overflow = "hidden";
	});

	close.addEventListener("click", () => {
		mobileNavbar.style.transform = "translateY(-100%)";
		curtain.style.display = "none";
		document.querySelector("body").style.overflow = "auto";
	});
});

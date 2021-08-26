window.addEventListener("load", () => {
	const arrowBtn = document.querySelectorAll(".nav-buttons button");
	const showcaseHeader = document.querySelector(".showcase-nav-container");
	const header = document.querySelector(".slider-text h1");
	const headerSub = document.querySelector(".slider-text p");
	const hamburger = document.querySelector(".hamburger");
	const mobileNav = document.querySelector(".burger-menu");
	const curtain = document.querySelector(".curtain");
	const closeNav = document.querySelector(".close");

	hamburger.addEventListener("click", () => {
		curtain.style.display = "block";
		mobileNav.style.display = "flex";
		document.querySelector("body").style.overflowY = "hidden";
	});

	closeNav.addEventListener("click", () => {
		curtain.style.display = "none";
		mobileNav.style.display = "none";
		document.querySelector("body").style.overflowY = "auto";
	});

	let counter = 0;
	for (let i = 0; i < arrowBtn.length; i++) {
		arrowBtn[i].addEventListener("click", () => {
			// showcaseHeader.style.animation = "header 500ms ease";
			// headerSub.style.animation = "headerSub 500ms ease";
			// showcaseHeader.style.animation = "none";
			// headerSub.style.animation = "none";
			if (arrowBtn[i].id == "prev-btn") {
				counter--;

				if (counter == 0) {
					showcaseHeader.style.backgroundImage =
						"url('./images/desktop-image-hero-1.jpg')";
					header.textContent = "Discover innovative ways to decorate";
					headerSub.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
                        Our experts combine form and function in bringing your vision to life. Create a room in your 
                        own style with our collection and make your property a reflection of you and what you love.`;
				}
				if (counter == 1) {
					showcaseHeader.style.backgroundImage =
						"url('./images/desktop-image-hero-2.jpg')";
					header.textContent = "We are available all across the globe";
					headerSub.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                                Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                                store locator. Any questions? Don't hesitate to contact us today.`;
				}
				if (counter == 2) {
					showcaseHeader.style.backgroundImage =
						"url('./images/desktop-image-hero-3.jpg')";
					header.textContent = "Manufactured with the best materials";
					headerSub.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                        experience in this industry, we understand what customers want for their home and office.`;
				}
				if (counter == -1) {
					showcaseHeader.style.backgroundImage =
						"url('./images/desktop-image-hero-3.jpg')";
					header.textContent = "Manufactured with the best materials";
					headerSub.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                        experience in this industry, we understand what customers want for their home and office.`;
					counter = 2;
				}
			} else if (arrowBtn[i].id == "next-btn") {
				counter++;
				if (counter == 3) {
					counter = 0;
					console.log(counter);
					showcaseHeader.style.backgroundImage =
						"url('./images/desktop-image-hero-1.jpg')";
					header.textContent = "Discover innovative ways to decorate";
					headerSub.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
                        Our experts combine form and function in bringing your vision to life. Create a room in your 
                        own style with our collection and make your property a reflection of you and what you love.`;
				}
				if (counter == 1) {
					showcaseHeader.style.backgroundImage =
						"url('./images/desktop-image-hero-2.jpg')";
					header.textContent = "We are available all across the globe";
					headerSub.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                                Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                                store locator. Any questions? Don't hesitate to contact us today.`;
				}
				if (counter == 2) {
					showcaseHeader.style.backgroundImage =
						"url('./images/desktop-image-hero-3.jpg')";
					header.textContent = "Manufactured with the best materials";
					headerSub.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                        experience in this industry, we understand what customers want for their home and office.`;
				}
			}
		});
	}
});

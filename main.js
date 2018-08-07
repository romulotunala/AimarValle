let menuBtn = document.querySelector('.header__menuMobile'),
		menu = document.getElementById('menu'),
		sizeHeader = document.querySelector('header').clientHeight;

		console.log(sizeHeader);

	menuBtn.addEventListener('click', showMenu);

	function showMenu(){
		if(menu.style.display == 'none'){
			menu.style.display = 'flex';
		}else{
			menu.style.display = 'none'
		}
	}

	function hideMenu(){
		if (window.innerWidth <= '780') {
			menu.style.display = 'none';
			menu.style.top = sizeHeader+'px'; 
		}else{
			menu.style.display = 'flex';
		}
	}

	hideMenu();

	function resize(){
		hideMenu();
	};